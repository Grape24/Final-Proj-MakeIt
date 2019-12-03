import Vue from 'vue'
import Vuex from 'vuex'
import BoardService from '../services/BoardService'
import TaskService from '../services/TaskService'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    boards: [],
    currBoard: null,
    activities :[]
  },
  getters: {
    boards(state) {
      return state.boards
    },
    currBoard(state) {
      return state.currBoard
    },
    activities(state){
      return state.activities
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
    addActivity(state, {activity}){
      if(state.activities === []){
        state.activities=state.currBoard.activities
      }
      console.log('index addTask', activity)

      state.activities.push(activity)
    }
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
      console.log('index addTask', topic)
      context.commit({ type: 'addActivity', topic })
      

    },
    async updateTask(context, { boardId, task, topic }) {
      var board = await TaskService.edit(boardId, task, topic)
      context.commit({ type: 'setCurrBoard', board })

    },
    async setBoard(context, { board }) {
      // const currBoard = this.getters.currBoard
      context.commit({ type: 'setCurrBoard', board })
      const res = await BoardService.edit(board)
      // if (!res) {
      //   context.commit({ type: 'setCurrBoard', board: currBoard })
      // }
    },
    async addTopic(context, { topic }) {
      const currBoard = { ...context.getters.currBoard }
      currBoard.topicTasksMap[topic] = []
      
      const board = await BoardService.edit(currBoard)
      console.log('addTop',board)
      context.commit({ type: 'setCurrBoard', board })
      
    },
    async removeList(context, { topicName }) {
      const currBoard = { ...context.getters.currBoard }
      delete currBoard.topicTasksMap[topicName]
      const board = await BoardService.edit(currBoard)
      context.commit({ type: 'setCurrBoard', board })
    }

  }
})
