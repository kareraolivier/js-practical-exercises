const stringCompression=(str)=>{
    let result = [];
    let arrLeng = str.split("");
    for (let i = 0; i < arrLeng.length; i++) {
      if (!result.includes(arrLeng[i])) {
        let leng = arrLeng.filter((arr) => arr == arrLeng[i]).length;
        result.push(arrLeng[i]);
        result.push(leng);
      }
    }
    return result.join('');
}
console.log(stringCompression("AAAABBBCCDAA"))