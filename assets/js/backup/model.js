<script>
var M = (function(){
  //CUSTOM EVENTS EMITTER
  var clock = new Event('clock');
  var newDoc = new Event('newDoc');
  var screenSizeChanged = new Event('screenSizeChanged');

  function M(){
    this.time=0;
    document.dispatchEvent(clock);

    this.currDoc = [];
    this.screenWidth = 100;//document.body.clientWidth;
    this.screenHeight = 100;//document.body.clientHeight;
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;

    window.addEventListener('resize', this.onResize);



  }

  M.prototype.setTime = (time) =>
  {
    this.time = time;
    document.dispatchEvent(clock);
  };

  M.prototype.getTime = () =>
  {
    return this.time;
  };

  M.prototype.addDoc = (doc) =>
  {
    this.currDoc.push(doc);
    document.dispatchEvent(newDoc);
  }

  M.prototype.getCurrDocLen = () =>
  {
    return this.currDoc.length;
  }

  M.prototype.getCurrDoc = () =>
  {
    return this.currDoc;
  }

  M.prototype.getScreenWidth = () =>
  {
    return this.screenWidth;
  }

  M.prototype.setScreenWidth = (screenWidth) =>
  {
    this.screenWidth = screenWidth;
    document.dispatchEvent(screenSizeChanged);
  }

  M.prototype.getScreenHeight = () =>
  {
    return this.screenHeight;
  }

  M.prototype.setScreenHeight = (screenHeight) =>
  {
    this.screenHeight = screenHeight;
    document.dispatchEvent(screenSizeChanged);
  }

  M.prototype.getWindowWidth = () =>
  {
    return this.windowWidth;
  }

  M.prototype.setWindowWidth = (windowWidth) =>
  {
    this.screenWidth = windowWidth;
    document.dispatchEvent(screenSizeChanged);
  }

  M.prototype.getWindowHeight = () =>
  {
    return this.windowHeight;
  }

  M.prototype.setWindowHeight = (windowHeight) =>
  {
    this.windowHeight = windowHeight;
    document.dispatchEvent(screenSizeChanged);
  }



  M.prototype.onResize = () =>
  {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;

    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;

    document.dispatchEvent(screenSizeChanged);
  }

  return M;
}());
</script>

<script>
var model = new M();
</script>
