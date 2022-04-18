const CalculateTotal = require('./fun')

function testCalculateTotal(nums,res){
    // console.log(`it can sum ${nums||'null'} to equal ${res}`)
    // if(CalculateTotal(nums)=== res) console.log('success')
    // else console.error('fail')
    it(`it can sum ${nums||'null'} to equal ${res}`,()=>{
        expect(CalculateTotal(nums)).toBe(res)
    })
}

testCalculateTotal([10,2],12)
testCalculateTotal(null,0)
testCalculateTotal([30,null],30)
testCalculateTotal([null,null],0)
