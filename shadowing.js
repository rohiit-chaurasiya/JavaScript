var a=100;
let b=200;
const c=300;
{
    var a=10; //if you have same name variable outside the block so this variable shadow variable
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);

//illegal shadowing
// let d=19;
// {
//     var d=80;
// }

