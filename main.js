(function() {
  'use strict';
  
  var board = document.getElementById('board');
  
  var SIZE = 3;
  var i;
  
  function createPanel(num) {
    var panel;
    panel = document.createElement('div');
    panel.className = 'panel';
    panel.textContent = num;
    return panel;
  }
  
  for (i = 0; i < SIZE * SIZE; i++) {
    board.appendChild(createPanel(i));
  }
})();