/*
* Describe to collapse jest
* "it" === "test"
* BeforeAll , AfterAll
* Watchers =>
* -- toContain
* -- toHaveLength

 */

const CalculateTotal = require('./fun')

 function testCalculateTotal(nums,res) {
     // testInputs(nums)
      testResults(nums,res)
}

////////////////////
// Test Inputs
///////////////////
function testInputs(nums){
    // beforeAll(()=>{
        describe(`check inputs`,()=>{

            test(`not have null`,()=>{
                expect(nums).not.toContain(null)
            })
            test(`not have string`,()=>{
                nums.some(n=>expect(n).not.toBe(true))
            })
            test(`type of ${nums} is array`,()=>{
                expect(nums).toEqual(expect.any(Array))
            })
        })
    // }, 100);
}

////////////////////
// Test Results
///////////////////
function testResults(nums,res){
    test(`return ${res} if nums is ${nums}`,()=>{
        expect(CalculateTotal(nums)).toBe(res)
    })
}


//////////////////////
// Tests Cases
/////////////////////
describe(`CalculateTotal results`,()=>{
    describe('invalid inputs scenarios',()=>{
        testCalculateTotal(null,0)
        testCalculateTotal([30,null],30)
        testCalculateTotal([null,null],0)
        testCalculateTotal([1,'2'],3)
    })
    describe(' happy scenario',()=>{
        testCalculateTotal([10,2],12)

    })

})

