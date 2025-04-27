<template>
  <div ref="scrollContainer" class="scroll-container" @scroll="handleScroll">
    <canvas ref="canvas" class="envelope-canvas"></canvas>
    <img ref="overlayImage" class="overlay-image" :src="happliyEverAfter" />
    <div ref="textOverlay" class="text-overlay">Wedding Day</div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, onBeforeUnmount, onMounted, ref } from "vue";

import happliyEverAfter from "@/assets/images/happily-ever-after.png";

const canvas = ref<HTMLCanvasElement | null>(null);
const overlayImage = ref<HTMLCanvasElement | null>(null);
const scrollContainer = ref<HTMLCanvasElement | null>(null);
const textOverlay = ref<HTMLCanvasElement | null>(null);

let ctx: CanvasRenderingContext2D | null;
const emit = defineEmits(["scrollProgress"]);

const drawVEnvelope = () => {
  if (!ctx) return;

  const w = scrollContainer.value?.clientWidth || window.innerWidth;
  const h = scrollContainer.value?.clientHeight || window.innerHeight;

  ctx.clearRect(0, 0, w, h);

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(w / 2, 80);
  ctx.lineTo(w, 0);
  ctx.lineTo(w, h);
  ctx.lineTo(0, h);
  ctx.closePath();

  ctx.fillStyle = "#e6e6e6";
  ctx.fill();
};

const handleScroll = () => {
  const scrollTop = window.scrollY;
  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const progress = Math.min(Math.max(scrollTop / documentHeight, 0), 1);
  const translateY = progress * (window.innerHeight + 200);

  if (canvas.value) {
    canvas.value.style.transform = `translateY(${translateY}px)`;
  }

  if (overlayImage.value) {
    // overlayImage.value.style.opacity = (1 - progress).toString();
    overlayImage.value.style.transform = `translate(-50%, -50%) translateY(${translateY}px)`;
  }

  if (textOverlay.value) {
    // textOverlay.value.style.opacity = (1 - progress).toString();
    textOverlay.value.style.transform = `translate(-50%, calc(-50% + ${translateY}px))`;
  }
  emit("scrollProgress", progress);
};

const resizeCanvas = () => {
  if (canvas.value && scrollContainer.value) {
    const container = scrollContainer.value;
    canvas.value.width = container.clientWidth;
    canvas.value.height = container.clientHeight;
  }
  drawVEnvelope();
};

onMounted(() => {
  if (canvas.value) ctx = canvas.value.getContext("2d");
  resizeCanvas();
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", resizeCanvas);
  drawVEnvelope();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", resizeCanvas);
});
</script>

<style scoped>
@import "@/assets/css/envelope-canvas.css";
</style>
