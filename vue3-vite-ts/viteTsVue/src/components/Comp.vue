<template>
  <div>
    {{ $store.state.counter }}
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

  <h1 :style="{ backgroundColor: titleInfo.color, color: '#fff' }">
    {{ titleInfo.value }}
  </h1>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ToDo, TitleInfo } from "../types";

// 声明/定义一个组件
export default defineComponent({
  props: {
    titleInfo: {
      type: Object as PropType<TitleInfo>,
      required: true,
    },
  },
  data() {
    return {
      items: [] as ToDo[], // 断言，给items一个强类型ToDo
      todoName: "",
    };
  },
  created() {
    this.items.push({
      id: 1,
      name: "张三",
      age: 18,
    });
  },
  computed: {
    // : number  定义返回值的类型
    doubleCounter(): number {
      return this.$store.state.counter * 10;
    },
  },
  methods: {
    newTodo(todoName: string): ToDo {
      return {
        id: this.items.length + 1,
        name: todoName,
        age: this.items.length + 18,
      };
    },
    addTodo(todo: ToDo): void {
      this.items.push(todo);
      this.todoName = "";
    },
  },
});
</script>

<style scoped></style>
