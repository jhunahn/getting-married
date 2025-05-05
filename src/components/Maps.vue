<template>
  <div class="maps">
    <ContentsTitle title="오시는 길" :is-right="true" :messages="messages" />
    <div class="map-wrap text-int">
      <KakaoMap
        :lat="detail.coordinate.base[0]"
        :lng="detail.coordinate.base[1]"
        :draggable="true"
        width="auto"
        height="400px"
      >
        <KakaoMapMarker
          :lat="detail.coordinate.base[0]"
          :lng="detail.coordinate.base[1]"
        />
        <KakaoMapMarker
          v-for="(item, key) in detail.coordinate.references"
          :key="key"
          :lat="item[0]"
          :lng="item[1]"
          :image="{
            imageSrc:
              'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
            imageWidth: 22,
            imageHeight: 22,
            imageOption: {
              alt: String(key),
            },
          }"
        />
      </KakaoMap>
      <ul class="way text-int">
        <li class="tt short">
          <dl>
            <dt>지하철</dt>
            <dd>{{ detail.transfortation.subway.desc }}</dd>
          </dl>
        </li>
      </ul>
      <ul class="way text-int">
        <li class="tt short">
          <dl>
            <dt>버스</dt>
            <dd>
              <li v-for="(item, key) in detail.transfortation.bus" :key="key">
                {{ key }}: {{ item }}
              </li>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { KakaoMap, KakaoMapMarker } from "vue3-kakao-maps";

import ContentsTitle from "@/components/ContentsTitle.vue";

type LocationInformation = {
  base: string[];
  coordinate: {
    base: number[];
    references: {
      [key: string]: number[];
    };
  };
  transfortation: {
    subway: {
      lines: string[];
      desc: string;
    };
    bus: {
      [key: string]: string;
    };
  };
};

const props = defineProps<{
  name: string;
  detail: LocationInformation;
}>();

const messages = props.detail.base;
</script>

<style lang="scss">
@import "@/assets/css/reset.scss";
@import "@/assets/css/variables.scss";
@import "@/assets/css/common.scss";

.maps {
  position: relative;
  margin-top: #{$top-gap-2x}px;
  color: $col-key;
}
.map-wrap {
  position: relative;
  margin: 0 -#{$side-padding};
  z-index: $z-bg;

  &.mapFixed {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    svg {
      display: none;
    }
  }
}
#map {
  left: #{-$side-padding};
  background-color: pink;
}
.way {
  margin: 32px 0 0 20px;
  > li {
    margin-top: 22px;
    font-size: $font-xxs;
    line-height: 1.6;
    dl {
      display: flex;
      dt {
        width: 200rem;
      }
      dd {
        width: calc(100% - 200rem);
      }
    }
  }
}
</style>
