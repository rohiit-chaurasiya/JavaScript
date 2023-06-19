// Lexical Environment =Local memory+lexical environment of parent

function a()
{
    c();
    
    function c()
    {
        console.log(b);
    }
}
var b=10;
a();
