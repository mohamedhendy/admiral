<template>
  <div class="swiper d-flex align-items-center justify-content-between px-5">
    <h6 @click="emit('type','men');active = 'men'" :class="active == 'men' ? ' active ' : ''" class="text-uppercase user-select-none">Men</h6>
    <div class="swiper__divider user-select-none"></div>
    <h6 @click="emit('type','women');active = 'women'" :class="active == 'women' ? ' active ' : ''" class="text-uppercase user-select-none">Women</h6>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  const emit = defineEmits(['type']);
  const active = ref('men');
</script>

<style lang="scss" scoped>
  h6 {
    font-family: 'Transducer Test Black';
    font-size: 20px;
    font-weight: 900;
    line-height: 20px;
    letter-spacing: -0.03em;
    text-align: left;
    margin: 0;
    color: #a6b1c9;
    cursor: pointer;
  }
  h6.active {
    color: #02162d;
  }
  .swiper {
    width: 285px;
    height: 70px;
    padding: 16px 24px 16px 24px;
    gap: 32px;
    border-radius: 12px;
    background-color: #fff;
    &__divider {
      min-width: 1px;
      height: 38px;
      background-color: #8f9bb8;
    }
  }
</style>
