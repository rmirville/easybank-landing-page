const EasyBank = {
  init: function() {
		const navIcon = {
			active: 'header__nav-icon-ctx--active',
			inactive: 'header__nav-icon-ctx--inactive',
		};
		const navOpen = {
			selector: '.jsHeader__navOpen',
			elem: null,
		};
		const navClose = {
			selector: '.jsHeader__navClose',
			elem: null,
		};
		const menu = {
			selector: '.jsHeaderNarrow__modal',
			elem: null,
		};
		const overlay = {
			selector: '.jsHeader__overlay',
			elem: null,
		};
    navOpen.elem = document.querySelector(navOpen.selector);
    navClose.elem = document.querySelector(navClose.selector);
    menu.elem = document.querySelector(menu.selector);
		overlay.elem = document.querySelector(overlay.selector);
    navOpen.elem.addEventListener('click', () => {
      navOpen.elem.classList.remove(navIcon.active);
      navOpen.elem.classList.add(navIcon.inactive);

      navClose.elem.classList.remove(navIcon.inactive);
      navClose.elem.classList.add(navIcon.active);

      menu.elem.classList.add('header-narrow__modal--active');
			overlay.elem.classList.add('header__overlay--active');
    });
    navClose.elem.addEventListener('click', () => {
      navClose.elem.classList.remove(navIcon.active);
      navClose.elem.classList.add(navIcon.inactive);

      navOpen.elem.classList.remove(navIcon.inactive);
      navOpen.elem.classList.add(navIcon.active);

      menu.elem.classList.remove('header-narrow__modal--active');
			menu.elem.classList.add('header-narrow__modal--inactive');
			overlay.elem.classList.remove('header__overlay--active');
			overlay.elem.classList.add('header__overlay--inactive');
    });
  },

  loadHandler: function() {
    // check if the DOM is fully loaded
    if (document.readyState === 'complete') {

      // remove the listener, to make sure it isn't fired in the future
      document.detachEvent('onreadystatechange', this.loadHandler);

      // The actual handler...
      this.init();
    }
  }
};

// for IE <= 8
if (document.hasOwnProperty('attachEvent')) {
  if (document.readyState === 'loading') {
    document.attachEvent('onreadystatechange', EasyBank.loadHandler);
  }
  else {
    EasyBank.init();
  }
}

// for modern browsers
else {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', EasyBank.init);
  }
  else {  // `DOMContentLoaded` already fired
    EasyBank.init();
  }
}
