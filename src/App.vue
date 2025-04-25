<template>
  <div class="app">
    <HeroSection />
    <EnvelopeCanvas />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import EnvelopeCanvas from "./components/EnvelopeCanvas.vue";
import HeroSection from "./components/HeroSection.vue";

export default defineComponent({
  components: {
    HeroSection,
    EnvelopeCanvas,
  },
});
</script>

<style scoped>
.app {
  font-family: "Noto Sans KR", sans-serif;
  color: #333;
  padding: 20px;
  width: 430px;
  height: 100vh;

  overflow: hidden;
  position: relative;

  display: flex;
  flex-direction: column;
}
</style>
