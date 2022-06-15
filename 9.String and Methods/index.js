let str1 = 'Hello Single Quotes';
let str2 = "Hello Double Quotes";
let str3 = `Hello Backticks`;

console.log(str1, str2, str3);

console.log(str1[7]); //i
console.log(str1.charAt(7)); //i

console.log(str2.length); //19


//indexOf(substr, pos)
let str4 = 'as soon as possible';

console.log(str4.indexOf('as')); //0
console.log(str4.indexOf('as',2)); //8

//slice(start, end) method return string from start but excluding end
console.log(str4.slice(2,8)); // ' soon'
console.log(str4.slice(3)); //'soon as possible'

//substring(start, end) method return string between start and end
console.log(str4.substring(2,8)); // ' soon'
console.log(str4.substring(8,2)); // ' soon'

//substr(start, length) method return string from start get length characters
console.log(str4.substr(3, 4)); //soon
console.log(str4.substr(-3, 4)); //ble