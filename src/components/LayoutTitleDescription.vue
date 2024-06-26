<template>
  <div class="mb-4 mt-5 mt-md-0">
    <h4 v-if="name" class="text-uppercase mb-0">{{ name }}</h4>
    <h3 v-if="title" class="text-uppercase mb-0">{{ title }}</h3>
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    name: {
      required: false,
      type: String,
      default: '',
    },
    title: {
      required: false,
      type: String,
      default: '',
    },
  });
</script>

<style lang="scss" scoped>
  h4 {
    font-family: 'Transducer Test Black';
    font-size: 16px;
    font-weight: 900;
    line-height: 20px;
    text-align: left;
    letter-spacing: -2%;
    @media (min-width: 992px) {
      font-size: 20px;
      letter-spacing: -3px;
    }
  }
  h3 {
    font-family: 'Transducer Test Black';
    font-size: 32px;
    font-weight: 900;
    line-height: 32px;
    text-align: left;
    letter-spacing: -1px;

    @media (min-width: 992px) {
      font-size: 57px;
      line-height: 57px;
      letter-spacing: -3px;
    }
  }
</style>
