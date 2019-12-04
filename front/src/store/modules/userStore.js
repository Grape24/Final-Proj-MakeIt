import Vue from 'vue'
import Vuex from 'vuex'
import UserService from  '../../services/UserService'

export default {
  strict: true,
  state:{

  },
 
  getters: {
    
  },
  mutations: {
   
  },
  actions: {
    async signup(context, {userCred}) {
        //  console.log('mama',userCred)
        const user = await UserService.signup(userCred)
        // context.commit({type: 'setUser', user})
        return user;
        
    },

  }
    
}
