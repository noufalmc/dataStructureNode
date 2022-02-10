let random1;
let array=[];
for (let i=0;i<10;i++)
{
    random1=Math.floor(Math.random() * (999-100+1)+100);
    array[i]=random1;
}
console.log("Array is"+array);
let max=min=array[0];
let secondMax=secondMin=array[1];
for(let i=1;i<array.length;i++)
{
    if(max<array[i])
    {
        secondMax=max;
        max=array[i];
    }
    else if(secondMax<array[i])
    {
        secondMax=array[i];
    }
    if(min>array[i])
    {
        secondMin=min;
        min=array[i];
    }
    else if(secondMax<array[i])
    {
        secondMin=array[i];
    }
}
console.log("Second max="+secondMax);
console.log("Second min= "+secondMin);