<template>
  <div @click="$store.commit('add')">
    {{ counter }}
  </div>
  <div>{{ doubleCounter }}</div>

  <!-- 新增姓名 -->
  <input
    type="text"
    v-model="todoName"
    @keydown.enter="addTodo(newTodo(todoName))"
  />
  <div v-for="item in items" :key="item.id">
    {{ item.name + " " + item.age + "岁" }}
  </div>

  <h3 :style="{ backgroundColor: titleInfo.color, color: '#fff' }">
    {{ titleInfo.value }}
  </h3>
</template>

<script lang="ts" setup>
import { ref, computed, defineProps } from "vue";
import type { PropType } from "vue";
import type { ToDo, TitleInfo } from "../types";
// composition API使用vuex
import { useStore } from "vuex";
import store, { key } from "../store";

// 属性声明
defineProps({
  titleInfo: {
    type: Object as PropType<TitleInfo>,
    required: true,
  },
});

const counter = computed(() => useStore(key).state.counter);
const doubleCounter = computed(() => counter.value * 3);

// const items = ref([] as ToDo[]);
const items = computed(() => store.state.todos?.items);
// items初始化
store.dispatch("todos/initTodoCall");

const todoName = ref("");
const newTodo = (todoName: string): ToDo => {
  return {
    id: items.value!.length + 1,
    name: todoName,
    age: items.value!.length + 18,
  };
};
const addTodo = (todo: ToDo): void => {
  items.value!.push(todo);
  todoName.value = "";
};
</script>

<style scoped></style>
