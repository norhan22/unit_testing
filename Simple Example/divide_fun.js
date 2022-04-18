const divide = (x,y) => {
    if(x === 0 && y === 0 ) return 'not allowed'
    if(x !== 0 && y === 0   ) return 'not allowed'
    if(x === 0 && y !== 0 ) return 'invalid'
    return x/y
}
module.exports=divide;