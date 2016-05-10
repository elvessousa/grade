---
layout: page
title: Getting started
permalink: /download/
---

### Download the files
This grid is available as a full package containing all the need files to compile.
It is made in **Sass**, but a **precompiled css** is included in the `pub/css` folder.
To use it, copy to your project link it in your page and be happy:

{% highlight html %}
  <link rel="stylesheet" href="path/to/css/grade.css">
{% endhighlight %}


[**Download zip**](https://github.com/elvessousa/grade/archive/master.zip)

---

### Using the source code

#### NPM: node package manager
If you don't have node installed, download it from the site, or use a package manager of your choice.


#### Gulp
It is a task manager. More info at [Gulp's site](http://gulpjs.com).
To install it in your system run:

{% highlight shell %}
  $ (sudo) npm install -g gulp
{% endhighlight %}

To run the task in the gulpfile.js, run:

{% highlight shell %}
  $ gulp
{% endhighlight %}

---


### Install
In order to install and run, check if all dependencies are satisfied.
If it is, run the following in a terminal:

{% highlight shell %}
  $ npm install
{% endhighlight %}

{% highlight shell %}
  $ bower install
{% endhighlight %}