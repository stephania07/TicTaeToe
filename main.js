;(function(){
//global variables
var currentpiece;

//make DOM ready
$(document).ready(function(){
  
});

$('li').draggable({
  snap: 'td',
  containment: 'table',
	strat: function(event, ui){
	currentpiece = $(this);
	}			
});

})();
