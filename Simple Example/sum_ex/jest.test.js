
const sum = require('./fun');

function canSum(x,y,res){
    // console.log(`it can sum ${x} and ${y} to equal ${res}`)
    // if(sum(x,y)=== res) console.log('success')
    // else console.error('fail')
    test(`it can sum ${x} and ${y} to equal ${res}`,()=>{
        expect(sum(x,y)).toBe(res)
    })
}

canSum(10,10,20)
canSum(null,10,'one of the number is missed')
canSum(10,null,'one of the number is missed')
canSum(null,null,'one of the number is missed')