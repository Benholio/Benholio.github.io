(function () {
  'use strict';
  
  function documentReady() {
    const allFiveyTexts = document.querySelectorAll('.fivey-text');
    const textArea = document.querySelector('textarea');
    textArea.oninput = updateText;
    textArea.focus();

    function updateText(e) {
      allFiveyTexts.forEach(function(fiveyText) {
        if (e.target.value.length === 0 ) {
          fiveyText.textContent = 'type some text';
        } else {
          fiveyText.textContent = e.target.value;
        }
      })
    }

  }
  
  if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', documentReady);
  } else {
    documentReady();
  }
}());
