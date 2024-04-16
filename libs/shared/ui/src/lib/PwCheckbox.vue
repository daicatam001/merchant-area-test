<template>
  <div class="pw-checkbox">
    <div class="pw-checkbox-wrap">
      <Checkbox :pt="checkbox"
        @change="handleBlur"
        class="pw-checkbox--cmp"
        v-bind="$attrs"
        :input-id="name"
        v-model="checkboxValue"
        :invalid="hasError"
        :unstyled="true">
        <slot v-for="(_, name) in $slots"
          :name="name"
          :slot="name"></slot>
      </Checkbox>
      <label :for="name"
        v-if="!!label"
        class="pw-checkbox--label">{{ label }}</label>
    </div>
    <PwFormHelp :show="hasError"
      v-if="showHelp">
      <PwErrorMessage v-if="hasError"
        :error="errorMessage"
        :label="label" />
    </PwFormHelp>
  </div>
</template>
<style>
.pw-checkbox-wrap {
  @apply flex gap-2 items-center
}
</style>
<script lang="ts" setup>
import Checkbox from 'primevue/checkbox';
import PwErrorMessage from './PwErrorMessage.vue';
import PwFormHelp from './PwFormHelp.vue';
import { useField } from 'vee-validate'
import { computed } from 'vue';
const props = defineProps({
  name: {
    type: String,
    default: 'value',
  },
  label: {
    type: String,
  },
  showHelp: {
    type: Boolean,
    default: false
  }
});

const {
  value: checkboxValue,
  errorMessage,
  meta,
  handleBlur,
} = useField<string | number | null | undefined>(props.name);

const hasError = computed(() => !!errorMessage.value && meta.touched)

const checkbox = {
  root: {
    class: ['relative', 'inline-flex', 'align-bottom', 'w-5', 'h-5', 'cursor-pointer', 'select-none']
  },
  box: ({ props, context }) => ({
    class: [
      // Alignment
      'flex',
      'items-center',
      'justify-center',
      // Size
      'w-5',
      'h-5 ',
      // Shape
      'rounded-md',
      'border-2',
      // Colors
      {
        'border-surface-200 bg-surface-0 dark:border-surface-700 dark:bg-surface-900': !context.checked && !props.invalid,
        'border-primary bg-primary dark:border-primary-400 dark:bg-primary-400': context.checked
      },
      // Invalid State
      { 'border-red-500 dark:border-red-400': props.invalid },
      // States
      {
        'peer-hover:border-primary dark:peer-hover:border-primary-400': !props.disabled && !context.checked && !props.invalid,
        'peer-hover:bg-primary-600 dark:peer-hover:bg-primary-300 peer-hover:border-primary-700 dark:peer-hover:border-primary-300': !props.disabled && context.checked,
        'peer-focus-visible:border-primary dark:peer-focus-visible:border-primary-400 peer-focus-visible:ring-2 peer-focus-visible:ring-primary-400/20 dark:peer-focus-visible:ring-primary-300/20': !props.disabled,
        'cursor-default opacity-60': props.disabled
      },
      // Transitions
      'transition-colors',
      'duration-200'
    ]
  }),
  input: {
    class: ['peer', 'w-full ', 'h-full', 'absolute', 'top-0 left-0', 'z-10', 'p-0', 'm-0', 'opacity-0', 'rounded-md', 'outline-none', 'border-2 border-surface-200 dark:border-surface-700', 'appearance-none', 'cursor-pointer']
  },
  icon: {
    class: ['text-base leading-none', 'w-3', 'h-3', 'text-white dark:text-surface-900', 'transition-all', 'duration-200']
  }
}
</script>
