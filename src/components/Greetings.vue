<template>
  <div ref="greeting" class="greetings">
    <p v-if="messages" class="text-int message">
      <span v-for="(item, index) in messages" :key="index" class="tt">
        {{ item }}
      </span>
    </p>
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
    <div class="info">
      <p class="info-date text-int">
        <span class="tt">{{ formattedDates.full }}</span>
        <span class="tt">{{ formattedDates.hour }}</span>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, defineOptions, defineProps } from "vue";

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
  messages?: Array<string>;
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

<style lang="scss" scoped>
@import "@/assets/css/reset.scss";
@import "@/assets/css/variables.scss";
@import "@/assets/css/common.scss";

.greetings {
  position: relative;
  color: $col-key;
  padding-top: 20px;

  .message {
    text-align: center;
    font-size: $font-xs;
    margin-top: 20px;
    line-height: 1.6;
  }

  .info {
    position: relative;
    z-index: $z-bg;
    margin: #{$top-gap}px 0 0 $left-gap;
    font-size: $font-s;
    line-height: 1.6;
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
}
</style>
