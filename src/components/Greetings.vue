<template>
  <div ref="greeting" class="greetings">
    <ContentsTitle title="초대합니다." :is-right="false" :messages="messages" />
    <div class="info">
      <p class="info-date text-int">
        <span class="tt">{{ formattedDates.full }}</span>
        <span class="tt">{{ formattedDates.hour }}</span>
      </p>
      <div class="info-place text-int">
        <p class="tt">{{ location.city }} {{ location.name }}</p>
        <p class="tt">{{ location.hall }}</p>
      </div>
    </div>

    <div class="parents">
      <p class="text-int">
        <span class="parents-name tt">{{ detail.groom.father }}</span>
        <span class="parents-name tt">{{ detail.groom.mother }}</span>
        <em class="tt">의 {{ detail.groom.sibling }}</em>
        <strong class="tt">{{ detail.groom.name }}</strong>
      </p>

      <p class="text-int">
        <span class="parents-name tt">{{ detail.bride.father }}</span>
        <span class="parents-name tt">{{ detail.bride.mother }}</span>
        <em class="tt">의 {{ detail.bride.sibling }}</em>
        <strong class="tt">{{ detail.bride.name }}</strong>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, defineOptions, defineProps } from "vue";

import ContentsTitle from "@/components/ContentsTitle.vue";

defineOptions({
  name: "Greetings",
});

type WeddingDate = {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
};

type WeddingLocation = {
  name: string;
  city: string;
  hall: string;
};

type Role = "groom" | "bride";
type CoupleInfo = {
  [key in Role]: {
    name: string;
    sibling: string;
    father: string;
    mother: string;
  };
};

const props = defineProps<{
  detail: CoupleInfo;
  date: WeddingDate;
  location: WeddingLocation;
  messages: Array<string>;
}>();

const formattedDates = computed(() => {
  const { year, month, day, hour, minute } = props.date;
  const strHour = hour > 12 ? `오후 ${hour - 12}` : hour;

  const date = new Date(year, month - 1, day, hour, minute);
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

  return {
    full: `${year}년 ${month}월 ${day}일 (${weekdays[date.getDay()]})`,
    hour: `${strHour}시 ${minute}분`,
  };
});
</script>

<style lang="scss">
@import "@/assets/css/reset.scss";
@import "@/assets/css/variables.scss";
@import "@/assets/css/common.scss";

.greetings {
  position: relative;
  color: $col-key;
  padding-top: 20px;
}

.message {
  display: block;
  position: relative;
  z-index: $z-bg;
  margin: 0 0 0 $left-gap;
  justify-content: flex-end;
  font-size: $font-xs;
  line-height: 1.6;
}

.info {
  position: relative;
  z-index: $z-bg;
  margin: #{$top-gap}px 0 0 $left-gap;
  font-size: $font-s;
  line-height: 1.6;
  &-place {
    margin-top: 20px;
    line-height: 1.4;
    font-size: $font-s;
  }
}

.parents {
  position: relative;
  z-index: $z-bg;
  margin: #{$top-gap}px 0 0 $left-gap;
  > p {
    display: flex;
    flex-wrap: wrap;
    .parents-name {
      display: inline-block;
      font-size: $font-xs;
      & + .parents-name {
        position: relative;
        margin-left: 20px;
        &::before {
          content: "";
          position: absolute;
          top: 8px;
          left: -12px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: $col-key;
        }
      }
    }
    > em {
      display: inline-block;
      margin-left: 5px;
      font-size: $font-xxs;
      vertical-align: middle;
      text-align: left;
      & + strong {
        display: inline-block;
        margin: 0 0 0 20px;
        font-size: $font-xs;
        font-weight: bold;
      }
    }
    & + p {
      margin-top: 40px;
    }
  }
}
</style>
