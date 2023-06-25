console.log("start");

setTimeout(function cb(){
    console.log("Callback");
    
}, 5000);

console.log("End");

let startDate=new Date().getTime();
let endDate=startDate;
while(endDate<startDate+10000)
{
    endDate=new Date().getTime();
}
console.log("While End")