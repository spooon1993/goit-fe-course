// let sum = prompt('enter sum');
// let currencyIn = prompt('enter currencyIn usd/eur/uah');
// let currencyOut = prompt('enter currencyOut usd/eur/uah');
// let currencyName = ['usd', 'eur', 'uah'];
// let currencyRusName = ['доллар', 'евро', 'гривна'];
// let coef = [28.7, 35, 1.25];
//
// function exchange(num, currIn, currOut) {
//     if ( ( currIn === currencyName[2] || currIn === currencyRusName[2] ) && ( currOut === currencyName[0] || currOut === currencyRusName[0] ) ) { // uah -> usd
//         console.log('uah -> usd');
//         return `${num / coef[0]} usd`;
//     } else if (  (currIn === currencyName[2] || currIn === currencyRusName[2] ) && ( currOut === currencyName[1] || currOut === currencyRusName[1] ) ) { // uah -> eur
//         console.log('uah -> eur');
//         return `${num / coef[1]} eur`;
//     } else if ( ( currIn === currencyName[0] || currIn === currencyRusName[0] ) && ( currOut === currencyName[1] || currOut === currencyRusName[1] ) ) { // usd -> eur
//         console.log('usd -> eur');
//         return `${num / coef[2]} eur`;
//     } else if ( ( currIn === currencyName[0] || currIn === currencyRusName[0] ) && ( currOut === currencyName[2] || currOut === currencyRusName[2] ) ) { // usd -> uah
//         console.log('usd -> uah');
//         return `${num * coef[0]} uah`;
//     } else if ( ( currIn === currencyName[1] || currIn === currencyRusName[1] ) && ( currOut === currencyName[0] || currOut === currencyRusName[0] ) ) { // eur -> usd
//         console.log('eur > usd');
//         return `${num * coef[2]} usd`;
//     } else if ( ( currIn === currencyName[1] || currIn === currencyRusName[1] ) && ( currOut === currencyName[2] || currOut === currencyRusName[2] ) ) { // eur -> uah
//         console.log('eur -> uah');
//         return `${num / coef[1]} uah`;
//     } else {
//         console.log('не правильный ввод');
//     }
// }
// console.log(exchange(sum, currencyIn, currencyOut));

function convert() {
    let coef = [1.25, 28.7, 35];
    let curName = ['usd', 'eur', 'uah'];
    let curRusName = ['долар', 'евро', 'гривна'];
    let amount = +prompt('Enter sum');
    let currencyHave = prompt('Enter currency you have').toLowerCase();
    let currencyWant = prompt('Enter currency what you want').toLowerCase();

    if ( ( currencyHave === curName[0] || currencyHave === curRusName[0] ) && ( currencyWant === curName[2] || currencyWant === curRusName[2] ) ) {
        return amount * coef[1];
    }

}

console.log(convert());

