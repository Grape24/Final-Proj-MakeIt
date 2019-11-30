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
    async loadBoards(context) {
      const boards = await BoardService.query()
      context.commit({ type: 'setBoards', boards })
      return boards;
    },
    async getCurrBoard(context, { id }) {
      const board = await BoardService.getById(id)
      context.commit({ type: 'setCurrBoard', board })
      return board;
    },
    async removeTask(context, { boardId, taskId, topic }) {
      var board = await TaskService.remove(boardId, taskId, topic)
      context.commit({ type: 'setCurrBoard', board })
    },
    async addTask(context, { boardId, task, topic }) {
      var board = await TaskService.add(boardId, task, topic)
      context.commit({ type: 'setCurrBoard', board })

    },
    async updateTask(context, { boardId, task, topic }) {
      var board = await TaskService.edit(boardId, task, topic)
      context.commit({ type: 'setCurrBoard', board })

    },
    setBoard(context) {
      const id = context.getters.currBoard._id
      // console.log('id :',id)
      BoardService.edit(context.getters.currBoard)
    },
<<<<<<< HEAD
    updateTask(context ,{task ,topicName}){
      console.log('store:',task)
      console.log('currboard :' ,context.getters.currBoard)
      console.log('top',topicName)
      TaskService.edit(task,context.getters.currBoard,topicName)
        .then(board =>{
          context.commit({ type: 'setCurrBoard', board })
        })

    }
    

=======
>>>>>>> 925daaae11f92754876b7938a88b940faf73af72
  },
  modules: {
  }
})
