---
layout: documentation
title: Documentação
permalink: pt/docs/
language: pt
thumbnail: /img/grade.jpg
---

> Esta é uma grade simples de usar, bem intuitiva até.
A ideia é eliminar a necessidade de colocar classes em cada elemento dentro da grade.
Não é massante ver classes repetidas por todo o seu código?

#### Por que tantas classes?
Suponhamos que você precisa fazer uma seção de quatro colunas do seu leiate.
Como ela seria usando as frameworks disponíveis por aí?
Olhe só:

{% highlight html %}
<div class="row">
  <div class="sua-classe col-xs-12 col-md-3 col-sm-3 col-lg-3">
    <!-- Seu conteúdo fica aqui -->
  </div>
  <div class="sua-classe col-xs-12 col-md-3 col-sm-3 col-lg-3">
    <!-- Seu conteúdo fica aqui -->
  </div>
  <div class="sua-classe col-xs-12 col-md-3 col-sm-3 col-lg-3">
    <!-- Seu conteúdo fica aqui -->
  </div>
  <div class="sua-classe col-xs-12 col-md-3 col-sm-3 col-lg-3">
    <!-- Seu conteúdo fica aqui -->
  </div>
</div>
{% endhighlight %}

Estes div's estão com muitas classes, não?

E se você pudesse escrever o mesmo código como no exemplo abaixo?

{% highlight html %}
<div class="four columns one-phone">
  <div class="sua-classe">
    <!-- Seu conteúdo fica aqui -->
  </div>
  <div class="sua-classe">
    <!-- Seu conteúdo fica aqui -->
  </div>
  <div class="sua-classe">
    <!-- Seu conteúdo fica aqui -->
  </div>
  <div class="sua-classe">
    <!-- Seu conteúdo fica aqui -->
  </div>
</div>
{% endhighlight %}

Bem melhor, hein? É isto que esta grade faz.

#### Então eu vou ter que parar de usar minha framework favorita?
Ehh, não... Você pode usá-la com qualquer framework que você ja usa.
Ela só funciona se você usar a classe **grade** no elemento pai.
Ela é discreta.

Assim:

{% highlight html %}
<div class="grade">
  <!-- Seu conteúdo fica aqui -->
</div>
{% endhighlight %}

{% include snippets-br.html %}
