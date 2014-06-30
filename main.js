$(document).on('ready', function() {
	$( document ).on( 'click', '#map', function(event) {
	// $('#map').append('<div class="buttons"></div>');
   		var note=prompt('Would you like to add a note?');
   		var style={
   			left: event.pageX, 
   			top: event.pageY,
   			};
   		//$('.button').css(style)
		$('#map').after($('<div class="button"></div>').css(style).text(note).css('color','transparent'))
	});
	$(document).on('click','.button',function(event){
		$(this).hide();
	});
	$(document).on('mouseover','.button',function(event){
		var style={
			padding:'20px',
			color:'black'
		}
		$(this).css(style)
	})
	$(document).on('mouseout','.button',function(event){
		var style={
			color:'transparent',
			}
		$(this).css(style)
	})
});