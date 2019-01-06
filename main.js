(function() {
  'use strict';
  
  var board = document.getElementById('board');
  
  var panel;
  panel = document.createElement('div');
  panel.className = 'panel';
  panel.textContent = 0;
  board.appendChild(panel);
})();