<script lang="ts" setup>
import { OnboardingFeature } from '@pw-merchant-area/onboarding'
</script>
<template>
  <div class="bg-red-400 h-screen flex flex-col">
    <h1 class="text-center">Onboarding SDK</h1>
    <p class="p-6 grow">
      <OnboardingFeature />
    </p>
  </div>
</template>
<style>
@import url('./styles.css');
</style>
