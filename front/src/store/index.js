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
      BoardService.edit(context.getters.currBoard)
    },
    async addTopic(context,{topic}){
      const board =await BoardService.addTopic(topic,context.getters.currBoard)
      console.log('index:',board)
      context.commit({ type: 'setCurrBoard', board })

      
    },
    async removeList(context,{topicName}){
        const board = await BoardService.removeList(topicName,context.getters.currBoard)
        context.commit({ type: 'setCurrBoard', board })
    }
    



  },
  modules: {
  }
})
