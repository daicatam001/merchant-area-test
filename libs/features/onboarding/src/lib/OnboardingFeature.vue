<script setup
  lang="ts">
  defineProps({
    userToken: {
      type: String,
      required: true
    }
  })
</script>
<template>
  <div class="bg-blue-300 h-full">
    <h1 class="text-center">New Onboarding Flow</h1>
     <p class="text-center">UserToken: {{ userToken }}</p>
  </div>
</template>
