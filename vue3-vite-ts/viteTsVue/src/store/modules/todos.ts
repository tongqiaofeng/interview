import { ToDo } from "./../../types.d";
import { Module } from "vuex";
import { State } from "..";
import http from "../../api/request";

// 给当前state模型声明一个值
const initialState = {
  items: [] as ToDo[],
};

// 从initialState推断出一个类型
export type TodoState = typeof initialState;

// vuex模块化
export default {
  namespaced: true,
  state: initialState,
  mutations: {
    // payload: ToDo[]  将类型ToDo的值赋给payload
    initTodo(state, payload: ToDo[]) {
      state.items = payload;
    },
    // payload: ToDo  将payload类型定义为ToDo
    addTodo(state, payload: ToDo) {
      state.items.push(payload);
    },
  },
  actions: {
    initTodoCall({ commit }) {
      http
        .get<any>(
          "http://192.168.0.164:8081/wechat/api/indexMsgGet?page=1&pageNum=10"
        )
        .then((res: any) => {
          console.log(res);
        })
        .catch((err: any) => {
          console.log(err);
        });
      // setTimeout(() => {
      //   commit("initTodo", [
      //     {
      //       id: 1,
      //       name: "张三三",
      //       age: 18,
      //     },
      //   ]);
      // }, 500);
    },
  },
} as Module<TodoState, State>; // 当前子模块的状态，根的状态
