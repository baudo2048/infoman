/**
  This component creates a table of content from an xpath function.
*/
(function( $, store ) {
	$.fn.document_content = function(){
    console.log('document_content component activated');
  	this.each(function(index, element) {
      store.document_content.push(element.innerHTML);
    });
    return this;
	};
}( jQuery, S ));

// COMPONENT CONFIGURATION
$(document).ready(function(){
	var h1 = $('p > strong');
	h1.document_content();
});
