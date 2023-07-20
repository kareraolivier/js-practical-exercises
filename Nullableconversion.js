const Nullableconversion = (obj) => {
  for (let key in obj) {
    if (obj[key]===null) {
       obj[key]=0;
    } else if(obj[key]===undefined){
      obj[key]='';
    }else{
        continue
    }
  }
  return obj;
};
console.log(Nullableconversion({ name: "danny", age: null, school: undefined }));
