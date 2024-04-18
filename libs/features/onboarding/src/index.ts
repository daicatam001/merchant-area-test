import { setLocale } from 'yup'
import { ERROR_CODE } from '@pw-merchant-area/shared-constants'
setLocale({
  mixed: {
    required: { code: ERROR_CODE.REQUIRED }
  }
})

export { default as OnboardingFeature } from './lib/OnboardingFeature.ce.vue'
