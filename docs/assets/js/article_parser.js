/**
  This component creates a table of content from an xpath function.
*/
(function( $, store ) {
	$.fn.article_parser = function(){
    console.log('article_parser component activated');

		var title = $('header > h1.post-title');

		title.click(function(eventObject){
			console.log('title is ' + eventObject.target.innerHTML);
			//FACCIO SPARIRE IL TITOLO E ALIMENTO LA SEARCH BAR?
			title.hide({
				duration: 800,
				complete: function(){
					$('.search-box').val(eventObject.target.innerHTML);
					$('.post-content').show({duration: 800});//[store.current_post.par_index++].show();
				}
			});

			// FACCIO APPARIRE IL PARAGRAFO ENNESIMO

		});

    return this;
	};
}( jQuery, S ));

// COMPONENT CONFIGURATION
$(document).ready(function(){
	var articles = $('article');
	articles.article_parser();

	$('.post-content').hide();
});
