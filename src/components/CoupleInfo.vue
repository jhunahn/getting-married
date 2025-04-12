<template>
    <section class="couple">
      <img :src="imgSrc" alt="신랑 신부 사진" />
      <h3>안지훈 &nbsp; ♥ &nbsp; 남효정</h3>
      <p>2025년 8월 2일 (토) 오후 12시 30분</p>
      <p>판교 W스퀘어컨벤션 채플홀</p>
    </section>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        imgSrc: new URL('/src/assets/images/we.png', import.meta.url).href
      }
    }
  }
  </script>
  
  <style scoped>
  .couple {
    text-align: center;
    margin-top: 30px;
  }
  img {
    width: 100%;
    max-width: 320px;
    border-radius: 10px;
    margin: 0 auto 20px;
  }
  h3 {
    font-size: 20px;
    margin-bottom: 8px;
  }
  p {
    font-size: 14px;
    color: #666;
  }
  </style>