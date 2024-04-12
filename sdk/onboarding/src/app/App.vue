<script setup lang="ts">
import {OnboardingFeature} from '@pw-merchant-area/onboarding'
</script>

<template>
  <div class="bg-red-400 h-screen flex flex-col">
    <h1 class="text-center">Onboarding SDK</h1>
    <div class="flex gap-6">
      <div>User Token:dGhpcyBpcyBhbiB0b2tlbg== </div>
      <div>Mode: inline </div>
    </div>
    <p class="p-6 grow">
      <OnboardingFeature :user-token="'dGhpcyBpcyBhbiB0b2tlbg=='" />
    </p>
  </div>
</template>
