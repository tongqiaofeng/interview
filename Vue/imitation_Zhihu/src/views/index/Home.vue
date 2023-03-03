<template>
  <div>
    <van-button type="primary" @click="testToast">主要按钮</van-button>
    <div>
      <UploadImg :imgUrl="imgList" :imgType="3"></UploadImg>
    </div>

    <img v-if="loaded && result" :src="result[0].url" style="width: 400px" />

    <HelloWorld :msg="helloMsg"></HelloWorld>

    <Modal></Modal>
  </div>
</template>

<script lang="ts">
import { ref, watch } from "vue";
import UploadImg from "@/components/UploadImg.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Modal from "@/components/Modal.vue";

import { Toast } from "vant";

import useURLLoader from "@/hooks/useURLLoader";

// interface IDogResult {
//   message: string;
//   status: string;
// }

interface ICatResult {
  id: number;
  url: string;
  width: number;
  height: number;
}

export default {
  name: "indexContent",
  setup() {
    // const { result, loaded } = useURLLoader<IDogResult>(
    //   "https://dog.ceo/api/breeds/image/random"
    // );

    // watch(result, () => {
    //   if (result.value) {
    //     console.log(result.value.message);
    //   }
    // });

    const { result, loaded } = useURLLoader<ICatResult[]>(
      "https://api.thecatapi.com/v1/images/search?limit=5"
    );

    watch(result, () => {
      if (result.value) {
        console.log(result.value[0].url);
      }
    });

    function testToast() {
      Toast({
        message: "测试",
      });
    }

    const imgList = ref<Array<string>>([
      "ce5fa66c2f534599a1603ff4a34a89cc.jpg",
    ]);

    const helloMsg = ref("你好");

    return {
      testToast,
      imgList,
      result,
      loaded,
      helloMsg,
    };
  },
};
</script>

<style lang="scss" scoped></style>
