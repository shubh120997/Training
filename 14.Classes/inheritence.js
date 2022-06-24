class Person {
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }

    describe(){
        console.log(`I am ${this.name}, ${this.age} years old and a person`);
    }
}

class Programmer extends Person{
    constructor(_name, _age, _yearsOfExperience){
        super(_name,_age);
        this.yearsOfExperience = _yearsOfExperience;
    }

    describe(){
        console.log(`I am ${this.name}, ${this.age} years old and a programmer`);
    }
    code(){
        console.log(`${this.name} is coding`);
    }
}

let person1 = new Person("Appventurez", 4);
person1.describe();

const programmers = [
    new Programmer('Shubham', 24, 1),
    new Programmer('Pranjal', 24, 2)
];

function developSoftware(programmers){
    for(let programmer of programmers){
        programmer.code();
        programmer.describe();
    }
}

developSoftware(programmers);
