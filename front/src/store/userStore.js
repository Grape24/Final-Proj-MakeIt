import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state:{

  },
 
  getters: {
    
  },
  mutations: {
   
  },
  actions: {
    async signup(context, {userCred}) {
        console.log(userCred)
        // const user = await UserService.signup(userCred)
        // context.commit({type: 'setUser', user})
        // return user;
        
    },

  }
    
})
