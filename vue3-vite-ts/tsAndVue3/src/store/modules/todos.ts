import { Module } from "vuex";
import { State } from "..";
import { Todo } from "../../types";

const initialState = {
  todos: [
    {
      id: 1,
      name: "vue3+ts",
      completed: false,
    },
  ] as Todo[],
};

export type TodoState = typeof initialState;

export default {
  namespaced: true,
  state: initialState,
  mutations: {
    initTodo(state, payload: Todo[]) {
      state.todos = payload;
    },
    addTodo(state, payload: Todo) {
      state.todos.push(payload);
    },
  },
  actions: {
    initTodo({ commit }) {
      setTimeout(() => {
        commit("initTodo", [
          {
            id: 1,
            name: "vue3+ts",
            completed: false,
          },
        ]);
      }, 500);
    },
  },
} as Module<TodoState, State>;
