<template>
  <h3 :style="{ backgroundColor: titleInfo.color }">{{ titleInfo.value }}</h3>

  <div @click="$store.commit('add')">
    {{ counter }}
  </div>
  <div>
    {{ doubleCounter }}
  </div>

  <!-- 新增待办 -->
  <input
    type="text"
    v-model="todoName"
    @keydown.enter="addTodo(newTodo(todoName))"
  />
  <!-- 待办事项列表 -->
  <div v-for="item in todos" :key="item.id">
    {{ item.name }}
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, defineProps } from "vue";
import type { PropType } from "vue";
import type { TitleInfo, Todo } from "../types";
import { useStore } from "vuex";
import { key } from "../store";

const store = useStore(key);
const counter = computed(() => store.state.counter);
const doubleCounter = computed(() => counter.value * 2);

// 定义属性
defineProps({
  titleInfo: {
    // 结合断言和PropType
    type: Object as PropType<TitleInfo>,
    required: true,
  },
});

const todos = computed(() => store.state.todos?.todos);
const todoName = ref("");
// todos初始化
store.dispatch("todos/initTodo");

function newTodo(todoName: string): Todo {
  return {
    id: todos.value!.length + 1,
    name: todoName,
    completed: false,
  };
}
function addTodo(todo: Todo) {
  todos.value!.push(todo);
  todoName.value = "";
}
</script>

<style lang="scss" scoped></style>
