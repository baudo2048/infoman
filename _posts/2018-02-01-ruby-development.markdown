---
layout: post
title:  "Ruby Development"
date:   2018-02-01 00:00:00 +0100
categories:
---
**Which IDE?**
Eclipse

**Come si inseriscono i commenti?**


**Come si usano le virgolette?**


**Read/Write text files**  
{% highlight ruby %}
File.open( thefile ).each do |line|
    print line without the new line if line does not contain  /--+/
    if line contains /--+/
        print line with a new line
    end
end
{% endhighlight %}

Mentre per scrivere su un file non farti problemi di apertura e chiusura di
cose strane, stream, etc., ti basta semplicemente eseguire questa linea di
codice:

{% highlight ruby %}
File.write('/path/to/file', 'Some glorious content')
{% endhighlight %}

**List all files in a folder**  
You also have the shortcut option of

{% highlight ruby %}
Dir["/path/to/search/asterisk"]
{% endhighlight %}

and if you want to find all Ruby files in any folder or sub-folder:

{% highlight ruby %}
Dir["/path/to/search/double_asterisk/asterisk.rb"]
{% endhighlight %}

The following snippets exactly shows the name of the files inside a directory, skipping subdirectories and ".", ".." dotted folders:

{% highlight ruby %}
Dir.entries("your/folder").select {|f| !File.directory? f}
{% endhighlight %}

**Move files**
{% highlight bash %}
#!/usr/bin/env ruby
require 'fileutils'
FileUtils.mv('/tmp/your_file', '/opt/new/location/your_file')
{% endhighlight %}
