const arr=[5,3,6,8,1];

// function isOdd(x){
//     return x%2;
// }

// const op=arr.filter(isOdd);
//          or
// const op=arr.filter(function isOdd(x){
//     return x%2;
// });
//          or
const op=arr.filter((x)=>{
    return x%2;
});



console.log(op);