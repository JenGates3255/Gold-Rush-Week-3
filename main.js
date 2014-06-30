$(document).on('ready', function() {
	
	$( '#map' ).on( 'click', function(event) {
  		$("#map").before("pageX: " + event.pageX + ",pageY: " + event.pageY);
   		// $('#map').append('<div class="buttons"></div>');




   		console.log(event.pageX, event.pageY)



	});





  
});