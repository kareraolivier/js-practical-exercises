const sortproducts = (product) => {
  return product.sort((a,b)=>a.price-b.price)
};
console.log(sortproducts([{name:"dany", price:12},{name:"fab", price:2},{name:"karera", price:45}]));
