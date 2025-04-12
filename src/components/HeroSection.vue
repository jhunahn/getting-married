<template>
  <div>
    <!-- 히어로 영역 -->
    <section
      ref="heroRef"
      class="hero-section"
      :class="{ 'slide-up': !isHeroVisible }"
    >
      <h1 class="hero-names">
        <span class="name top">{{ groomName }}</span>
        <span class="name middle">and</span>
        <span class="name bottom">{{ brideName }}</span>
      </h1>
      <div class="spacer"></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import config from "../config/config.json";

const groomName = config.en.groom.firstName.toUpperCase();
const brideName = config.en.bride.firstName.toUpperCase();

const isHeroVisible = ref(true);
const heroRef = ref<HTMLElement | null>(null);

let observer: IntersectionObserver;

onMounted(() => {
  if (heroRef.value) {
    observer = new IntersectionObserver(
      ([entry]) => {
        isHeroVisible.value = entry.isIntersecting;
      },
      {
        threshold: 0.3, // 30% 이상 보일 때만 true
      },
    );
    observer.observe(heroRef.value);
  }
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<style scoped>
@import "@/assets/css/hero.css";
</style>
