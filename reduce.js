const arr=[5,2,8,6,1];

// function findSum(arr)
// {
//     let sum=0;
//     for(let i=0;i<arr.length;i++)
//     {
//         sum+=arr[i];
//     }
//     return sum;
// }
// console.log(findSum(arr));

const op=arr.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;
},0);

const op2=arr.reduce(function(max,curr){
    if(curr>max)
    {
        max=curr;
    }
    return max;
},0)
console.log(op);
console.log(op2);
