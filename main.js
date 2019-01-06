(function() {
  'use strict';
  
  var board = document.getElementById('board');
  
  var SIZE = 3;
  var i;
  var currentNum = 0;
  
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
    board.appendChild(createPanel(i));
  }
})();