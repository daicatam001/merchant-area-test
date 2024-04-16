<template>
  <div class="pw-form-help"
    :class="{ 'pw-form-help-show': show }">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  show: Boolean
})
</script>
<style>
.pw-form-help {
  @apply h-0 !mb-5 overflow-hidden
}

.pw-form-help.pw-form-help-show {
  @apply h-5 !mb-0 transition-all duration-500
}
</style>
