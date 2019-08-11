---
layout: documentation
title: Documentation
permalink: /en/docs/
language: en
thumbnail: /img/grade.jpg
---

> This is an easy grid to use, quite intuitive, in fact.
The idea behind it is to eliminate the need to add classes in every element inside a grid.
Isn't it boring to see repeated classes everywhere in your code?

#### Why so many classes?
Suppose you need to make a four-column section in your layout. 
What would it be like in the current frameworks available out there? Look at it:

{% highlight html %}
<div class="row">
  <div class="your-class col-xs-12 col-md-3 col-sm-3 col-lg-3">
    <!-- Your content goes here -->
  </div>
  <div class="your-class col-xs-12 col-md-3 col-sm-3 col-lg-3">
    <!-- Your content goes here -->
  </div>
  <div class="your-class col-xs-12 col-md-3 col-sm-3 col-lg-3">
    <!-- Your content goes here -->
  </div>
  <div class="your-class col-xs-12 col-md-3 col-sm-3 col-lg-3">
    <!-- Your content goes here -->
  </div>
</div>
{% endhighlight %}

There are a lot of classes on those div’s, right?

What if you could write the same code like the example below?

{% highlight html %}
<div class="four columns one-phone">
  <div class="your-class">
    <!-- Your content goes here -->
  </div>
  <div class="your-class">
    <!-- Your content goes here -->
  </div>
  <div class="your-class">
    <!-- Your content goes here -->
  </div>
  <div class="your-class">
    <!-- Your content goes here -->
  </div>
</div>
{% endhighlight %}

Much better, huh? That's what it's all about.

#### So will I have to leave my favorite framework to use this?
Eh, nope... You can mix it with any framework you already use.
It only works if you use the **grade** class in the parent element.
It's unobtrusive.

Like this:

{% highlight html %}
<div class="grade">
  <!-- Your content goes here -->
</div>
{% endhighlight %}

{% include snippets.html %}
