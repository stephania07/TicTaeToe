;(function(){
  'use strict';

// global variables
var count = 0;
var turn ='player1';
var board = [['', '', ''],['', '', ''],['', '', '']];

$('td').click(function(){
  if(!($(this).hasClass('moveX')) && !($(this).hasClass('moveO'))) {
    playerTurn($(this)); 
    boardStatus();
    updatedBoard(board);
  }
});

function playerTurn(activeCell){
    if(turn === 'player1') {
       $(activeCell).addClass('moveX');
       turn = 'player2';
    }else if(turn === 'player2'){
       $(activeCell).addClass('moveO');
       turn = 'player1';
    } 
}

function boardStatus(){
	var newBoard = [];
	$('.grid tr').each(function(){
		var $row = $(this);
		var newRow = [];
	    $row.find('td').each(function(){
          var $cell = $(this);
          if($cell.hasClass('moveX')){
            newRow.push('X');  
          }else if($cell.hasClass('moveO')){
            newRow.push('O');
          }else{
            newRow.push('');
          }
		});
		newBoard.push(newRow);
	});
	board = newBoard;
}

function updatedBoard(updatedBoard){
//looping thru 
  $('.grid tr').each(function(){
	  var $newRow = $(this);
		  $newRow.find('td').each(function(){
			  var $cell = $(this);
				if($cell === 'X' || $cell === 'O'){
				 // $(updatedBoard)
				}

			});
	});
} 
})();


	

