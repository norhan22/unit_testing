const generateViewList=require('../controller'),
    dummyItems=[{name:'Ali',phone:'0000'},{name:'Ahmed',phone:'1111'},{name:'mohammed',phone:'22222'}]


describe('generateViewList ',()=>{
    test('should return html list element',()=>{
        const expected = `<ol><li>Ali - 0000</li><li>Ahmed - 1111</li><li>mohammed - 22222</li></ol>`
        expect(generateViewList(dummyItems,['name','phone'])).toBe(expected)
    })
})