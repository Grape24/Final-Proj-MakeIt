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
    async setBoard(context, {board}) {
      if(board){
       await BoardService.edit(board)
       context.commit({type: 'setCurrBoard', board })
      }else{
      BoardService.edit(context.getters.currBoard)
      }
    },
<<<<<<< HEAD
    async addTopic(context, { topic }) {
      const CurrBoard = { ...context.getters.currBoard }
      CurrBoard.topicTasksMap[topic] = []
      const board = await BoardService.edit(CurrBoard)
      context.commit({ type: 'setCurrBoard', board })
=======
    async addTopic(context,{topic}){
      const board = await BoardService.addTopic(topic,context.getters.currBoard)
      context.commit({ type: 'setCurrBoard', board })

      
>>>>>>> 376b37f3d489c84075c8d73206b1c96eadc42e1a
    },
    async removeList(context, { topicName }) {
      const CurrBoard = { ...context.getters.currBoard }
      delete CurrBoard.topicTasksMap[topicName]
      const board = await BoardService.edit(CurrBoard)
      context.commit({ type: 'setCurrBoard', board })
    }

  }
})
