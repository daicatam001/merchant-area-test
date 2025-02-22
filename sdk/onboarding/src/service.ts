export interface IOnboardingSdkConfig {
  token: string;
  mode: 'modal' | 'inline';
}

export interface IOnboardingSdkHook {
  onMounted?: () => {};
}

class OnboardingSdkService {
  options = {
    token: '',
    mode: 'inline',
  };

  hooks = {
    onMounted: () => {},
  };

  constructor() {}

  init(options: IOnboardingSdkConfig, hooks: IOnboardingSdkHook = {}) {
    if (!options) {
      throw new Error('No config provided');
    }
    this.options = { ...this.options, ...options };
    this.hooks = { ...this.hooks, ...hooks };
  }
  get token() {
    return this.options.token;
  }

  get mode() {
    return this.options.mode;
  }
}

export default new OnboardingSdkService();
