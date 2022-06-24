let user = ['Shubham', 'Patel'];

let[fName, lName] = user;

console.log(fName);

// Unwanted elements of the array can also be thrown away via an extra comma
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(title);

//rest(...)
let [value1, value2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(value1);
console.log(value2);
console.log(rest);

//object destructing
let options = {
    title: "Menu",
    width: 100,
    height: 200
};

//order doesn't matter
let {title: t, width : w, height: h} = options;
console.log(w);