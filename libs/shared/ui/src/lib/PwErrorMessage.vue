<template>
  <div class="pw-error-message"> {{ message }} </div>
</template>
<script setup lang="ts">
const props = defineProps({
  message: {
    type: String,
    required: true
  }
})
</script>
<style>
.pw-error-message {
  @apply text-red-500
}
</style>
