<template>
  <Message class="pw-message"
  :class="`pw-message-${severity}`"
    :pt="message"
    v-bind="$attrs"
    :severity="severity">
    <div class="pw-message--title">{{ title }}</div>
    <div class="pw-message--description">
      <slot></slot>
    </div>
  </Message>
</template>
<style>
.pw-message--title{
  @apply mb-2
}
.pw-message-info .pw-message--title{
  @apply text-blue-500
}
.pw-message-success .pw-message--title{
  @apply text-green-500
}
.pw-message-warn .pw-message--title{
  @apply text-orange-500
}
.pw-message-error .pw-message--title{
  @apply text-red-500
}
</style>
<script lang="ts" setup>
import Message from 'primevue/message'
import type { HintedString } from 'primevue/ts-helpers';
import type { PropType } from 'vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: ''
  },
  severity: {
    typeof: String as PropType<HintedString<"error" | "success" | "secondary" | "info" | "contrast" | "warn">>,
    default: 'success'
  }
})

const message = {
  root: ({ props }) => ({
    class: [
      // Spacing and Shape
      'my-4 mx-0',
      'rounded-md',
      // 'border-solid border-0 border-l-[6px]',
      // Colors
      {
        'bg-blue-100/70 dark:bg-blue-500/20': props.severity == 'info',
        'bg-green-100/70 dark:bg-green-500/20': props.severity == 'success',
        'bg-orange-100/70 dark:bg-orange-500/20': props.severity == 'warn',
        'bg-red-100/70 dark:bg-red-500/20': props.severity == 'error'
      },
      {
        'border-blue-500 dark:border-blue-400': props.severity == 'info',
        'border-green-500 dark:border-green-400': props.severity == 'success',
        'border-orange-500 dark:border-orange-400': props.severity == 'warn',
        'border-red-500 dark:border-red-400': props.severity == 'error'
      },
    ]
  }),
  wrapper: {
    class: ['flex', 'py-5 px-7']
  },
  icon: ({ props }) => ({
    class: ['w-6 h-6', 'text-lg leading-none mr-3 shrink-0', {
      'text-blue-700 dark:text-blue-300': props.severity == 'info',
      'text-green-700 dark:text-green-300': props.severity == 'success',
      'text-orange-700 dark:text-orange-300': props.severity == 'warn',
      'text-red-700 dark:text-red-300': props.severity == 'error'
    }]
  }),
  text: {
    class: ['text-base leading-normal']
  },
  button: {
    class: ['flex items-center justify-center', 'w-8 h-8', 'ml-auto  relative', 'rounded-full', 'bg-transparent', 'transition duration-200 ease-in-out', 'hover:bg-surface-0/50 dark:hover:bg-surface-0/10', 'overflow-hidden']
  },
  transition: {
    enterFromClass: 'opacity-0',
    enterActiveClass: 'transition-opacity duration-300',
    leaveFromClass: 'max-h-40',
    leaveActiveClass: 'overflow-hidden transition-all duration-300 ease-in',
    leaveToClass: 'max-h-0 opacity-0 !m-0'
  }
}

</script>
