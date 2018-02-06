---
layout: post
title:  "Eclipse Plugin Development"
date:   2018-02-06 08:56:00 +0100
categories: devops micro-operation-development
---

ARTICLES  
[Workbench Selections][workbench-selection]

[SAMPLE CODE FOR SELECTION AND WORKBENCH, GETSITE() ETC.][sample-code]


QUESTIONS
https://wiki.eclipse.org/FAQ_How_do_I_find_the_active_workbench_page%3F



{% highlight java %}
// A comment

System.out.println("jek");

{% endhighlight %}



Struttura di eclipse


![My helpful screenshot]({{ "/assets/img/strutturaEclipseWorkbench1.png" | absolute_url }})


IWorkspace ???


PlatformUI - http://help.eclipse.org/kepler/index.jsp?topic=%2Forg.eclipse.platform.doc.isv%2Freference%2Fapi%2Forg%2Feclipse%2Fui%2FPlatformUI.html

IWorkbench - http://help.eclipse.org/kepler/index.jsp?topic=%2Forg.eclipse.platform.doc.isv%2Freference%2Fapi%2Forg%2Feclipse%2Fui%2FPlatformUI.html

IWorkbenchPart - https://help.eclipse.org/luna/index.jsp?topic=%2Forg.eclipse.platform.doc.isv%2Freference%2Fapi%2Forg%2Feclipse%2Fui%2FIWorkbenchPart.html

IViewReference -

Page - body of the window: contains views and editors

View -

Editor - quello dove si scrive il codice dei files.


[sample-code]: https://www.programcreek.com/java-api-examples/index.php?class=org.eclipse.ui.IWorkbenchPart&method=getSite
[workbench-selection]: https://www.eclipse.org/articles/Article-WorkbenchSelections/article.html
