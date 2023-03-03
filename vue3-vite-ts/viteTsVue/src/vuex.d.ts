// vuex的说明文件
// 给当前的配置项里加入自定义属性store
import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { State } from "./store";

// 模块扩展
// this.$store强类型支持
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
