<template>
  <teleport to="#modal">
    <div id="center">
      <h2>弹窗组件</h2>
    </div>
  </teleport>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
#center {
  width: 200px;
  height: 200px;
  margin: auto;
  border: 1px solid #000;
  border-radius: 6px;
  background-color: #fff;
  font-size: 14px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
