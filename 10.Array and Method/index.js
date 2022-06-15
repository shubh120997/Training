const fruits = ['apple', 'banana', 'orange', 'mango'];

console.log(fruits.at(3)); //mango
console.log(fruits[3]); //mango

//push
fruits.push('pineapple');
console.log(fruits); //['apple', 'banana', 'orange', 'mango', 'pineapple'] 

//pop
fruits.pop();
console.log(fruits); //[ 'apple', 'banana', 'orange', 'mango' ]

//shift
fruits.shift();
console.log(fruits); //[ 'banana', 'orange', 'mango' ]

//unshift
fruits.unshift('apple');
console.log(fruits); //[ 'apple', 'banana', 'orange', 'mango' ]

//for of
for(let fruit of fruits)
    console.log(fruit);
/*apple
banana
orange
mango*/

//length property
console.log(fruits.length); //4

//toString method
console.log(fruits.toString()); //apple,banana,orange,mango

/*--------splice method----------*/

//it delete 1 element from 2nd position
fruits.splice(2, 1);
console.log(fruits); //[ 'apple', 'banana', 'mango' ]

//it delete 2 elements from 2nd position and add pinepple and guava
fruits.splice(2,2,'pineapple', 'guava');
console.log(fruits); //[ 'apple', 'banana', 'pineapple', 'guava' ]

//it add kiwi and grapes at position 2 without deleting
fruits.splice(2, 0, 'kiwi','grapes');
console.log(fruits); //[ 'apple', 'banana', 'kiwi', 'grapes', 'pineapple', 'guava' ]

/*---------------------------------*/

//slice method
console.log(fruits.slice(2, 5)); //[ 'kiwi', 'grapes', 'pineapple' ]

//concat method
let num = [1, 2];

//it creates new array not change the existing array
console.log(num.concat([3,4],5,6)); //[ 1, 2, 3, 4, 5, 6 ]

let object = {
    name: 'Shubham',
    age: 24
};

console.log(num.concat(object)); //[ 1, 2, { name: 'Shubham', age: 24 } ]

//foreach method
const nums = [1,2,3,4,5,6];

nums.forEach(num => {
    console.log(num);
});/*1
2
3
4
5
6*/

nums.forEach((num, index, nums) => {
    console.log(`${num} at index ${index} in ${nums}`);
});
/* 1 at index 0 in 1,2,3,4,5,6
2 at index 1 in 1,2,3,4,5,6
3 at index 2 in 1,2,3,4,5,6
4 at index 3 in 1,2,3,4,5,6
5 at index 4 in 1,2,3,4,5,6
6 at index 5 in 1,2,3,4,5,6 */

/*------for single values--------*/
//find method
let v = nums.find(num => num == 4);
console.log(v); //4

//findIndex method
console.log(nums.findIndex(num => num > 3)); //3

/*--------------------------------*/

//filter method
let arr = nums.filter(num => num > 3);
console.log(arr); //[ 4, 5, 6 ]

