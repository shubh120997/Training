try{
    console.log("Start the try block");
    agdg;
    console.log("Didn't execute because of error");
}catch(err){
    console.log(err);
} finally{
    console.log("It always executing");
}


let json = '{"age" : 30}';

try{
    let user = JSON.parse(json);
    if(!user.name){
        throw new ReferenceError("No name field");
    }
    console.log(user.name);
}catch(err){
    console.log(err);
}