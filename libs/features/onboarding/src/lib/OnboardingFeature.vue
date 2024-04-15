<script setup
  lang="ts">
  import { PwButton } from '@pw-merchant-area/shared-ui';
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
  <DefaultLayout>
    <template #progressbar>
      <ProgressBar />
    </template>
    <MainContent/>
  </DefaultLayout>
</template>
