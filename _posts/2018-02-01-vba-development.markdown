---
layout: post
title:  "VBA Development"
date:   2018-02-01 00:00:00 +0100
categories:
---

**Excel VBA Folder Structure**
user interfaces
commons - common functions implementing the business logic of our applicaiton
format - helper subrouting handling excel sheets formatting
operation1 - (oppure il nome dell'operation)
operationN - ogni operation module conterrà tutte le function e subrouting
utilizzate per automatizzare un determinato task.

**Global variables**

{% highlight vb %}
Public Const DB_SHEET = "C:\Users\gbaudo\Desktop\db\dati.xlsx"
{% endhighlight %}

**How to save a file**

**How to open a file**
