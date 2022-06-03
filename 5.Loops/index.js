//-----------------for loop-----------------
for(let i=0; i<10; i++)
    console.log(i);
//-----------------while loop-----------------
let j=0;
while(j<10){
    console.log(j);
    j++;
}
//-----------------do-while loop-----------------
let k=0;
do{
    console.log(k);
    k++;
}while(k<10);
//-----------------break-----------------
for(let i=0; i<10; i++){
    if(i == 5)
        break;
    console.log(i);
}
//-----------------continue-----------------
for(let i=0; i<10; i++){
    if(i == 5)
        continue;
    console.log(i);
}