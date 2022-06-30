const EasyBank = {
	elem: function(selector, active, inactive) {
		const el = document.querySelector(selector);
		const activate = () => {
			if (el) {
				el.classList.remove(inactive);
				el.classList.add(active);
			}
		};
		const deactivate = () => {
			if (el) {
				el.classList.remove(active);
				el.classList.add(inactive);
			}
		};
		return {
			el,
			activate,
			deactivate,
		};
	},
  init: function() {
		const navIcon = {
			active: 'header__nav-icon-ctx--active',
			inactive: 'header__nav-icon-ctx--inactive',
		};
		const navOpen = this.elem('.jsHeader__navOpen', navIcon.active, navIcon.inactive);
		const navClose = this.elem('.jsHeader__navClose', navIcon.active, navIcon.inactive);
		const menu = this.elem('.jsHeaderNarrow__modal', 'jsHeaderNarrow__modal--active', 'jsHeaderNarrow__modal--inactive');
		const overlay = this.elem('.jsHeader__overlay', 'jsHeader__overlay--active', 'jsHeader__overlay--inactive');
    navOpen.el.addEventListener('click', () => {
      navOpen.deactivate();
      navClose.activate();

			overlay.activate();
      menu.activate();
    });
    navClose.el.addEventListener('click', () => {
      navClose.deactivate();
      navOpen.activate();

      menu.deactivate();
			overlay.deactivate();
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
