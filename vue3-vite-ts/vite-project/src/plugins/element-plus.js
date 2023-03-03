// element-plus全局引入
// import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';

// 按需引入
import {
  ElButton,
  ElInput
} from 'element-plus';
import 'element-plus/lib/theme-chalk/el-button.css';
import 'element-plus/lib/theme-chalk/el-input.css';

export default function (app) {
  // 完整引入
  // app.use(ElementPlus)

  // 按需
  app.use(ElButton)
  app.use(ElInput)
}