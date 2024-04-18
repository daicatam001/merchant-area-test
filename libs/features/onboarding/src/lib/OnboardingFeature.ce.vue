<script setup
  lang="ts">
  import DefaultLayout from './DefaultLayout.vue'
  import ProgressBar from './ProgressBar.vue'
  import MainContent from './MainContent.vue'
  defineProps({
    userToken: {
      type: String,
      required: true
    }
  })
</script>
<template>
  <DefaultLayout class="ob-feature">
    <template #progressbar>
      <ProgressBar />
    </template>
    <MainContent/>
  </DefaultLayout>
</template>
<style>
.ob-feature{
  @apply bg-red-500
}
</style>
