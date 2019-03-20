(function () {
  'use strict';

  const URL = 'https://benholio.github.io/instantplay.html';
  const delay = 5000;
  const debugDiv = document.getElementById('debug');

  function logToPage(msg) {
    let logEntry = document.createElement('p');
    logEntry.className = 'log-entry';
    logEntry.innerHTML = msg;
    debugDiv.appendChild(logEntry);
  }

  function openPopup() {
    window.console.log('will try to open popup in 5 seconds');
    monitorNewWindow();
    
    window.setTimeout(() => {
      window.console.log('trying to open popup via script');
      logToPage('trying to open popup via script...');
      window.newWindow = window.open(URL, '', 'resizable=1');
      console.log('window.netWindow value right after opening: ' + window.newWindow);
      logToPage('window.netWindow value right after opening: ' + window.newWindow);
    }, delay);
  }

  function monitorNewWindow() {
    let previousValue = 'xxx';
    window.monitorInterval = window.setInterval(()=>{
      if (previousValue !== window.newWindow) {
        console.log('newWindow value changed: ' + window.newWindow);
        previousValue = window.newWindow;
      }
    }, 33);
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
