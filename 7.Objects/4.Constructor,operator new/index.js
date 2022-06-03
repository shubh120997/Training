//--------------constructor Function-----------------
function User(name, age){
    this.name = name;
    this.age = age;
    this.isAdmin = false
}

let user1 = new User("Shubham", 24);
let user2 = new User("Patel", 25);

// console.log(user1.name);

//return with object
function Users(){
    this.name = "Patel";
    return {name : "Shubham"};
}

let user = new Users();
// console.log(user.name);

//return with primitive
function SmallUser() {
    this.name = "John";
    return "Shubham";
}

let small1 = new SmallUser; //omit () if there is no parameter
// console.log(small1.name);


//methods in constructor
function greet(name){
    this.name = name;
    this.sayhi = () => {
        console.log(`Hello ${this.name}`);
    };
}

let a = new greet("Shubham");
a.sayhi();