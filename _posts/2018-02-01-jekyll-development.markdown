---
layout: post
title:  "Jekyll Development"
date:   2018-02-01 00:00:00 +0100
categories: documentation blog
---
**Jekyll Philosophy**  
If you embrace jekyll you need to embrace its Philosophy. For a general
framework see more with Ruby programming language.

But do not be afraid to be wrong, get into and start typing. With jekyll
you will learn best practices of html/css/js/content programming. With jekyll
you will learn how to customize every aspect of your web page. Just start
installing it.

[Faster Jekyll Website][faster-jekyll]

**How to comments?**
[ / / ] : # (This may be the most platform independent comment)

**Usefule commands**
{% highlight bash %}
jekyll build
bundle exec jekyll serve

jekyll build --destination <destination>
jekyll build --source <source> --destination <destination>
jekyll build --watch
{%endhighlight%}

**LINKS**


**IMAGES**
Usa questo per vedere l'immagine sulla pagina
![My helpful screenshot]({{ "/assets/img/strutturaEclipseWorkbench1.png" | absolute_url }})

Usa questo per vedere il link che ti fa scaricare o leggere il pdf
[My helpful screenshot]({{ "/assets/img/strutturaEclipseWorkbench1.png" | absolute_url }})


**ELENCHI PUNTATI E NUMERATI**

HOW TO APPLY A CUSTOM CSS CLASS TO AN H1 ELEMENT?




**Hello World Latex on Jekyll**
Before start reading this section you need to know how to customize your Jekyll
website.

- copy one of the following line of code in your `_/includes/head.html` file
{% highlight html%}
<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML">
</script>
{% endhighlight %}

- use the following delimiters for your blog posts:
 - \ \ ( ... \ \ ) - inline
 - \ \ [ ... \ \ ] - math mode
 - $ $ ... $ $ - equations

$$a^2 + b^2 = c^2$$
\\( sin(x^2) \\)
\\( sin[x^2] \\)

**Where are master files?**
In the ruby installation folder under gems something.

**Jekyll Welcome Page**  
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

**How to change syntax highlighting rules?**  


**How to add javascript capabilities**  
![jekyll-coffeescript]({{"/assets/img/jekyll-coffeescript.png"|absolute_url}})




[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
[faster-jekyll]: https://wiredcraft.com/blog/make-jekyll-fast/
