let Data =[10,20,30,40]
function sum(...args){
    let total=0;
    for(let n of args){
        total=total+n;
    }
   console.log(total);
}
sum(10,20,30);
sum(...Data);
console.log(...Data);
console.log(Data);