<template>
    <section class="location">
      <h4>오시는 길</h4>
      <iframe
        src="https://map.kakao.com/?q=W스퀘어컨벤션"
        width="100%"
        height="250"
        style="border:0;"
      ></iframe>
    </section>
  </template>
  
  <script lang="ts">
  export default {}
  </script>
  
  <style scoped>
  .location {
    margin-top: 40px;
    text-align: center;
  }
  h4 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  </style>