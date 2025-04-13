<template>
  <div class="app">
    <WelcomeSection />
    <CoupleInfo />
    <LocationSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import CoupleInfo from "./components/CoupleInfo.vue";
import LocationSection from "./components/LocationSection.vue";
import WelcomeSection from "./components/WelcomeSection.vue";

export default defineComponent({
  components: {
    WelcomeSection,
    CoupleInfo,
    LocationSection,
  },
});
</script>

<style scoped>
.app {
  font-family: "Noto Sans KR", sans-serif;
  color: #333;
  padding: 20px;
}
</style>
