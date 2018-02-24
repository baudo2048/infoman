document.body.onresize = function(){
  model.setClientWidth(document.body.clientWidth);
  console.log('document.onresize ' + model.getClientWidth());
};
