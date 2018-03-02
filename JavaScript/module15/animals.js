class Animal {
    constructor (speed, age, gender, weight) {
        this.speed = speed;
        this.age = age;
        this.gender = gender;
        this.weight = weight;
    }
    eatFood () {
        return this.weight++;
    }
    toilet () {
        return this.weight--;
    }
    makeNoise () {
        console.log('noise');
    }
    run () {
        return this.speed++;
    }
    stop () {
        return this.speed = 0;
    }
}

class Leon extends Animal {
    constructor (speed, age, gender, weight, eatMeat) {
        super (speed, age, gender, weight);
        this.eatMeat = eatMeat;
    }
    run () {
        super.run();
        console.log('jump');
    }
}

let simba = new Leon(0, 5, 'boy', 20, true);
console.log(simba);

// 'скинуть код Саше'


