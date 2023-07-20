const GreatestCommonDivisor = (a,b) => {
    while(a!=b){
       if (a>b)
         a=a-b;
       else b=b-a; 
    }
    return a||b
};
console.log(GreatestCommonDivisor(6, 20));
