import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    count: 50
  },
  mutations: {
    add(state) {
      state.count += 2;
    }
  }
})