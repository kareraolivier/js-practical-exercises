const Reverseinplace =(str)=>{
 return str.split(' ').map(string=>(string.split('').reverse().join(''))).join(' ')
}
console.log(Reverseinplace("I am the good boy"))