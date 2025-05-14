class Header {
  selectors = {
    root: '[data-js-header]',
    overlay: '[data-js-header-overlay]',
    burgerButton: '[data-js-header-burger-button]',
  };

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.overlayElement = this.rootElement.querySelector(
      this.selectors.overlay
    );
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton
    );
    this.bindEvents();
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
    this.overlayElement.classList.toggle(this.stateClasses.isActive);
    document.documentElement.classList.toggle(this.stateClasses.isLock);
  };

  highlightActiveLink = () => {
    const links = this.rootElement.querySelectorAll('.header__menu-link');
    const currentPath = window.location.pathname;

    links.forEach(link => {
      const linkPath = new URL(link.href).pathname; // Просте порівняння шляхів

      if (linkPath === currentPath) {
        link.classList.add(this.stateClasses.isActive);
      } else {
        link.classList.remove(this.stateClasses.isActive);
      }
    });
  };

  bindEvents() {
    this.burgerButtonElement.addEventListener(
      'click',
      this.onBurgerButtonClick
    );

    this.highlightActiveLink();
  }
}

export default Header;
