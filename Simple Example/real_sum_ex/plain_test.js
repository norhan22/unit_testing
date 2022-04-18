const sum = require('./fun')

function testCalculateTotal(nums,res){
    console.log(`it can sum ${nums||'null'} to equal ${res}`)
    if(sum(nums)=== res) console.log('success')
    else console.error('fail')
}

testCalculateTotal([10,2],12)
testCalculateTotal(null,0)
testCalculateTotal([30,null],30)
testCalculateTotal([null,null],0)
