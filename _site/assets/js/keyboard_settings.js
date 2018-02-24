$(document).ready(function(){
  $(document).keyup(function(eventObject){
    console.log('document keyup');

    if(eventObject.keyCode==46){ // Canc in alto a dx
        $('.img-selected').remove();
    }

  });
});
