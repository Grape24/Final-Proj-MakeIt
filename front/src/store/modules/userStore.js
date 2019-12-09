import Vue from 'vue'
import Vuex from 'vuex'
import UserService from '../../services/UserService'

var localLoggedinUser = null;
if (sessionStorage.user) localLoggedinUser = JSON.parse(sessionStorage.user);


export default {
  strict: true,
  state: {
    loggedinUser: localLoggedinUser

  },
  getters: {
    loggedinUser(state) {
      return state.loggedinUser
    }

  },
  mutations: {
    setUser(state, { user }) {
      state.loggedinUser = user;

    }
  },
  actions: {
    async signup(context, { userCred }) {
      const user = await UserService.signup(userCred)
      context.commit({ type: 'setUser', user })
      return user;

    },
    async login(context, { userCred }) {
      const user = await UserService.login(userCred);
      context.commit({ type: 'setUser', user })
      return user;
    },
    async logout(context) {
      await UserService.logout()
      context.commit({ type: 'setUser', user: null })
    },

  }

}
