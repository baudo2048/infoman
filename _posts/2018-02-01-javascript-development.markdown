---
layout: post
title:  "Javascript Development"
date:   2018-02-01 00:00:00 +0100
categories:
---
Installa JQuery.

![on-blur]({{"/assets/img/on-blur.png"|absolute_uri}})



// prevent back on keyboard
    document.onkeydown = function (event) {
      if (!event) { / This will happen in IE /
        event = window.event
      }

      var keyCode = event.keyCode

      if (keyCode == 8 && ((event.target || event.srcElement).tagName != 'TEXTAREA') && ((event.target || event.srcElement).tagName != 'INPUT')) {
        if (navigator.userAgent.toLowerCase().indexOf('msie') == -1) {
          event.stopPropagation()
        } else {
          event.returnValue = false
        }
        return false
      }
    }


{% highlight Javascript %}
(function(){
 // some code…
})();
{% endhighlight %}
