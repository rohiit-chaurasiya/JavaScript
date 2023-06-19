// function x()
// {
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     },3000);
//     console.log("Hellow")
// }
// x();

// function x()
// {
//     for(let i=1;i<=5;i++){ //let is block scope and it create a new copy every time this loop is executed
//     setTimeout(function(){
//         console.log(i);
//     },3000);
// }
//     console.log("Hellow")
// }
// x();



function x()
{
    for(var i=1;i<=5;i++){ 

        function close(i)
        {
    setTimeout(function(){
        console.log(i);
    },3000);
}
close(i)
    }
    console.log("Hellow")
}
x();