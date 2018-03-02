// let fruit = {
//     isGood: true
// };
// let apple = {
//     isGreen: true
// };
//
// apple.__proto__=fruit;
//
// console.log(apple.isGreen);
// console.log(apple.isGood);
//
// function Human(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// this.fullName = function() {
//     return this.firstName + " " + this.lastName;
// }
// }

// function Human(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
//
//
// Human.prototype.fullName = function () {
//     return `${this.firstName} ${this.lastName}`;};
//
// var person1 = new Human("Jack", "Shepard");
// var person2 = new Human("Emgir", "Var Emreis");

// console.log(person1);
// console.log(person2);
// console.log(person1.fullName());
// console.log(person2.fullName());


// person2.fullName = function () {
//     return `${this.lastName} ${this.firstName}`
// };
// console.log(person2.fullName());
// console.log(person1.fullName());


// function Human2(name) {
//     this.name = name;
//     this.friends = [];
// }
//
//
// Human2.prototype.friends = ['Ann','Jack'];
//
// Human2.prototype.showName = function () {
//     alert(this.name);
// };
//
// let person1 = new Human2('Jon');
// let peron2 = new Human2('Mick');
//
// person1.friends.push('Pizduk');
//
// console.log(person1.friends);
//
// console.log(peron2.friends);


// function Animal(name) {
//     this.name = name;
//     this.speed = 0;
// }
//
// Animal.prototype.run = function(speed) {
//     this.speed += speed;
//     alert( this.name + ' бежит, скорость ' + this.speed );
// };
//
// Animal.prototype.stop = function() {
//     this.speed = 0;
//     alert( this.name + ' стоит' );
// };
//
// function Rabbit(name, age) {
//     this.name = name;
//     this.speed = 0;
//     this.age = age;
// }
// Rabbit.prototype = Object.create(Animal.prototype);
// Rabbit.prototype.constructor = Rabbit;
//
// Rabbit.prototype.jump = function() {
//     this.speed++;
//     alert( this.name + ' прыгает' );
// };
//
// Rabbit.prototype.showAge = function () {
//     if (this.age > 10) {
//         alert('Жостке мясо')
//     } else {
//         alert('Можна їсти');
//         this.jump();
//     }
// };
//
// // Rabbit.prototype.run2 = function() {
// //     вызвать метод родителя, передав ему текущие аргументы
// // Animal.prototype.run.apply(this, arguments);
// // this.jump();
// // };
//
// var rabbit1 = new Rabbit('Кроль',10);
// var rabbit2 = new Rabbit('Осел',12);
// var rabbit3 = new Rabbit('Самец',8);
//
// // rabbit.run(5);
// // rabbit.jump();
// // rabbit.run2(10);
// rabbit1.showAge();
// rabbit2.showAge();
// rabbit3.showAge();



