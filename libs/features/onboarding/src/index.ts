import { setLocale } from 'yup'

setLocale({
  mixed:{
    required:'required'
  }
})

export { default as OnboardingFeature } from './lib/OnboardingFeature.vue'
