// const arr1 = [1, 2, 3, 4, 5];
// const arr1 = [17, 19, 21];
const arr1 = [5, 5, 5];
let sum = 0;
for(let i=0; i<arr1.length; i++){
    if(arr1[i] % 2 == 0)
        sum += 1;
    else if((arr1[i] % 2 != 0) && (arr1[i] != 5))
        sum += 3;
    else if(arr1[i] == 5)
        sum += 5;
    else if(arr1[i] == 0)
        sum += 1;
}

console.log(sum);