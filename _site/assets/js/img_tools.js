/**
  This component creates a table of content from an xpath function.
*/
(function( $, store ) {
	$.fn.img_tools = function(){
    console.log('img_tools component activated');
  	this.each(function(index, element) {
			console.log('img found');
			//$(element).draggable();
  	});
    return this;
	};
}( jQuery, S ));

// COMPONENT CONFIGURATION
$(document).ready(function(){
	var img = $('img');
	img.img_tools();


	$('*').change(function(){
		console.log('dom changed');
	});
});
