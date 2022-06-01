//alert automatically converts any value to a string.
//Mathematical operations convert values to numbers.


//----------------------String Conversion----------------------
let value1 = true;
console.log(typeof(value1)); 

let value2 = String(value1);
console.log(typeof(value2));

//----------------------Number Conversion----------------------
let str1 = "123";
console.log(typeof(str1));

let str2 = Number(str1);
console.log(typeof(str2));

//If the string is not a valid number, the result of such a conversion is NaN
let name = Number("Appventurez");
console.log(name);

//For null it is 0
let a = Number(null);
console.log(a);

//for boolean it is 1 or 0
let b = Number(true);
console.log(b);

//----------------------Boolean Conversion----------------------

// for 0, null, NaN, undefined it is false otherwise it is true
let c = Boolean(2);
console.log(c);
let d = Boolean(0);
console.log(d);

//but for string it is always true except ""
let e = Boolean("0");
console.log(e);
let f = Boolean("");
console.log(f);