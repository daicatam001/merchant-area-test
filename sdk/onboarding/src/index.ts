import { defineCustomElement } from 'vue';
import OnboardingSdk from './OnboardingSdk.ce.vue';
import onboardingSdkService, { type IOnboardingSdkConfig } from './service';
window.customElements.define(
  'onboarding-sdk',
  defineCustomElement(OnboardingSdk)
);
const Onboarding = (options: IOnboardingSdkConfig) => {
  onboardingSdkService.init(options);
  const mount = (element: string) => {
    const sdkButton = document.createElement('onboarding-sdk');
    const holder = document.querySelector(element);
    if (!holder) {
      throw new Error('Can not find element ' + element);
    }
    holder.innerHTML = '';
    holder.append(sdkButton);
  };
  return {
    mount,
  };
};

(() => {
  const _window = window as any;
  if (_window.PW) {
    _window.PW.Onboarding = Onboarding;
  } else {
    _window.PW = {
      Onboarding,
    };
  }
})();
