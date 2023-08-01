const stringCompression=(iterable)=>{
  let arr=[]
let count=0
 for (let i=0; i<iterable.length;i++){
   if (iterable[i]!=iterable[i+1]){
     count++
     arr.push(iterable[i])
     arr.push(count)
   }
 }
  return arr.join('')
}
console.log(uniqueInOrder('AAAABbbbBBCCDAABBB'))
