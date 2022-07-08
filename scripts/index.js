const AppMenu = {
	css: {
		class: {
			animx: '-animating',
		}
	},
	elem: function(selector, active, inactive, duration = 0) {
		const el = document.querySelector(selector);
		const setActiveState = (start, end) => {
			if (el) {
				el.classList.add(end + this.css.class.animx);
				el.classList.remove(start);
				el.classList.add(end);
				setTimeout(() => {
					el.classList.remove(end + this.css.class.animx);
				}, duration);
			}
		}
		const activate = () => setActiveState(inactive, active);
		const deactivate = () => setActiveState(active, inactive);
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
		const navOpen = this.elem('.jsHeader__navOpen', navIcon.active, navIcon.inactive );
		const navClose = this.elem('.jsHeader__navClose', navIcon.active, navIcon.inactive );
		const menu = this.elem('.jsHeaderNarrow__modal', 'jsHeaderNarrow__modal--active', 'jsHeaderNarrow__modal--inactive', 600 );
    navOpen.el.addEventListener('click', () => {
      navOpen.deactivate();
      navClose.activate();
      menu.activate();
    });
    navClose.el.addEventListener('click', () => {
      navClose.deactivate();
      navOpen.activate();
      menu.deactivate();
    });
  },

  loadHandler: function() {
    // check if the DOM is fully loaded
    if (document.readyState === 'complete') {

      // remove the listener, to make sure it isn't fired in the future
      document.detachEvent('onreadystatechange', this.loadHandler);
    }

		// The actual handler...
		this.init();
  }
};

// for IE <= 8
if (document.hasOwnProperty('attachEvent')) {
  if (document.readyState === 'loading') {
    document.attachEvent('onreadystatechange', AppMenu.loadHandler);
  }
  else {
    AppMenu.init();
  }
}

// for modern browsers
else {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', AppMenu.init);
  }
  else {  // `DOMContentLoaded` already fired
    AppMenu.init();
  }
}
