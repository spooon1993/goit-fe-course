const currencyList = 'https://api.coinmarketcap.com/v1/ticker/?limit=30';
let names = [];
fetch(currencyList)
    .then( (res) => res.json() )
    .then( (data) => names = names.concat(data) );

let findCurrency = ( search, currencyName ) => {
    return currencyName.filter( item => {
        let reg = new RegExp(`^${search}`, 'gi');
        return item.name.match(reg) || item.symbol.match(reg);
    })
};

function showResult () {
    let resultArr = findCurrency(this.value, names);
    // console.log(resultArr);
    let html = resultArr.map( (item) => {

        const regex = new RegExp(this.value, 'gi');
        const nameCurrency = item.name.replace(regex, `<span class="hl">${this.value}</span>`);
        const symbolCurrency = item.symbol.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
         <li>
         <span class="name">${nameCurrency}, ${symbolCurrency}</span>
     </li>`

        // return `<li>
    // <!--//      <span class="name">${item.name}, ${item.symbol}</span>-->
    //    </li>`
    }).join('');
    container.innerHTML = html;
}

let container = document.querySelector('.result');
const input = document.querySelector('.search');
input.addEventListener('input', showResult);

container.addEventListener('click', function (event) {
    console.log(event.target.textContent);
    input.value = event.target.textContent;
    container.innerHTML = '';
});


