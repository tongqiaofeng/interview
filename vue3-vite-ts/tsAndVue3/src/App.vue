<template>
  <Comp :title-info="{ value: 'vue3+ts', color: 'green' }"></Comp>
  <CompSetup :title-info="{ value: 'vue3+ts', color: 'green' }"></CompSetup>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts" setup>
// import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Comp from "./components/Comp.vue";
import CompSetup from "./components/CompSetup.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
