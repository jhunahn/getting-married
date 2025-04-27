<template>
  <div class="app">
    <HeroSection />
    <div v-if="showWelcomeSection" class="welcome-section fade-in">
      <WelcomeSection />
    </div>
    <EnvelopeCanvas @scroll-progress="handleScrollProgress" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import EnvelopeCanvas from "./components/EnvelopeCanvas.vue";
import HeroSection from "./components/HeroSection.vue";
import WelcomeSection from "./components/WelcomeSection.vue";

export default defineComponent({
  components: {
    HeroSection,
    WelcomeSection,
    EnvelopeCanvas,
  },
  setup() {
    const showWelcomeSection = ref(false);
    const handleScrollProgress = (progress: number) =>
      (showWelcomeSection.value = progress > 0.8);

    return {
      showWelcomeSection,
      handleScrollProgress,
    };
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

.welcome-section {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.welcome-section.fade-in {
  opacity: 1;
}
</style>
