<template>
  <div class="welcome-section">
    <div>{{ date.toLocaleString() }}</div>
    <div>{{ ko.description }}</div>
  </div>
</template>

<script setup lang="ts">
import { invitation, ko } from "../config/config.json";

const date = new Date(invitation.date);
</script>

<style scoped>
.welcome-section {
  font-size: 24px;
}
</style>
