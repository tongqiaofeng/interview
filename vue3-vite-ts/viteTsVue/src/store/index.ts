import { createStore, Store } from "vuex";
import { InjectionKey } from "vue";
import todos, { TodoState } from "./modules/todos";

// 创建一个InjectionKey
export const key: InjectionKey<Store<State>> = Symbol();

export type State = {
  counter: number;
  todos?: TodoState;
};

export default createStore({
  state: {
    counter: 5,
  },
  mutations: {
    add(state) {
      state.counter++;
    },
  },
  modules: {
    todos,
  },
});
