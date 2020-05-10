import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    player: "X",
    depth: 0,
    boardPlaying: "init",
    winner: ""
  },
  mutations: {
    storeDepth(state, depth) {
      state.depth = depth;
    },
    changeTurn(state) {
      if (state.player === "X") {
        state.player = "O";
      } else {
        state.player = "X"
      }
    },
    changeBoard(state, board) {
      state.boardPlaying = board;
    }
  },
  getters: {
    getMark(state) {
      return state.player;
    }
  }
});

export default store;
