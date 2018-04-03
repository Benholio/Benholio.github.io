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
  
  function play(audioBuffer) {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    source.loop = true;
    source.start();
  }
  
  
  function addAudioButton(audioName) {
    const url = 'audio/' + audioName;
    const $playButton = $('<button/>')
      .text(audioName)
      .appendTo($audioButtons);
      
    let buffer;
    window.fetch(url)
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
      .then(audioBuffer => {
        playButton.prop('disabled', false);
        $playButton.click(() => play(audioBuffer));
      });
  }
  
  sounds.forEach(s => addAudioButton(s));
}());