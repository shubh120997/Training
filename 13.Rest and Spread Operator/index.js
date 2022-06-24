/*----------------Rest Operator ----------------*/

//in the function definition by using three dots ...
//The dots literally mean “gather the remaining parameters into an array”.

function sumAll(...args) { // args is the name for the array
    let sum = 0;
  
    for (let arg of args) 
        sum += arg;
    return sum;
}

console.log(sumAll(1,2));
console.log(sumAll(1,2,3,4));
console.log(sumAll(1,2,3,4,5,6));

function showName(firstName, lastName, ...titles) {
    console.log( firstName + ' ' + lastName ); // Julius Caesar
  
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    console.log( titles[0] ); // Consul
    console.log( titles[1] ); // Imperator
    console.log( titles.length ); // 2
}
 
showName("Julius", "Caesar", "Consul", "Imperator");


/*-------------Spread Operator-----------*/