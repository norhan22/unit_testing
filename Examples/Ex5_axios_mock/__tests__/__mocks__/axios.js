const dummy = require('./dummyData'),
 get = (url)=> Promise.resolve({data:dummy.users})
module.exports=get