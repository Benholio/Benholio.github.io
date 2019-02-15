(function () {
  'use strict';
  
  function documentReady() {
    let meta = document.createElement('meta'); 
    meta.name = 'description'; 
    meta.content = 'This page is intended to test Google indexing of dynamically added meta descriptions.'; 
    document.head.insertBefore(meta, document.head.firstElementChild);
  }
  
  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', documentReady);
  } else {
    documentReady();
  }
}());