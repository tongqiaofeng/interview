<template>
  <HelloWorld ref="hw" msg="Hello Vue 3 + Vite" @myClick="onmyClick" />
  <div @click="$store.commit('add')">{{ $store.state.count }}</div>
  <el-input></el-input>
</template>

<script setup>
import HelloWorld from "comps/HelloWorld.vue";
import { ref } from "vue";

const hw = ref(null);

function onmyClick() {
  console.log("emit from helloWorld");
  hw.value.someMethods();
  console.log(hw.value.a);
}
</script>

<style scoped></style>
