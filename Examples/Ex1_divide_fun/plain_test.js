
//TODO implement the divide function
const divide = require('./fun')


// TODO unit Testing function first
function canDivide(x,y,res){
console.log(`it can divide ${x} by ${y} to be equal ${res}`)
    if(divide(x,y) === res) console.log('success')
    else console.error('failed')
}


// Test Cases
canDivide(2,1,2)
canDivide(0,1,'invalid')
canDivide(1,0,'not allowed')
canDivide(0,0,'not allowed')