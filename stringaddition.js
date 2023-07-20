const stringaddition=(nameone, nametwo)=>{
    return [...nameone.split(''), ...nametwo.split('')].join('')
}
console.log(stringaddition("karera","olivier"))