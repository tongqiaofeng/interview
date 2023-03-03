<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { defineComponent } from "vue";
/**
 * defineComponent 并没有实现任何的逻辑，只是把接收的 Object 直接返回，
 * 它的存在是完全让传入的整个对象获得对应的类型，它的存在就是完全为了服务 TypeScript 而存在的。
 * **/

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    console.log(props.msg);
  },
});
</script>

<style lang="scss" scoped></style>
