/*----------------Comparison by reference----------------*/

const a = {}; //Here a stores the address of object not the object itself
const b = a;

console.log(a == b); //true
console.log(a === b); //true

const c = {};
const d = {};

console.log(c == d); //false
console.log(c === d); //false


/*----------------Cloning or Merging and Object.assign----------------*/
const user1 = {
    name : "Shubham",
    age : "30"
};



const user2 = {};
for(let key in user1){
    user2[key] = user1[key];
}

user2.name = "Suraj";
console.log(user1.name, user2.name);

const user3 = {
    gender : "Male",
    place : "Lucknow"
};

const group = {};
Object.assign(group, user1, user3);

for(let key in group){
    console.log(group[key]);
}


