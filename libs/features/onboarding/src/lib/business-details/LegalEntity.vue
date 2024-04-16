<template>
  <PwVerticalLayout>
    <template #header>
      <h1>Business profile</h1>
    </template>
    <form @submit.prevent="onSubmit()"
      id="business-profile-form">
      <h3>Legal entity information</h3>
      <div class="grid grid-cols-8 gap-x-6 gap-y-2">
        <div v-for="item of entityInfo"
          :key="item.attrs.name"
          :class="item.class">
          <component :is="item.component"
            v-bind="item.attrs" />
        </div>
      </div>
      <h3>Legal entity business address</h3>
      <div class="grid grid-cols-8 gap-x-6 gap-y-2">
        <div v-for="item of addressInfo"
          :key="item.attrs.name"
          :class="item.class">
          <component :is="item.component"
            v-bind="item.attrs" />
        </div>
      </div>
    </form>
    <template #footer>
      <div class="grid grid-cols-2 gap-6 mt-6">
        <PwButton type="submit"
          class="col-start-2"
          label="Save and Continue"
          form="business-profile-form"></PwButton>
      </div>
    </template>
  </PwVerticalLayout>
</template>
<script setup lang="ts">
import { PwButton, PwInputText, PwDropdown, PwVerticalLayout } from '@pw-merchant-area/shared-ui'
import { useLegalEntityForm } from '../composables'
const { values, ...vm } = useLegalEntityForm();
const entityInfo = [
  {
    class: 'col-span-4',
    attrs: {
      label: "Name", name: "dp_company_name",
    },
    component: PwInputText
  },
  {
    class: 'col-span-2',
    attrs: {
      label: "Registration Number", name: "dp_reg_number",
    },
    component: PwInputText
  },
  {
    class: 'col-span-2',
    attrs: {
      label: "Tax Identification Number", name: "dp_tax_id",
    },
    component: PwInputText
  }
]
const addressInfo = [
  {
    class: 'col-span-4',
    attrs: {
      label: "Country", name: "dp_co_id",
    },
    component: PwDropdown
  },
  {
    class: 'col-span-4',
    attrs: {
      label: "Address", name: "dp_street",
    },
    component: PwInputText
  },
  {
    class: 'col-span-4',
    attrs: {
      label: "City", name: "dp_city",
    },
    component: PwInputText
  },
  {
    class: 'col-span-2',
    attrs: {
      label: "State", name: "dp_state",
    },
    component: PwInputText
  }, {
    class: 'col-span-2',
    attrs: {
      label: "Zip code", name: "dp_zip_code",
    },
    component: PwInputText
  }


]
const onSubmit = () => {
  console.log('submit')
  const invalid = vm.onSubmit()
  console.log(invalid)
}
</script>
