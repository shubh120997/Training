/*-------------Function-------------*/
// function sayHello(){
//     console.log("Hello Myfriend");
// };

// sayHello();

/*-------------Function With Paramter-------------*/
function sayHello(name){
    console.log("Hello " + name + "!!!!");
};

sayHello("Appventurez");

/*-------------Function Expression-------------*/
let sayHi = function(){
    console.log("Hi Expression");
};

sayHi();

/*-------------Callback Functions-------------*/
function step1(callStepTwo){
    console.log("Step 1 is completed call step 2");
    callStepTwo();
}

function step2(){
    console.log("Inside step-2 and going to complete it");
}

step1(step2);

/*-------------Arrow Function-------------*/

//Single Line function
let sum = (a,b) => a+b;

console.log(sum(4, 5));

//Single parameter function
let product = n => n * 3;
console.log(product(5));

//Multi parameter and line function
let cal = (a, b) => {
    let result = a + (a * b);
    return result;
};
console.log(cal(5, 6));
