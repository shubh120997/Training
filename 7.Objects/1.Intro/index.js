//Object creation and accessing
const obj = {
    name : "Shubham",
    age : "24"
};

console.log(obj.name, obj.age);//Shubham 24



//Adding property in existing object
obj.isAdmin = true;
console.log(obj.isAdmin); //true


//Deleting property in existing object
delete obj.isAdmin;
console.log(obj.isAdmin); //undefined



//Multiword property in object
const user = {
    "user likes" : "cricket"
};

console.log(user["user likes"]); // cricket



//in operator in object - defines property exists in object or not
console.log("age" in obj); //true



//for....in loop, at place of key we put any identifier
for(key in obj){
    console.log(key, obj[key]);
    /*name Shubham
    age 24*/
}



