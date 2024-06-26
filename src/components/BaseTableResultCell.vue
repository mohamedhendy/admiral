<template>
  <div :class="props.is_qualifying_score ? 'bg-green text-white' : 'text-black'" class="highlight-cell d-inline-flex align-items-center justify-content-between">
    <span class="value">
      {{ props.value }}
     
    </span>
    <cup v-if="is_qualifying_score && props.rank == 1" class="ms-1" type="Gold" />
    <cup v-if="is_qualifying_score && props.rank == 2" class="ms-1" type="Silver" />
    <cup v-if="is_qualifying_score && props.rank == 3" class="ms-1" type="Bronze" />
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import cup from './icons/cup.vue';
  const props = defineProps({
    value: {
      required: false,
      type: String,
      default: '',
    },
    rank: {
      required: false,
      type: Number,
      default: 0,
    },
    is_qualifying_score: {
      required: false,
      type: Boolean,
      default: false,
    },

  });
</script>
<style lang="scss">
  .bg-green {
    background-color: #008689;
  }
  .text-black {
    color: #000 !important;
  }
  .highlight-cell {
    padding: 12px 16px 12px 16px;
    gap: 10px;
    border-radius: 8px;
    opacity: 0px;
    min-width: 85px;
    text-align: center;
    .value {
      font-family: 'Transducer Test Black';
      font-size: 16px;
      font-weight: 900;
      line-height: 16px;
      letter-spacing: 0.04em;
      text-align: left;
      margin: auto;
    
    }

  }
 
</style>
