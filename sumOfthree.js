let array=[];
var readline = require('readline-sync');
let limit=readline.question("Enter the Length");
for(let i=0;i<limit;i++)
{
    console.log("Enter "+(i+1)+" Item");
    array[i]=readline.question();
}
console.log("array is"+array);


for(i=0;i<array.length;i++)
{
   
    for(j=i+1;j<array.length;j++)
    {
        
        let sum=(parseInt(array[i])+parseInt(array[j])+parseInt(array[j+1]));
        if(sum==0)
        {
            console.log(array[i]+"+"+array[j]+"+"+array[j+1]+"  =>"+sum);
        }
    
    }
}