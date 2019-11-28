import Vue from 'vue'
import Vuex from 'vuex'
import BoardService from '../services/BoardService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boards:[],
    currBoard:null,
    currTask:null
  },
  getters:{
    boards(state){
      return state.boards
    },
    currBoard(state){
      return state.currBoard
    }
  },
  mutations: {
    setCurrBoard(state, { board }) {
      state.currboard = board;
  },
  setBoards(state, { boards }) {
    state.boards = boards;
},
setCurrTask(state, {task}){
  state.currTask = task
},

  
  addBoard(state, {board}) {
    const addedBoard = BoardService.add(board)
    state.boards.push(addedBoard)
  },
 





  },
  actions: {
    loadBoards(context) {
      return BoardService.query()
          .then(boards => {
              context.commit({type: 'setBoards', boards})
              return boards;
          })
  },
    

  // 
  
  

  },
  modules: {
  }
})
