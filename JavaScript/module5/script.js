// let a = {
//   socks : 2,
//   shirt : 10,
//   tshint : 20,
//   add : function (a,b) {
//           return a+b;
//   }
// };
// console.log(a.socks);
// console.log(a['shirt']);
// console.log(a.add(2, 5));

// let dog = {
//   name : 'jack',
//   legs : 5,
//   color : 'black'
// };
// console.log(dog);
// dog.age = 10;
// console.log(dog);
// console.table(dog);
// dog.age = 20;
// console.table(dog);
// Object.freeze(dog);
// console.log(Object.isFrozen(dog));
// dog.age = 30;
// console.table(dog);

let inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
let names = inventors.map(function (item) {
    return item.first;
});
console.log(names);

let years = inventors.filter(function (item) {
    return item.year > 1500 && item.year < 1600;
});
console.log(years);
console.log(years.length);

let years19 = inventors.filter(function (item) {
    return item.year >1800 && item.year < 1900;
});
console.log(years19);

// let alfavit = inventors.sort(function (a,b) {
//     return a.first > b.first ? 1 : -1;
// });
// console.log(alfavit);

let yearsBDsum = inventors.map(function (item) {
    return item.year;
})
    .reduce(function (sum, num) {
        return sum + num;
    });
console.log(yearsBDsum);

let yearsLife = inventors.map(function (item) {
    return item.passed - item.year;
});
console.log(yearsLife);

let yearsLifeSum = yearsLife.reduce(function (sum, num) {
   return sum + num;
});
console.log(yearsLifeSum);

for ( let i = 0; i<inventors.length; i++ ) {
    inventors[i].age = yearsLife[i];
}
console.log(inventors);

inventors.map(function (item) {
    return item.sayhi = function () {
        console.log(`Hello, I am ${item.first}`);
    };
});
console.log(inventors);
inventors[0].sayhi();

