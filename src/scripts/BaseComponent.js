class BaseComponent {
  constructor() {
    if (this.constructor === BaseComponent) {
      throw new Error('Cannot instantiate abstract class BaseComponent!');
    }
  }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => target[prop],
      set: (target, prop, newValue) => {
        const oldValue = target[prop];

        target[prop] = newValue;

        if (newValue !== oldValue) {
          this.updateUI();
        }

        return true;
      },
    });
  }

  /**
   * Redraw the UI
   */
  updateUI() {
    throw new Error('You must implement the method updateUI!');
  }
}

export default BaseComponent;
