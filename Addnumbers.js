// const Addnumbers = (num) => {
//   let sum = Function("return"+num).call();
//   console.log(sum)
//   return sum;
// };
// console.log(Addnumbers("12+56"));




let num = "( 2 + 3 ) * ( 4 - 1 )";
let result = Function("return " + num)();
console.log(result)