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

  function debugLog(msg) {
    window.console.log(msg);
    logToPage(msg);
  }

  function openPopup() {
    debugLog('will try to open popup in ' + delay + ' milliseconds...');
    monitorNewWindow();
    
    window.setTimeout(() => {
      debugLog('trying to open popup...');
      window.newWindow = window.open(URL, '', 'resizable=1');
      console.log('window.netWindow value right after opening: ' + window.newWindow);
      logToPage('window.open returned: ' + window.newWindow);
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
