(function() {
  'use strict';
  
  
  var SIZE = 2;
//  var SIZE = 3;
  var currentNum = 0;
  var PANEL_WIDTH = 50;
  var BOARD_PADDING = 10;
  
  
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
  
  function initBoard() {
    var board = document.getElementById('board');
    var i;
    var panels = [];
    var panel;
    
    document.getElementById('container').style.width = PANEL_WIDTH * SIZE + BOARD_PADDING * 2 + 'px';
    
    
    while (board.firstChild) {
      board.removeChild(board.firstChild);
    }
    
    for (i = 0; i < SIZE * SIZE; i++) {
    // board.appendChild(createPanel(i));
    panels.push(createPanel(i));
  }
  
  while (panels.length) {
    panel = panels.splice(Math.floor(Math.random() * panels.length), 1);
    board.appendChild(panel[0]);
  }
} 
   initBoard();
  
  
  document.getElementById('btn').addEventListener('click', function() {
    var panels = document.getElementsByClassName('panel');
    var i;
    initBoard();
    for (i = 0; i < panels.length; i++) {
      panels[i].className = 'panel';
    }
    this.textContent = 'RESTART?';
    this.className = 'restart';
  });
})();