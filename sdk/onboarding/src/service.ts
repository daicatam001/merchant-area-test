export interface IOnboardingSdkConfig {
  token: string
  mode: 'modal' | 'inline'
}

export interface IOnboardingSdkHook {
  onMounted?: () => {

  }
}

class OnboardingSdkService {
  options = {
    token: '',
    mode: 'inline'
  }

  hooks = {
    onMounted: () => { }
  }

  constructor() {
  }

  init(options: IOnboardingSdkConfig, hooks: IOnboardingSdkHook = {}) {
    if (!options) {
      throw new Error("No config provided");
    }
    this.options = { ...this.options, ...options }
    this.hooks = { ...this.hooks, ...hooks }
  }
}

export default new OnboardingSdkService();
