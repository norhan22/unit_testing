const {binarySearch,binarySearchArrayOfObjects}=require('./fun')

// expect.extend({
//     toMatchTheIndex(received,target){
//         const getIndex = received
//         return {
//             message:()=>``,
//             pass:
//         }
//     }
// })
const testTitle = (target,arr,res) =>  `return the target ${target} in ${JSON.stringify(arr)} is ${JSON.stringify(res)}`
function testBS(arr,target,res){
    test(testTitle(target,arr,res),()=>{
        expect(binarySearch(arr,target)).toEqual(res)
    })
}
function testBSO(arr,target,key,res){
    test(testTitle(target,arr,res),()=>{
        expect(binarySearchArrayOfObjects({targetValue:target, key, arr}))
            .toEqual(res)
    })
}

describe('test Binary Search Algorithm',()=>{
    describe('Happy scenario of simple arr',()=>{
        testBS([1,2,3,4,5,6,7],4,3)
        testBS(['apple','Orange','red','yellow'],'Orange',1)
        testBS(['apple','Orange','red','yellow'],'orange',-1)
        testBS(['apple','Orange','red','yellow'],'Green',-1)
    })
    describe('Happy scenario of array of objects',()=>{
        testBSO([{name:'apple',id:3},{name:'Orange',id:5},{name:'red',id:'10'}],'Orange','name',{name:'Orange',id:5})
        testBSO([{name:'Orange',id:5},{name:'apple',id:3},{name:'red',id:'10'}],3,'id',{name:'apple',id:3})
    })
})