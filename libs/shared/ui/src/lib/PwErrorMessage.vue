<template>
  <div class="pw-error-message"> {{ errorMessage }} </div>
</template>
<script setup lang="ts">
import { ERROR_CODE } from '@pw-merchant-area/shared-constants'
import { computed, type PropType } from 'vue';
const props = defineProps({
  error: {
    type: Object,
    required: true
  },
  label: {
    type: String,
    default: 'Field'
  }
})

const errorMessage = computed(() => {
  switch (props.error.code) {
    case ERROR_CODE.REQUIRED:
      return `${props.label} is required`
    default:
      return `${props.label} is invalid`
  }
})

</script>
<style>
.pw-error-message {
  @apply text-red-500 text-sm
}
</style>
