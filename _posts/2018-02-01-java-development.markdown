---
layout: post
title:  "Java Development"
date:   2018-02-01 01:01:01 +0100
author: gb
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
