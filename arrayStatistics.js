const arrayStats=(arr)=>{
  let result ={}
  result.sum=arr.reduce((acc, curr)=>acc+curr,0)
  result.average=arr.reduce((acc, curr)=>acc+curr,0)/arr.length
  result.max=Math.max(...arr)
  result.min=Math.min(...arr)
  return result
}

console.log(arrayStats([1,2,3,9,8,7,6,2,9,2,6,4]))