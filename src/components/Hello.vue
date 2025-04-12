<template>
  <div class="hello-kv">
    <div class="frames">
      <figure>
        <img :src="headImage" alt="key visual" />
        <div ref="greetingName" class="greetings-name text-int">
          <strong class="tt">{{ groom }}</strong>
          <span class="tt">and</span>
          <strong class="tt">{{ bridal }}</strong>
        </div>
      </figure>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineOptions, defineProps, onMounted, ref } from "vue";

import headImage from "@/assets/images/we.png";

defineOptions({
  name: "HelloView",
});

defineProps<{
  groom?: string;
  bridal?: string;
}>();

const greetingName = ref<HTMLElement | null>(null);

onMounted(() => {
  setTimeout(() => {
    greetingName.value?.classList.add("hello");
  }, 500);
});
</script>

<style scoped lang="scss">
@import "@/assets/css/reset.scss";
@import "@/assets/css/variables.scss";
@import "@/assets/css/common.scss";
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,500&display=swap");

.hello-kv {
  position: relative;
  min-height: 100vh;
  // margin-bottom: #{$top-gap}px;
  color: $col-key;
}

.frames {
  display: block;
  width: calc(100% + #{$side-padding * 2});
  margin: 0 -15px 0;
  figure {
    display: block;
    margin-block-start: 0%;
    margin-block-end: 0%;
    margin-inline-start: 0%;
    margin-inline-end: 0%;
    position: relative;
    width: 100%;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      opacity: 0.3;
    }
    img {
      display: block;
      width: 100%;
    }
  }
}

.greetings-name {
  position: absolute;
  top: 55%;
  left: 0;
  z-index: $z-bg;
  margin-left: $left-gap;
  color: #fff;
  font-family: "Pretendard", serif;
  > strong {
    display: block;
    margin-top: 25px;
    font-size: $font-lar;
    font-style: italic;
  }
  > span {
    display: block;
    margin-top: 25px;
    font-size: $font-s;
    font-family: "cursive";
    font-style: italic;
  }
}
</style>
