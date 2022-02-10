let array=[];
let random1;
let counter=0;
for (let i=0;i<10;i++)
{
    random1=Math.floor(Math.random() *100);
    if(parseInt(random1/10) == parseInt(random1%10))
    {
        array[counter]=random1;
        counter++;
    }
}
if(array.length>0)
{
console.log("The array is"+array);
}
else
{
    console.log("Array Is empty");
}