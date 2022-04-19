const CalculateTotal = require('./fun')

function testCalculateTotal(nums,res){

    test(`it can sum ${nums||'null'} to equal ${res}`,()=>{
        expect(CalculateTotal(nums)).toBe(res)
    })
}
describe(`CalculateTotal results`,()=>{
    describe('happy scenario',()=>{
        testCalculateTotal(null,0)
        testCalculateTotal([30,null],30)
        testCalculateTotal([null,null],0)
    })
    describe('nullable scenarios',()=>{
        testCalculateTotal([10,2],12)

    })

})

