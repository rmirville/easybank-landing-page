const EasyBank = {
  init: function() {
    const navElem = document.querySelector('.header__nav');
  },

  loadHandler: function() {
    // check if the DOM is fully loaded
    if (document.readyState === 'complete') {
      
      // remove the listener, to make sure it isn't fired in the future
      document.detachEvent('onreadystatechange', loadHandler);
      
      // The actual handler...
      init();
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
