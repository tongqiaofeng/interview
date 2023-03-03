<template>
  <h1>{{ msg }}</h1>
  <comp></comp>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="state.count++">
    count is: {{ state.count }}
  </button>
  <!-- <button @click="emit('myClick')">emit</button> -->
  <el-button @click="handleClick">emit</el-button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
// script setup 使用setup后不需要再一个个导出变量
// 1.直接导入组件
import Comp from "@/components/Comp.vue";
import { defineProps, reactive, defineEmits, useContext, ref } from "vue";

// 2.属性定义  父传子
const props = defineProps({
  msg: String,
});
console.log(props);

// 3.获取上下文
const context = useContext();
console.log("上下文", context);

const a = ref("nihao");

context.expose({
  someMethods() {
    console.log("some message from helloWorld");
  },
  a,
});

// 4.定义事件  子传父
const emit = defineEmits("[myClick]");
const handleClick = () => {
  // emit('myClick')
  context.emit("myClick");
};

const state = reactive({ count: 0 });

// 请求mock api
fetch("/api/getUsers")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
</script>

<style scoped></style>
