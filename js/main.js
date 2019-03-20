(function () {
  'use strict';
  
  function openPopup() {
    window.console.log('will try to open popup in 5 seconds');
    const URL = 'https://benholio.github.io/instantplay.html';
    window.setTimeout(() => {
      window.console.log('trying to open popup via script');
      let newWindow = window.open(URL, '', 'resizable=1');
    }, 5000);
  } 
  
  function documentReady() {
    let meta = document.createElement('meta'); 
    meta.name = 'description'; 
    meta.content = 'This page is intended to test Google indexing of dynamically added meta descriptions.'; 
    document.head.insertBefore(meta, document.head.firstElementChild);
    openPopup();
  }
  
  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', documentReady);
  } else {
    documentReady();
  }
}());
