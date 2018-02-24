(function( $ ) {
	$.fn.editable = function(){
        console.log('editor component activated from ...');
        this.dblclick(function(eventObject){
          var target = $(eventObject.target);

          var textArea = document.createElement('textarea');

          $(textArea).html(target.html());
          $(textArea).addClass('editor-par');

          target.replaceWith(textArea);

        });

    return this;
	};

}( jQuery ));

(function( $ ) {
	$.fn.back = function(){
        console.log('hello');
        this.dblclick(function(eventObject){
          var target = $(eventObject.target);

          var textArea = document.createElement('textarea');

          $(textArea).html(target.html());
          $(textArea).addClass('editor-par');

          target.replaceWith(textArea);

        });

    return this;
	};

}( jQuery ));

$(document).ready(function(){
    $('p').editable();

    $('.menu-item').click(function(eventObject){
      // va bene ma ci vogliono regole per cose. sempre...
    });
});
