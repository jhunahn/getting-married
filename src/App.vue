<template>
  <Hello :groom="groomName" :bridal="brideName" :image="config.title.image" />
</template>

<script setup lang="ts">
import Hello from "./components/Hello.vue";
import config from "./config/config.json";

const groomName = config.en.groom.firstName.toUpperCase();
const brideName = config.en.bride.firstName.toUpperCase();
</script>

<style lang="scss">
@import "@/assets/css/reset.scss";
@import "@/assets/css/variables.scss";
@import "@/assets/css/common.scss";
</style>
