---
layout: post2
title:  "Eclipse Plugin Development"
date:   2018-02-06 08:56:00 +0100
categories: devops micro-operation-development
---

**Introduction**  
Eclipse plugin development is a fun experience even though it has a lot of
things we need to know to master the ability to convert an operation into an
automation.

Eclipse is not only an editor for your java code, it is a platform, its main
class itself is called *PlatformUI*. This means that if you are able to create a
java main file to execute it, you are already able to use the eclipse platform.

In a java developer point of view, it means that we can use every class of the
java ide itself. More, you can use every class of every plugin installed in
you eclipse ide.

In a management point of view, you should take care of eclipse plugin
development because with it you can automate every operation you accomplish
with eclipse. For example, change set management with rational tool concern.

For example, an important aspect of change set management is the ability
to automate mail communication with other stakeholders. Suppose you have to send
10 mails for each change set delivered in every stream you take care. Suppose
you have to do that task 5 times a day for 5 days a week. It would be a every
annoying life and a cost for your organization.

An operation is a complete sequence of task that a human being performs by
a computer in order to obtain a result. An automation is the complete control
of the operation da parte del computer. We may add a third category of
operational functions called semi-automation in which human performs part of
the sequence of task.

A real scenario could be found in large
application where the amount is so heavy that we need a...

But torniamo a noi, how to start creating eclipse plugin for our operations.

Operations can be found everywhere in computer science et not only. Giuristi,
Medici, etc.

The first thing to do is understand the I/O system. For now we consider
just a view in which we put on some widget, for example an editor in which we
write line of strings.

A questo punto si potrebbe pensare di salvare intanto un file su disco in modo
da caricarlo nel nostro widget.

Another useful mechanism to obtain rapid responses about our code, for example
printing the result of the following line of java code:

{% highlight java %}
System.out.println("Hello Eclipse Development");
{% endhighlight %}


Eclipse Workbench Selection Service
Suppose you want get the text in the clipbord, intanto la clipboard è
selezionabile anche da windows stesso, ma questo è un altro discorso.

[SAMPLE CODE FOR SELECTION AND WORKBENCH, GETSITE() ETC.][sample-code]


**Eclipse Workbench Structure**  
This is an insight of the eclipse workbench structure. In order to get control
over the widget in the views we need to start here.

![My helpful screenshot]({{ "/assets/img/strutturaEclipseWorkbench1.png" | absolute_url }})

For now we may consider window and workbench as denoting the same thing.

{% highlight java %}
PlatformUI.getQualcosa();
{% endhighlight %}


IWorkspace ???

IViewReference -

Page - body of the window: contains views and editors

View -

Editor - quello dove si scrive il codice dei files. An editor is a visual
component within a workbench page. Hence pay attentions because it isn't
the code itself but it is that ui component in which your code lives.

![ui-editor]({{"/assets/img/eclipse-ui-editor.png"|absolute_url}})

Widget ???

**How to get reference of Window, Workbench, Workspace, Selection**
{% highlight java %}
// WorkbenchWindow
IWorkbenchPage workbenchPage = workbenchWindow.getActivePage();
ISelectionService selectionService = workbenchWindow.getSelectionService();
Object service = workbenchWindow.getService(String.class);
Shell shell = workbenchWindow.getShell();
{% endhighlight %}


**How to get the control of your Eclipse Window**

{% highlight java %}
IWorkbenchPage page = null;
IWorkbenchWindow window = PlatformUI.getWorkbench().getActiveWorkbenchWindow();
if (window != null)
{
    page = window.getActivePage();
}

if (page == null)
{
    // Look for a window and get the page off it!
    IWorkbenchWindow[] windows = PlatformUI.getWorkbench().getWorkbenchWindows();
    for (int i = 0; i < windows.length; i++)
    {
        if (windows[i] != null)
        {
            window = windows[i];
            page = windows[i].getActivePage();
            if (page != null)
            break;
        }
    }
}
{% endhighlight %}

**Logging**
For fastest msgbox you can use:

{%highlight java %}

{%endhighlight%}

[Platform UI/Notification][notification]

[notification]: https://wiki.eclipse.org/Platform_UI/Notifications


![notification]({{"/assets/img/t-029c7b48.png" | absolute_url}})


![event]({{"/assets/img/t-958e4d17.png" | absolute_url}})

![trigger]({{"/assets/img/t-c9cc0de2.png" | absolute_url}})


Per usare il meccanismo delle notification occorre utilizzare accanto ad esso
un meccanismo di scheduling.

**Extensions and extentions point**
{% highlight java %}
org.eclipse.ui.views
{% endhighlight %}

**How to create a view**

{% highlight java%}
org.eclipse.ui
{% endhighlight %}

**How to take over other installed plugin - Jazz Plugin Development**
not much work.

**Fragment vs Feature**
![eclipse-jargon]({{"/assets/img/eclipse-jargon.png"|absolute_url}})

**Preferences**


**BIBLIOGRAFIA**  
[sample-code]: https://www.programcreek.com/java-api-examples/index.php?class=org.eclipse.ui.IWorkbenchPart&method=getSite  
[workbench-selection]: https://www.eclipse.org/articles/Article-WorkbenchSelections/article.html  
[PlatformUI]: http://help.eclipse.org/kepler/index.jsp?topic=%2Forg.eclipse.platform.doc.isv%2Freference%2Fapi%2Forg%2Feclipse%2Fui%2FPlatformUI.html  
[IWorkbench]: http://help.eclipse.org/kepler/index.jsp?topic=%2Forg.eclipse.platform.doc.isv%2Freference%2Fapi%2Forg%2Feclipse%2Fui%2FPlatformUI.html  
[IWorkbenchPart]: https://help.eclipse.org/luna/index.jsp?topic=%2Forg.eclipse.platform.doc.isv%2Freference%2Fapi%2Forg%2Feclipse%2Fui%2FIWorkbenchPart.html  
[QUESTIONS-1]: https://wiki.eclipse.org/FAQ_How_do_I_find_the_active_workbench_page%3F  

*Jazz - Rational Team Concert*  
[RTC]: https://www.ibm.com/developerworks/library/d-extend-customize-rational-team-concert-continuous-integration/index.html  
