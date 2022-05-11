const
    axios = require('axios'),
    http = ({method = 'get', url, params = null})=>{

    console.group('start axios request')
    return  axios[method](url,{params})
        .then((res)=> {
            console.log('success',res.data)
          return res.data
        })
        .catch((err)=>console.error(err.message || err.data))
        .finally(()=> {
            console.log('finish request')
            console.groupEnd()
        })

}
module.exports=http