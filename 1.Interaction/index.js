//alert function
alert("Tell me about yourself");


//prompt function
let name = prompt("What is your name");
let age = prompt("What is your age");
let gender = prompt("Are you male or female");
let living = prompt("Where you live");

//confirm function
let isTrue = confirm("Details are filled by you is correct?");

if(isTrue == true)
    alert(`Your name is ${name}, age is ${age}, gender is ${gender}, and lived in ${living}.`);
else
    alert("Try again");