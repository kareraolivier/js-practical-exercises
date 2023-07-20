const RemoveDuplicate = (array) => {
    let arr=[]
     for (let i=0; i<array.length; i++){
        if(!arr.includes(array[i]))(
            arr.push(array[i])
        )
     }
     return arr
};
console.log(RemoveDuplicate([1, 4, 7, 2, 3, 1, 3, 5]));
