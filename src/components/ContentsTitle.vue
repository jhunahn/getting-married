<template>
  <div
    ref="contentsTitle"
    class="contents-title"
    :class="{ 'is-right': isRight }"
  >
    <h2 class="text-int">
      <strong class="tt">{{ title }}</strong>
    </h2>
    <p v-if="messages" class="text-int">
      <span v-for="(item, index) in messages" :key="index" class="tt">
        {{ item }}
      </span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  title: string;
  messages?: Array<string>;
  isRight?: boolean;
}>();
</script>

<style lang="scss">
@import "@/assets/css/variables.scss";
@import "@/assets/css/common.scss";

.contents-title {
  position: relative;
  z-index: $z-bg;
  margin: 0 0 34px $left-gap;
  color: $col-key;
  &.is-right {
    text-align: right;
    h2 strong:before {
      right: auto;
      left: -50px;
    }
  }
  h2 {
    font-size: $font-mid-s;
    strong {
      position: relative;
      &:before {
        content: "";
        position: absolute;
        top: calc(50% - 2px);
        right: -50px;
        width: 40px;
        height: 2px;
        background-color: $col-key;
      }
    }
  }
  p {
    margin-top: 20px;
    font-size: $font-xs;
    line-height: 1.6;
  }
}
</style>
