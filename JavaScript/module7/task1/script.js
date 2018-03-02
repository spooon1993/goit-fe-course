const frankiInfo = {
    content: "Swing dancer extraordinaire Frankie Manning was a leading dancer at Harlem's legendary Savoy Ballroom where, in the mid-1930s, he revolutionized the course of the lindy hop with his innovations, including the lindy air step and synchronized ensemble lindy routine. As a featured dancer and chief choreographer for the spectacular Whitey's Lindy Hoppers, he performed in numerous films (including Hellzapoppin'), and entertained on stages around the world with jazz greats Ethel Waters, Count Basie, Duke Ellington, Ella Fitzgerald, and Cab Calloway. Upon the demise of the Swing Era, Frankie took a job in the Post Office, where he worked for thirty years until his rediscovery by a new generation of swing dance enthusiasts in the mid-1980s. From then on he was in constant demand and motion, teaching, choreographing, and performing globally. He won a 1989 Tony Award for his choreography in Black and Blue, and served as a consultant for and performed in Spike Lee's Malcolm X. Frankie's activities have been chronicled in hundreds of articles (including features in GQ and People) and dozens of news programs (including a profile on ABC's 20/20). Frankie passed away in 2009, but his memory and legacy are being carried on by swing dancers around the world.",
    frankieTimeline: {
        "1914" : "Born on May 26 in Jacksonville, Florida."
        ,"1926" : "Savoy Ballroom opens at Lenox Avenue and 140th Street in Harlem."
        ,"1933" : "First ventures to Savoy Ballroom."
        ,"1934" : "Invited by Herbert \"Whitey\" White to join elite group of Savoy Lindy hoppers."
        ,"1935" : ["Introduces the first Lindy air step, over-the-back.", "Introduces \"stops\" and synchronized ensemble lindy routines."]
        ,"1936" : "Whyte's Hopping Maniacs appear in downtown reopening of the Cotton Club."
        ,"1937" : "Whitey's Lindy Hoppers appear in A Day at the Races (uncredited)."
        ,"1938" : "Whitey's Hopping Maniacs appear in Radio City Revels (uncredited)."
        ,"1939" : "Arthur White's Lindy Hoppers appear in Keep Punching."
        ,"1941" : "Congeroo Dancers appear in Hellzapoppin'."
        ,"1942" : "Whitey's Lindy Hoppers appear in Hot Chocolate (\"Cottontail\") with Duke Ellington."
        ,"1943" : "Inducted into Army. Serves in New Guinea, the Philippines, and Japan."
        ,"1947" : "FM's new group, the Congaroo Dancers, debuts at Roxy Theatre."
        ,"1948" : "Four Congaroos appear in Killer Diller."
        ,"1955" : ["Disbands the Congaroo Dancers.", "Goes to work for the U.S. Postal Service."]
        ,"1958" : "Savoy Ballroom closes."
        ,"1986" : "Begins teaching career by agreeing to work with Erin Stevens and Steven Mitchell."
        ,"1987" : "Retires from the post office."
        ,"1989" : "Wins Tony Award for Best Choreography for Black and Blue with Cholly Atkins, Henry{ LeTang, and Fayard Nicholas."
        ,"1992" : ["Serves as consultant/performer in Spike Lee's film Malcolm X.", "Serves as assistant choreographer/performer with Norma Miller in Debbie Allen's\" Stompin' at the Savoy."]
        ,"1994" : "Receives NEA Choreographers' Fellowship."
        ,"1999" : "Performs in PBS special, Swinging' with Duke, featuring the Lincoln CenterJazz Orchestra with Wynton Marsalis."
        ,"2000" : "Receives NEA National Heritage Fellowship."
        ,"2001" : "Appears in Ken Burns's documentary, Jazz."
        ,"2007" : "Frankie Manning: Ambassador of Lindy Hop is published."
        ,"2009" : "Frankie Manning passes away."
    },
    img: 'http://www.frankiemanning.com/photos/frankie-full.jpg',
    title: 'Frankie Manning',
    subTitle: 'the ambassador of swing',
    timeLine: 'Timeline',
};

// let app = document.querySelector('#app');
// let content = document.createElement('div');
// content.classList.add('content');
// let h1 = document.createElement('h1');
// h1.setAttribute('id', 'Title');
// h1.textContent = frankiInfo.title;
// let h2 = document.createElement('h2');
// h2.setAttribute('id', 'Sub-Title');
// h2.textContent = frankiInfo.subTitle;
// let img = document.createElement('img');
// img.setAttribute('id', 'headerImage');
// img.setAttribute('src', frankiInfo.img);
//
// app.append(content);
// content.append(h1);
// content.append(h2);
// content.append(img);

function create(type, className, atr,atrValue, text, location) {
    let newNode = document.createElement(type);
    newNode.classList.add(className);
    newNode.setAttribute(atr,atrValue);
    newNode.textContent = text;
    location.append(newNode);
    return newNode;
}

let newDiv = document.querySelector('#app');
// function showClick(event) {
//     // console.log('click');
//     console.log(event);
//     // console.log(`X = ${event.clientX} Y = ${event.clientY   }`);
//     // console.log(event.key);
// }
// newDiv.addEventListener('click', showClick);
// window.addEventListener('keypress', showClick);

let container = create('div','content',null,null,null,newDiv);
// // create('h1', null, 'id', 'Title', frankiInfo.title, container);
// create('h2', null, 'id', 'SubHead', frankiInfo.subTitle, container);
// create('img', null, 'id', 'headerImage', null, container);
// // let img = document.querySelector('#headerImage');
// // img.setAttribute('src', frankiInfo.img);
// let section = create('section',null,null,null,null,container);
// let article = create('article',null,null,null,null,section);
// create('p',null,null,null,frankiInfo.content,article);
// create('h2',null,'id','Timeline',frankiInfo.timeLine,article);
// // let ul = create('ul',null,null,null,null,article);
// let docFrag = document.createDocumentFragment();
// for ( key in frankiInfo.frankieTimeline ) {
//     create('li',null,null,null,`${key} ${frankiInfo.frankieTimeline[key]}`,docFrag);
// }
// ul.append(docFrag);

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');



btn1.addEventListener('click', );

