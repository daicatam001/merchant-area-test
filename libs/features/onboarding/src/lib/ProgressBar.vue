<template>
  <div class="progress-bar">
    <div class="progress-bar__item progress-bar__item-active">
      <div class="progress-bar__item-numb">1</div>
      <div class="progress-bar__item-title">Business details</div>
    </div>
    <div class="progress-bar__item">
      <div class="progress-bar__item-numb">2</div>
      <div class="progress-bar__item-title">Project details</div>
    </div>
  </div>
</template>
<script lang="ts"
  setup>

</script>
<style lang="scss">
.progress-bar {
  @apply space-y-3;

  &__item {
    @apply flex gap-2 text-[#788AA2] items-center;

  }

  &__item-numb {
    @apply w-5 h-5 rounded-full border border-[#788AA2] grid place-content-center font-medium text-xs;
  }

  &__item-active {
    @apply text-black font-medium;


  }

  &__item-active &__item-numb {
    @apply border-black border-2
  }


}
</style>
