sum("Himanshu", "Gupta",10,20)
function sum(first, last,...values){
    let total=0;
    for(let n of values){
        total=total+n;
    }
    console.log(total);
    console.log(first);
    console.log(last);
}