// const promObj = new Promise(executor);

//Here executer is a function which takes two arguments resolve and reject.

// const promObj = new Promise( (resolve, reject) => {

// });

const delay = (ms) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve();
        }, ms);
    } );
};

delay(3000).then( () => console.log("runs after 3 seconds"));


