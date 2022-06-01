//-----------------if-else statement-----------------
let a = 5;
if(a > 5)
    console.log("Greater");
else if(a < 5)
    console.log("Small");
else
    console.log("Equal");


//-----------------switch statement-----------------
let b = 3;
switch(b){
    //if b = 1, then
    case 1:
        console.log("One");
        break;
    //if b = 2, then
    case 2:
        console.log("Two");
        break;
    //if b = 3, then
    case 3:
        console.log("Three");
        break;
    //when no case is matching
    default:
        console.log("Other numbers");
        break;
}