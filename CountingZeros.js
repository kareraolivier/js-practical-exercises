const countZeros=(num)=>{
let arr=[]  
if(num<10 && num!=0)
   return "num is less than 10";

for (let i=1; i<=num; i++ ){
    arr.push(i)
}
return arr.toString().split('').filter(arr=>arr==0).length
}
console.log(countZeros(100))
