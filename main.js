(function() {
  'use strict';
  
  var board = document.getElementById('board');
  
  var SIZE = 3;
  var i;
  var currentNum = 0;
  var panels = [];
  var panel;
  
  function createPanel(num) {
    var panel;
    panel = document.createElement('div');
    panel.className = 'panel hidden';
    panel.textContent = num;
    panel.addEventListener('click', function() {
      if ((this.textContent - 0) === currentNum) {
        this.className = 'panel flipped';
        currentNum++;
      }
    });
    return panel;
  }
  
  
  
  for (i = 0; i < SIZE * SIZE; i++) {
    // board.appendChild(createPanel(i));
    panels.push(createPanel(i));
  }
  
  while (panels.length) {
    panel = panels.splice(Math.floor(Math.random() * panels.length), 1);
    board.appendChild(panel[0]);
  }
  
  document.getElementById('btn').addEventListener('click', function() {
    var panels = document.getElementsByClassName('panel');
    var i;
    for (i = 0; i < panels.length; i++) {
      panels[i].className = 'panel';
    }
  });
})();