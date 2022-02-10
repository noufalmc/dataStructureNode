let random1;
let array=[];
for (let i=0;i<10;i++)
{
    random1=Math.floor(Math.random() * (999-100+1)+100);
    array[i]=random1;
}
console.log("Array is => "+array);
console.log("After Sort => "+array.sort());
console.log("Second Largest =>"+array[array.length-2]);
console.log("Second Lowest =>"+array[1]);