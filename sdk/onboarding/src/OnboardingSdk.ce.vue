<script lang="ts" setup>
import { OnboardingFeature } from '@pw-merchant-area/onboarding'

import onboardingSdkService from './service'


</script>
<template>
  <div class="bg-red-400 h-screen flex flex-col"
    :class="{ 'fixed inset-0 w-full h-full z-100': onboardingSdkService.mode === 'modal' }">
    <h1 class="text-center">Onboarding SDK</h1>
    <div class="flex gap-6">
      <div>User Token:{{ onboardingSdkService.token }} </div>
      <div>Mode:{{ onboardingSdkService.mode }} </div>
    </div>
    <p class="p-6 grow">
      <OnboardingFeature />
    </p>
  </div>
</template>
<style>
@import url('./styles.css');
</style>
