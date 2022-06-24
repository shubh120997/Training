const xPronounce = (string) => {
    //cks
    let newString = '';
    let arr = string.split(' ');
    console.log(arr);
    for(let i=0; i<arr.length; i++){

        // console.log(arr[i]);
        if(arr[i] == 'x'){
            arr[i] = 'ecks';
        }
        else if(arr[i].charAt(0) == 'x'){
            arr[i] = 'z' + arr[i].substr(1);
        }
        else{
            arr[i].replace(/[x]/g, "cks");
        }
        
    }

    for(let str of arr){
        newString += str + ' '; 
    }
    console.log(newString);
};

xPronounce('xG x box unboxing video x D');