let num1 = 1_000_456;
console.log(num1);


let num2 = 1e3; //e3 means *1000
console.log(num2);

let num3 = 1e-3; //e-3 means /1000
console.log(num3);

//Hex, Octal and Binary Numbers
console.log(0xff);
console.log(0o377);
console.log(0b11111111);

//toString(base) method
let num4 = 255;

console.log(num4.toString(16));
console.log(num4.toString(8));
console.log(num4.toString(2));

/*-----------Rounding------------*/

//Math.floor(Round down)
console.log(Math.floor(3.5)); //3

//Math.ceil(Round up)
console.log(Math.ceil(3.4)); //4

//Math.round(round to nearest ineteger)
console.log(Math.round(3.4)); //3
console.log(Math.round(3.5)); //4

//Math.trunc(remove after decimal point)
console.log(Math.trunc(3.4));
console.log(Math.trunc(3.67));

//toFixed(n) return a string
let num5 = 123.4567;
let num6 = num5.toFixed(2);
console.log(num6);
console.log(typeof(num6));
num6 = +num6; //or Number(num6);
console.log(typeof(num6));

/*------parseInt and parseFloat----------*/

//“read” a number from a string until they can’t
console.log(parseInt("100px"));
console.log(parseFloat("12.1.3.2"));

