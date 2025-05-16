<template>
  <div class="gallary">
    <ContentsTitle title="GALLARY" />
    <div class="text-int">
      <Galleria
        ref="galleria"
        v-model:active-index="activeIndex"
        :value="images"
        :num-visible="5"
        :show-thumbnails="showThumbnails"
        :show-item-navigators="true"
        :show-item-navigators-on-hover="true"
        :circular="true"
        :auto-play="isAutoPlay"
        :transition-interval="5000"
        :responsive-options="responsiveOptions"
      >
        <!-- 메인 이미지 슬롯 -->
        <template #item="slotProps">
          <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" />
        </template>

        <template #thumbnail="slotProps">
          <div class="thumbnais">
            <img
              :src="slotProps.item.thumbnailImageSrc"
              :alt="slotProps.item.alt"
              class="thumbnails"
            />
          </div>
        </template>

        <template #footer>
          <div class="p-galleria-footer galleria-footer">
            <button type="button" @click="toggleThumbnails">
              <i class="pi pi-th-large">
                <span class="material-symbols-sharp">grid_view</span>
              </i>
            </button>
            <button type="button" size="large" @click="toggleAutoPlay">
              <i :class="isAutoPlay ? 'pi pi-pause' : 'pi pi-play'">
                <span class="material-symbols-sharp" style="font-size: 27px">{{
                  isAutoPlay ? "pause" : "play_arrow"
                }}</span>
              </i>
            </button>
            <span class="footer-info">
              <span>{{ activeIndex + 1 }}/{{ images.length }}</span>
              <span class="title">{{ images[activeIndex].title }}</span>
              <span>{{ images[activeIndex].alt }}</span>
            </span>
          </div>
        </template>
      </Galleria>
    </div>
  </div>
</template>

<script setup lang="ts">
import Galleria from "primevue/galleria";
import { ref } from "vue";

import ContentsTitle from "@/components/ContentsTitle.vue";

const activeIndex = ref(0);
const showThumbnails = ref(false);
const isAutoPlay = ref(true);

const imageModules = import.meta.glob(
  "@/assets/images/gallary/*.{jpg,jpeg,png,gif}",
  {
    eager: true,
    import: "default",
  },
);

const images = ref(
  Object.values(imageModules).map(src => ({
    itemImageSrc: src,
    thumbnailImageSrc: src,
    title: "",
    alt: "",
  })),
);

const responsiveOptions = [
  {
    breakpoint: "1024px",
    numVisible: 5,
  },
  {
    breakpoint: "768px",
    numVisible: 5,
  },
  {
    breakpoint: "560px",
    numVisible: 5,
  },
];

const toggleAutoPlay = () => (isAutoPlay.value = !isAutoPlay.value);
const toggleThumbnails = () => (showThumbnails.value = !showThumbnails.value);
</script>

<style lang="scss">
@import "@/assets/css/reset.scss";
@import "@/assets/css/variables.scss";
@import "@/assets/css/common.scss";

.gallary {
  position: relative;
  margin-top: #{$top-gap-2x}px;

  .p-galleria {
    &.p-component {
      display: flex;
      flex-direction: column;
      border: none;
    }

    &-content {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: clamp(490px, 58vw, 900px);
      overflow: hidden;

      img {
        width: 100%;
        display: block;
        object-fit: contain;
      }
    }

    &-thumbnails {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 0.5rem 0;
      background-color: rgba(0, 0, 0, 0.5);

      img {
        width: 60px;
        height: 40px;
        object-fit: cover;
        margin: 0 0.25rem;
        cursor: pointer;
        border: 2px solid transparent;
        transition: border-color 0.3s;

        &:hover {
          border-color: #ffffff;
        }
      }
    }

    &-footer {
      display: flex;
      align-items: center;
      width: 100%;

      color: $col-key;
      min-height: 4rem;
      padding: 0 1rem;

      button {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        background-color: transparent;
        border: none;
        color: $col-key;
        cursor: pointer;

        width: 20px;
        height: 20px;
        padding: 0.75rem 1.5rem;
        margin: 1.1rem 3rem;

        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
      }
      .material-symbols-sharp {
        vertical-align: middle;
      }
      .footer-info {
        margin-left: auto;
        display: inline-flex;
        flex-direction: column;
        align-items: flex-end;
        text-align: right;
        font-size: $font-xxs;
        .title {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
