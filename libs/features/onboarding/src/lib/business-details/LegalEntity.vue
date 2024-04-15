<template>
  <div>
    <h1>Legal entity</h1>
    <form @submit.prevent="onSubmit()">
      <div class="grid grid-cols-8">
        <div class="col-span-4">
          <PwInputText label="Name" name="name"></PwInputText>
        </div>
        <PwButton type="submit" label="submit"></PwButton>
        <button>Submit</button>
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
import { PwButton, PwInputText } from '@pw-merchant-area/shared-ui'
import { useLegalEntityForm } from '../composables'
const { values,...vm } = useLegalEntityForm();
const onSubmit = ()=>{
  console.log('submit')
  const invalid =  vm.onSubmit()
  console.log(invalid)
}
</script>
