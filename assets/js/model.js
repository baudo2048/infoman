var S = {};
S.document_content = [];
S.post_links = [];
S.post_pars = [];
S.post_imgs = [];

S.current_post = {};

S.current_post.par_index = -1;  // que que que que - stessa cosa di uxx (bindingsss variables no buono)

S.home_clicked = false;
S.doc_list = [];

S.time = 0;

var M = (function(){
  var clock = new Event('clock');
  var newDoc = new Event('newDoc');

  function M(){
    this.time=0;
    this.currDoc = [];
    document.dispatchEvent(clock);
  }

  M.prototype.setTime = function(time){
    this.time = time;
    document.dispatchEvent(clock);
  };

  M.prototype.getTime = function(){
    return this.time;
  };

  M.prototype.addDoc = function(doc){
    this.currDoc.push(doc);
    document.dispatchEvent(newDoc);
  }

  M.prototype.getCurrDocLen = function(){
    return this.currDoc.length;
  }

  M.prototype.getCurrDoc = function(){
    return this.currDoc;
  }

  return M;
}());

var model = new M();
