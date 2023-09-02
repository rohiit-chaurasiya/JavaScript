const arr=[5,2,3,4,6];

function double(x){
    return x*2;
}

// function binary(x){
//     return x.toString(2);
// }

const op=arr.map(double);

// const op2=arr.map(binary);
//          or
// const op2=arr.map(function binary(x){
//     return x.toString(2);
// });
//          or
const op2=arr.map((x)=>{
    return x.toString(2);
});



console.log(op);
console.log(op2);

