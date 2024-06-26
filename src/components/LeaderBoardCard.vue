<template>
  <div v-if="props.player" class="leader d-flex align-items-start sky-30 mb-2">
    <div class="m-1 leader__race d-flex align-items-center justify-content-center">
      <span class="sky30">
        <span class="leader__race__hash"> # </span>
        <span class="leader__race__index">{{ props.player.rank }}</span>
      </span>
    </div>
    <div class="leader__player">
      <picture>
        <source v-for="img in image.sources" :srcset="img.srcset" :type="img.type" />
        <img class="sky30 leader__player__img w-100 h-100 object-contain" :src="image.img.src" :alt="props.player.name" style="width: auto" />
      </picture>
    </div>
    <div class="leader__player__info flex-grow-1 bg-white d-flex align-items-center justify-content-between">
      <div class="sky30 d-flex align-items-center">
        <img class="mx-2 leader__player__flag" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" alt="" />
        <div>
          <h4 class="mb-0 text-uppercase">{{ props.player.first }}</h4>
          <h3 class="mb-0 text-uppercase">{{ props.player.last }}</h3>
        </div>
      </div>
      <div class="sky30">
        <div class="text-center leader__player__info__points">{{ props.player.points }}</div>
        <div class="text-center leader__player__info__pts text-uppercase">pts</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  const props = defineProps({
    player: {
      type: Object,
      default: {},
    },
  });

  const image = ref(props.player && JSON.parse(props.player.pic));
</script>
<style scoped lang="scss">
  h4 {
    font-size: 12px;
    font-weight: 900;
    line-height: 12px;
    letter-spacing: -0.03em;
    text-align: left;
    color: #02162d;
  }
  h3 {
    font-size: 16px;
    font-weight: 900;
    line-height: 20px;
    letter-spacing: -0.03em;
    text-align: left;
    color: #02162d;
  }

  .leader {
    font-family: 'Transducer Test Black';
    &__race {
      width: 39.7px;
      height: 34.57px;
      gap: 0px;
      border-radius: 2px 0px 0px 0px;
      opacity: 0px;
      background-color: #ffffff;
      border-radius: 4px;
      &__hash {
        font-family: 'Transducer Test Black';
        font-size: 10px;
        font-weight: 900;
        line-height: 12px;
        letter-spacing: -0.03em;
        text-align: center;
        color: #008689;
      }
      &__index {
        font-family: 'Transducer Test Black';
        font-size: 16px;
        font-weight: 900;
        line-height: 16px;
        letter-spacing: -0.03em;
        text-align: center;
      }
    }
    &__player {
      width: 73.19px;
      height: 85.8px;
      left: 63.9px;
      gap: 0px;
      opacity: 0px;
      background-color: #d9d9d9;
      background-image: url('../assets/images/playerBg.webp');
      background-size: cover;
      border-radius: 4px;
      margin-right: -11%;
      z-index: 2;
      &__info {
        min-height: 73.83px;
        border-radius: 4px;
        margin-top: 20px;
        padding-left: 13%;
        padding-right: 5%;
        &__points {
          font-size: 20px;
          font-weight: 900;
          line-height: 20px;
          letter-spacing: -0.03em;
          text-align: left;
        }
        &__pts {
          font-size: 10px;
          font-weight: 900;
          line-height: 10px;
          letter-spacing: -0.01em;
          text-align: left;
        }
      }
      &__img {
        object-fit: cover;
      }
      &__flag {
        width: 16px;
        height: 10.67px;
        top: 2.67px;
        gap: 0px;
        opacity: 0px;
      }
    }
  }
  .sky-30 {
    transform: skew(-30deg, 0deg);
    margin-left: -8px;
  }
  .sky30 {
    transform: skew(30deg, 0deg);
  }
</style>
