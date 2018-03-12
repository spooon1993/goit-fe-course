// 1. Объект VirtualDOM
// 2. Сравнивать VirtualDOM и DOM -> отрисовать отличия
// 3. Создание класса VirtalDOM Элемента
// 4. Добавляем методы к VirtualDOM element.

function compareRecursive(obj1, obj2){
	for(key_1 in obj1){
		if(!(key_1 in obj2)){
				compareRecursive.diff.push(obj1[key_1]);
				continue;
			}
		for(key_2 in obj2){
			if(key_1 === key_2 && key_1 !== 'domLink'){
				if(typeof obj1[key_1] === 'object' && 
				   typeof obj2[key_2] === 'object'){
					compareRecursive(obj1[key_1], obj2[key_2]);
				}
				if(obj1[key_1] !== obj2[key_2]){
					compareRecursive.diff.push(obj1[key_1]);
				};
			}
		}
	}
	return compareRecursive.diff;
}
compareRecursive.diff = [];


const compareDOM = () => {
	let diff = Array.from(compareRecursive(virtualDOM, virtualDOMprev));
	if(diff.length > 0){
		compareRecursive.diff = [];
		diff.map((c) => {
			if(c instanceof V_DOMElement){
				if(c.parent){
					c.parent.appendChild(c.domLink);
				} else {
					document.body.appendChild(c.domLink)
				}
			} else if(typeof c === 'string'){
				c.parent.innerText = c.textContent;
			}
		});
		virtualDOMprev = Object.assign({}, virtualDOM);
	} else {
		return false;
	}
}

// <div class="test" id="test"> content </div>

class V_DOMElement {
	constructor(tagName = 'div', properties = {}, children = null){
		this.tagName = tagName;
		this.className = properties.className || '';
		this.changeChildren(children);

		let element = document.createElement(this.tagName);
		element.className = this.className;
		element.innerText = typeof this.textContent == 'string' ? this.textContent : '';
		if(this.children){
			this.children.parent = this;
			element.appendChild(this.children.domLink);
		}
		if(tagName === 'body'){
			this.domLink = document.body;
		} else {
			this.domLink = element;
		};
	}
	changeChildren(children){
		if(children === null){
			return;
		} else if(children instanceof V_DOMElement) {
			this.children = children;
		} else if(typeof children === 'string'){
			this.textContent = children;
		}

		// Сравнить прошлый дом с новым
		// Если отличается - отрисовать новый дом и перезаписать прошлый
	}
}

let virtualDOM = {
	body: new V_DOMElement("body")
};

let virtualDOMprev = {
	body: new V_DOMElement("body")
};



virtualDOM.body.changeChildren(
	new V_DOMElement('div', {
		className: "test",
		id: "test",
		'data-space': "myspace.com"
		}, 
		new V_DOMElement('a', {
			href: "google.com"
		}, 'Link')
	)
);

let obj1 = {
	a: 1,
	b: 2,
	c: {
		d: new V_DOMElement("div"),
		e: 1
	}
}

let obj2 = {
	a: 1,
	b: 2,
	c: {
		d: new V_DOMElement("div"),
		e: 1
	}
}

let obj3 = {
	a: 1,
	c: {
		d: new V_DOMElement("div"),
		e: 1
	}
}

let obj4 = {
	a: 1,
	b: 3,
	c: {
		d: new V_DOMElement("div"),
		e: 1
	}
}
function compare(obj1, obj2){
	let obj1String = JSON.stringify(obj1);
	let obj2String = JSON.stringify(obj2);
	return obj1String === obj2String;
}
