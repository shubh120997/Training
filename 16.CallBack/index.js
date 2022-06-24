/*--------------Code----------------*/

// const funA = () => {
//     console.log("Hello I'm a function A");
// }

// const funB = () => {
//     console.log("Hello I'm a function B");
// }

// funA();
// funB();

/*--------------Output----------------*/

/*
Hello I'm a function A
Hello I'm a function B
*/

/*--------------Code----------------*/

// const funA = () => {
//     setTimeout(()=> console.log("Hello I'm a function A"),3000);
// }

// const funB = () => {
//     console.log("Hello I'm a function B");
// }

// funA();
// funB();

/*--------------Output----------------*/

// Hello I'm a function B
// Hello I'm a function A


/*--------------CallBack----------------*/

const funA = (callback) => {
    setTimeout(()=> {
        console.log("Hello I'm a function A");
        callback();
    }, 3000);

}

const funB = () => {
    console.log("Hello I'm a function B");
}

funA(funB);

//Callbacks are a way to make sure certain code doesn't execute untill 
//other code has already finished execution.

