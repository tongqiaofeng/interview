<template>
  <router-link to="/add">add</router-link>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <Comp :title-info="{ value: '星期一', color: 'green' }"></Comp>
  <CompSetup :title-info="{ value: '星期二', color: 'red' }"></CompSetup>
</template>

<script setup lang="ts">
import HelloWorld from "../components/HelloWorld.vue";
import Comp from "../components/Comp.vue";
import CompSetup from "../components/CompSetup.vue";
</script>

<style scoped></style>
