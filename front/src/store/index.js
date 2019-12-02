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
    async setBoard(context, { board }) {
      if (board) {
        await BoardService.edit(board)
        context.commit({ type: 'setCurrBoard', board })
      } else {
        BoardService.edit(context.getters.currBoard)
      }
    },
    async addTopic(context, { topic }) {
      const currBoard = { ...context.getters.currBoard }
      currBoard.topicTasksMap[topic] = []
      const board = await BoardService.edit(currBoard)
      context.commit({ type: 'setCurrBoard', board })
    },

    async changeTopic(context,{newTopic,oldTopic}){
      var board =context.getters.currBoard
      const topic = JSON.parse(JSON.stringify(board.topicTasksMap[oldTopic]))
      board.topicTasksMap[newTopic]=topic
      delete board.topicTasksMap[oldTopic]
      const newBoard = await BoardService.edit(board)
      var board=newBoard.data
      context.commit({type: 'setCurrBoard', board})
    },
    
    async removeList(context, { topicName }) {
      const currBoard = { ...context.getters.currBoard }
      delete currBoard.topicTasksMap[topicName]
      const board = await BoardService.edit(currBoard)
      context.commit({ type: 'setCurrBoard', board })
    }

  }
})
