---
layout: post
title:  "Java Development"
date:   2018-02-01 00:00:00 +0100
categories:
---
First of all configure a dialects like groovy, extent, etc.

**Move Files**  
{% highlight java %}
package isp.cap.operations;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class ImportWsdl {

	public static void main(String[] args) throws IOException {
		Files.move(Paths.get("uri"), Paths.get("uri"), REPLACE_EXISTING);
		System.out.println("file moved");
	}
}
{% endhighlight %}
