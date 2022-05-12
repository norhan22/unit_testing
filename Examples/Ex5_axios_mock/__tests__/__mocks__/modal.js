const dummy = require('./dummyData')
    getUsers=()=>{
        return Promise.resolve(dummy.users)
    },
    getPosts=()=>{
    return Promise.resolve(dummy.posts)
    }
module.exports={getUsers,getPosts}