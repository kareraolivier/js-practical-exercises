const oddSquares=(arr)=>{
    return arr.filter(arrs=>arrs%2!=0).map(arr=>{return arr**2})
}
console.log(oddSquares([1, 2, 3, 4, 5, 6])) 