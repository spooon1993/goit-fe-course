class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    showResult() {
        return `${this.x}, ${this.y}`;
    }
}

let pixel = new Point(10,20);
console.log(pixel.showResult());


class HumanNew {
    constructor (name) {
        this.name = name;
    }
    showName() {
        console.log(this.name);
    }
    static staticMethod() {
        console.log('static method');
    }
}
let people2 = new HumanNew('Jack2');
people2.showName();
HumanNew.staticMethod();

class Man extends HumanNew {
    constructor (age, name) {
        super (name);
        this.age = age;
    }
    showAge() {
        console.log(this.age, this.name);
        super.showName();
    }
}

let man1 = new Man(22, 'Jack');
man1.showAge();
Man.staticMethod();



// class Student {
//     constructor(name) {
//         this.name = name;
//     }
//     static staticMethod() {
//         return 'I am static method';
//     }
//     prototypeMethod() {
//         return 'I am prototype method';
//     }
//     static get Zero() {
//         return new Student('Tim');
//     }
//
//     get test() {
//         return this.str ;
//     }
//
//     set test(value) {
//         return this.str = value;
//     }
// }
// const foo = new Student('Jack');
//
// console.log(Student.staticMethod());
// console.log(foo.prototypeMethod());
// console.log(Student.Zero);
// console.log(foo.test);
// foo.test ='test2';
// console.log(foo.test);
//
//
// class Person {
//     constructor(gender) {
//         this.gender = gender;
//     }
//     showGen() {
//         return `${this.gender}`;
//     }
// }
//
// class Worker extends Person {
//     constructor (gender, age) {
//         super(gender);
//         this.age = age;
//     }
//
//     showAge() {
//         return `${this.age}`;
//     }
//
//     combineInfo() {
//         return `${super.showGen()} combine`;
//     }
//
// }
//
// let worker1 = new Worker('male',25);
// console.log(worker1.showAge());
// console.log(worker1.showGen());
// console.log(worker1.combineInfo());