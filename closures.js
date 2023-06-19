function x()
{
    var a=40;
    function y(){
        console.log(a);
    }
    return y;
}
var z=x();
console.log(z);
z();
// closure-function along with it lexical scope bundle together form the closure

function x()
{
    var b=32;
    return function y(){
        console.log(b);
    }
    
}
var z=x();
console.log(z);
z();