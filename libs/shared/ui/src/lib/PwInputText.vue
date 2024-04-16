<template>
  <div class="pw-textfield">
    <label :for="name"
      v-if="!!label"
      class="pw-textfield--label">{{ label }}</label>
    <InputText :pt="inputtext"
      @change="handleBlur"
      class="pw-textfield--cmp"
      v-bind="$attrs"
      v-model.lazy="inputValue"
      :invalid="hasError"
      :unstyled="true">
      <slot v-for="(_, name) in $slots"
        :name="name"
        :slot="name"></slot>
    </InputText>
    <PwFormHelp :show="hasError">
      <PwErrorMessage v-if="hasError"
        :error="errorMessage"
        :label="label" />
    </PwFormHelp>
  </div>
</template>
<style>
.pw-textfield--label {
  @apply block font-medium mb-2
}

.pw-textfield--cmp {
  @apply w-full
}
</style>
<script lang="ts" setup>
import InputText from 'primevue/inputtext';
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
  }
});

const {
  value: inputValue,
  errorMessage,
  meta,
  handleBlur,
} = useField<string | number | null | undefined>(props.name);

const hasError = computed(() => !!errorMessage.value && meta.touched)

const inputtext = {
  root: ({ props, context, parent }) => {
    var _a;
    return {
      class: [
        // Font
        'font-sans leading-none',
        // Flex
        { 'flex-1 w-[1%]': parent.instance.$name == 'InputGroup' },
        // Spacing
        'm-0',
        {
          'px-4 py-4': props.size == 'large',
          'px-2 py-2': props.size == 'small',
          'p-3': props.size == null
        },
        // Shape
        { 'rounded-md': parent.instance.$name !== 'InputGroup' },
        { 'first:rounded-l-md rounded-none last:rounded-r-md': parent.instance.$name == 'InputGroup' },
        { 'border-0 border-y border-l last:border-r': parent.instance.$name == 'InputGroup' },
        { 'first:ml-0 -ml-px': parent.instance.$name == 'InputGroup' && !props.showButtons },
        // Colors
        'text-surface-600 dark:text-surface-200',
        'placeholder:text-surface-400 dark:placeholder:text-surface-500',
        'bg-surface-0 dark:bg-surface-900',
        'border border-input-border',
        { 'border-surface-300 dark:border-surface-600': !props.invalid },
        // Invalid State
        { 'border-red-500 dark:border-red-400': props.invalid },
        // States
        {
          'hover:border-primary-500 dark:hover:border-primary-400': !context.disabled && !props.invalid,
          'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-primary-500/50 dark:focus:ring-primary-400/50 focus:z-10': !context.disabled,
          'opacity-60 select-none pointer-events-none cursor-default': context.disabled
        },
        // Filled State *for FloatLabel
        { filled: ((_a = parent.instance) == null ? void 0 : _a.$name) == 'FloatLabel' && context.filled },
        // Misc
        'appearance-none',
        'transition-colors duration-200'
      ]
    };
  }
}
</script>
