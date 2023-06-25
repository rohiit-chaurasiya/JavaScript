
//Annonymous Function
var b=function()
{
    console.log("Called b");
}
b();


//Difference between Parametes and Arguments
var c=function(para1,para2)// para1 and para2 are called Parameters
{
    console.log("c called");
} 
c(1,2)// 1 and 2 called as Arguments



//first Class Function
// var d=function(para1)
// {
//     console.log(para1);
// }

// d(function()
// {

// })

// var d=function(para1)
// {
//     console.log(para1);
// }
// function xyz()
// {
    
// }
// d(xyz)

var d=function(para1)
{
    return function xyz()
    {

    }
}
console.log(d());


//Arrow function
