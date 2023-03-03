// generated by unplugin-vue-components
// We suggest you to commit this file into source control
// Read more: https://github.com/vuejs/core/pull/3399
import '@vue/runtime-core'

export {}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ElIcon: typeof import('element-plus/es')['ElIcon']
    ElImage: typeof import('element-plus/es')['ElImage']
    HelloWorld: typeof import('./src/components/HelloWorld.vue')['default']
    Modal: typeof import('./src/components/Modal.vue')['default']
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
    UploadImg: typeof import('./src/components/UploadImg.vue')['default']
    VanButton: typeof import('vant/es')['Button']
  }
  export interface ComponentCustomProperties {
    vLoading: typeof import("element-plus/es")["ElLoadingDirective"]
  }
}
