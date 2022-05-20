const EasyBank = {
  init: function() {
    const navOpenElem = document.querySelector('.jsHeader__navOpen');
    const navCloseElem = document.querySelector('.jsHeader__navClose');
    const menuElem = document.querySelector('.jsHeaderNarrow__modal');
    navOpenElem.addEventListener('click', () => {
      navOpenElem.classList.remove('header__nav-icon-ctx--active');
      navOpenElem.classList.add('header__nav-icon-ctx--inactive');

      navCloseElem.classList.remove('header__nav-icon-ctx--inactive');
      navCloseElem.classList.add('header__nav-icon-ctx--active');
      menuElem.classList.add('header-narrow__modal--active');
    });
    navCloseElem.addEventListener('click', () => {
      navCloseElem.classList.remove('header__nav-icon-ctx--active');
      navCloseElem.classList.add('header__nav-icon-ctx--inactive');

      navOpenElem.classList.remove('header__nav-icon-ctx--inactive');
      navOpenElem.classList.add('header__nav-icon-ctx--active');
      menuElem.classList.remove('header-narrow__modal--active');
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
