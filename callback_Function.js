//Callback function

setTimeout(function() {
    console.log("setTime Out Function");

},5000)
function x(y)
{
    console.log("x called");
    y();
}

x(function y() // y function is callback function
{
    console.log("y called")
})

function attachEventListeners()
{
    let count=0;
    document.getElementById("clickMe").addEventListener("click",function xyz(){
        console.log("Button Clicked", ++count);
    });
}
attachEventListeners();

//Garbage collection and removeEventListeners
