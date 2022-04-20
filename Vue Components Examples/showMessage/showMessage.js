
export default {
  name:'show-messages',
  props:{
    messages:{
      type:Array,
      required:true
    }
  },
  template:`
    <div>
    <p v-for="msg , i in messages" :key="i"> <b>msg  {{i+1}}: </b>{{msg}}</p>
      
    
    </div>
    
  `
}
