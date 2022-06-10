const
    http = require('./modal'),
    utility=require('./controller'),
    baseUrl ='https://jsonplaceholder.typicode.com',
    getUsersBtn = document.querySelector('#getUsersBtn'),
    getPostsBtn = document.querySelector('#getPostsBtn'),
    resultArea = document.getElementById('result'),
    resetResultArea=()=>resultArea.innerHTML=''


const getData=(config,showProps)=>{

    http(config).then((res)=>{
        resetResultArea()
        resultArea.append(utility(res,showProps))
    })
}
const getUsers=()=>{
    const config={method:'get',url:baseUrl+'/users'}
    getData(config,['name','phone','email'])
}

const getPosts=()=>{
    const config={method:'get',url:baseUrl+'/posts'}
    getData(config,['title'])
}


getUsersBtn.addEventListener('click',getUsers)
getPostsBtn.addEventListener('click',getPosts)

module.exports=getData