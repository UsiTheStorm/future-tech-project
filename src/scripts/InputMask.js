import IMask from 'imask';

const rootSelector = '[data-js-input-mask]';

class InputMask {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.init();
  }

  init() {
    IMask(this.rootElement, {
      mask: this.rootElement.dataset.jsInputMask,
    });
  }
}

class InputMaskCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach(element => {
      new InputMask(element);
    });
  }
}

export default InputMaskCollection;
