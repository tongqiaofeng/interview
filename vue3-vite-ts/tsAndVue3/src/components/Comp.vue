<template>
  <h3 :style="{ backgroundColor: titleInfo.color }">{{ titleInfo.value }}</h3>

  <div>
    {{ $store.state.counter }}
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

<script lang="ts">
import { ref, defineComponent, PropType } from "vue";
import { TitleInfo, Todo } from "../types";

export default defineComponent({
  props: {
    titleInfo: {
      // 结合断言和PropType
      type: Object as PropType<TitleInfo>,
      required: true,
    },
  },
  data() {
    return {
      // 断言
      todos: [] as Todo[],
      todoName: "",
    };
  },
  created() {
    this.todos.push({
      id: 1,
      name: "vue3+ts",
      completed: false,
    });
  },
  computed: {
    doubleCounter(): number {
      return this.$store.state.counter * 2;
    },
  },
  methods: {
    newTodo(todoName: string): Todo {
      return {
        id: this.todos.length + 1,
        name: todoName,
        completed: false,
      };
    },
    addTodo(todo: Todo) {
      this.todos.push(todo);
      this.todoName = "";
    },
  }
});
</script>

<style lang="scss" scoped></style>
