$(document).ready(function(){
  $('img').click(function(eventObject){
    console.log('img clicked');
    $(this).toggleClass('img-selected');
  });

  $('.search-box').click(function(eventObject){
    console.log('mouse_settings test for clipboarddata');
    window.clipboardData.getData('Text')
  });
});
