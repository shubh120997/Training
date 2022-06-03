let user = {
    name : "Shubham",
    age : "24",
    //either use this or object reference
    sayhi(){
        console.log(`Hello ${user.name}, your age is ${this.age}`);
    }
};

user.sayhi();


//--------------------------------------------------------------

const user1 = user;
user = null;
user1.sayhi(); //gives error because in sayhi we use user.name