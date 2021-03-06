import Vue from 'vue'
import Vuex from 'vuex'
import BoardService from '../services/BoardService'
import TaskService from '../services/TaskService'
import userStore from './modules/userStore.js'
import SocketService from "../services/SocketService.js";
import { stat } from 'fs';


Vue.use(Vuex)
 
const store = new Vuex.Store({
  state: {
    boards: [],
    currBoard: null
  },
  modules: {
    userStore
  },
  getters: {
    boards(state) {
      return state.boards
    },
    currBoard(state) {
      return state.currBoard
    },
    activities(state) {
      return state.currBoard.activites
    },
    topicsAsArray(state) {
      if (!state.currBoard) return []
      var res = Object.keys(state.currBoard.topicTasksMap).map(key => {
        return { [key]: state.currBoard.topicTasksMap[key] }
      })
      return res
    },
    topics(state) {
      if (!state.currBoard) return null;
      return state.currBoard.topicTasksMap

    }
  },
  mutations: {
    setCurrBoard(state, { board }) {
      state.currBoard = board;

    },
    setBoards(state, { boards }) {
      state.boards = boards;
    },
    removeBoard(state, { boardId }) {
      let idx = state.boards.findIndex(board => board._id === boardId)
      state.boards.splice(idx, 1)
    }
  },
  actions: {
    async loggedOut(context) {
      let user = null
      if (sessionStorage.user) {
        user = JSON.parse(sessionStorage.user)
      }
      const currBoard = JSON.parse(JSON.stringify(context.state.currBoard))
      if (currBoard) {
        let idx = this.currBoard.members.findIndex(
          member => member._id === user._id
        );
        this.currBoard.members.splice(idx, 1);
        const board = BoardService.edit(currBoard)
        context.commit({ type: 'setCurrBoard', board })
      }
      sessionStorage.clear();
    },
    async addMembers(context) {
      const user = store.state.userStore.loggedinUser
      if (user && !store.state.currBoard.members.find(member => member._id === user._id)) {
        const currBoard = JSON.parse(JSON.stringify(store.state.currBoard))
        currBoard.members.push(user)
        const board = await BoardService.edit(currBoard)
        context.commit({ type: 'setCurrBoard', board })
        SocketService.emit('update board', board)
      }
    },
    async updateBoard(context, { board }) {
      await BoardService.edit(board)
    },
    async removeBoard(context, { boardId }) {
      await BoardService.remove(boardId)
      context.commit({ type: 'removeBoard', boardId })
    },
    async addBoard(context, { board }) {
      board = await BoardService.add(board)
      const boards = [...context.state.boards]
      boards.push(board)
      context.commit({ type: 'setBoards', boards })
    },
    async loadBoards(context) {
      const boards = await BoardService.query()
      context.commit({ type: 'setBoards', boards })
      return boards;
    },
    async getCurrBoard(context, { id }) {
      const board = await BoardService.getById(id)
      context.commit({ type: 'setCurrBoard', board })
      SocketService.emit('update board', board)
      return board;
    },
    async removeTask(context, { boardId, taskId, topic }) {
      var board = await TaskService.remove(boardId, taskId, topic)
      context.commit({ type: 'setCurrBoard', board })
      SocketService.emit('update board', board)

    },
    async addTask(context, { boardId, task, topic }) {
      var board = await TaskService.add(boardId, task, topic)
      context.commit({ type: 'setCurrBoard', board })
      SocketService.emit('update board', board)

    },
    async updateTask(context, { boardId, task, topic }) {
      var board = await TaskService.edit(boardId, task, topic)
      await BoardService.edit(board)
      context.commit({ type: 'setCurrBoard', board })
      SocketService.emit('update board', board)
    },
    async setBoard(context, { board }) {
      context.commit({ type: 'setCurrBoard', board })
      await BoardService.edit(board)
      SocketService.emit('update board', board)

    },
    async addList(context, { topic }) {
      const currBoard = JSON.parse(JSON.stringify(context.state.currBoard))
      currBoard.topicTasksMap[topic] = []
      const board = await BoardService.edit(currBoard)
      context.commit({ type: 'setCurrBoard', board })
      SocketService.emit('update board', board)

    },
    async removeList(context, { topicName }) {
      const currBoard = JSON.parse(JSON.stringify(context.getters.currBoard))
      delete currBoard.topicTasksMap[topicName]
      const board = await BoardService.edit(currBoard)
      context.commit({ type: 'setCurrBoard', board })
      SocketService.emit('update board', board)

    }

  }
})


SocketService.on("board updated", board => {
  store.commit({ type: "setCurrBoard", board });
});

export default {
  store
}
