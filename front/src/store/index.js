import Vue from 'vue'
import Vuex from 'vuex'
import BoardService from '../services/BoardService'
import TaskService from '../services/TaskService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    boards: [],
    currBoard: null,
  },
  getters: {
    boards(state) {
      return state.boards
    },
    currBoard(state) {
      return state.currBoard
    }
  },
  mutations: {
    setCurrBoard(state, { board }) {
      state.currBoard = board;
    },
    setBoards(state, { boards }) {
      state.boards = boards;
    },
    addBoard(state, { board }) {
      const addedBoard = BoardService.add(board)
      state.boards.push(addedBoard)
    },





  },
  actions: {
    loadBoards(context) {
      return BoardService.query()
        .then(boards => {
          context.commit({ type: 'setBoards', boards })
          return boards;
        })
    },
    getCurrBoard(context, { id }) {
      return BoardService.getById(id)
        .then(board => {
          context.commit({ type: 'setCurrBoard', board })
          return board;
        })
    },
    setBoard(context){
      
      const id = context.getters.currBoard._id
      // console.log('id :',id)
      BoardService.edit(context.getters.currBoard)
    },
    updateTask(context ,{task ,topicName}){
      console.log('store:',task)
      console.log('currboard :' ,context.getters.currBoard)
      console.log('top',topicName)
      TaskService.edit(task,context.getters.currBoard,topicName)
        .then(board =>{
          context.commit({ type: 'setCurrBoard', board })
        })

    }
    

  },
  modules: {
  }
})
