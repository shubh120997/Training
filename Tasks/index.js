const xPronounce = (string) => {
    //cks
    let newString = '';
    let arr = string.split(' ');

    for(let i=0; i<arr.length; i++){
        // console.log(arr[i]);
        if(arr[i] == 'x'){
            arr[i] = 'ecks';
        }
        else if(arr[i].charAt(0) == 'x'){
            arr[i] = 'z' + arr[i].substr(1);
        }
        else{
            let string = arr[i];
            for(let j = 0; j<string.length; j++){
                if(string[j] == 'x'){
                    // console.log(string.slice(0,j), string.slice(j+1));
                    string = string.slice(0,j) + "cks" + string.slice(j+1);
                }
            }
            arr[i] = string;
        }
        
    }

    for(let str of arr){
        newString += str + ' '; 
    }
    console.log(newString);
};

xPronounce('xG x box unboxing video x D');