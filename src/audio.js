(function () {
  'use strict';
  
  const $audioButtons = $('.audio-buttons');
  
  const sounds = [
    'WinLoop_01.mp4',
    'WinLoop_02.mp4',
    'WinLoop_03.mp4',
    'WinLoop_04.mp4',
    'WinLoop_05.mp4',
    'sltWinRollup1.mp4',
    'sltWinRollup2.mp4',
    'sltWinRollup3.mp4'    
  ];

  const context = new AudioContext();

  let currentSource;


  
  function play(audioBuffer) {
    if (currentSource) {
      currentSource.stop();
    }
    currentSource = context.createBufferSource();
    currentSource.buffer = audioBuffer;
    currentSource.connect(context.destination);
    currentSource.loop = true;
    currentSource.start();
  }

  function stopCurrent() {
    if (currentSource) {
      currentSource.stop();
      currentSource = null;
    }
  }
  
  
  function addAudioButton(audioName) {
    const $playButton = $('<button/>')
      .text(audioName)
      .appendTo($audioButtons);

    const url = 'audio/' + audioName;      
    window.fetch(url)
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
      .then(audioBuffer => $playButton.click(() => play(audioBuffer)));
  }
  
  sounds.forEach(s => addAudioButton(s));

  $('<button/>')
    .text('Stop')
    .click(stopCurrent)
    .appendTo($audioButtons);
}());