
import showMessage from "./showMessage.js";
export default {
  components:{showMessage},
  data:()=>({
   messages:['hello world','helloo']
  }),
  template:`
    <show-message :messages="messages"/>

  `
}
