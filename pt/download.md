---
layout: page
title: Iniciando
permalink: pt/download/
language: pt
thumbnail: /img/grade.jpg
---

### Baixe os arquivos
Esta grid está disponível como um pacote contendo todos os arquivos necessários para compilar.
É feito em **Sass**, mas uma **folha de estilo precompilada** está incluída no diretório `pub/css`.
Para usá-la, copie o arquivo para o seu projeto, o referencie na página e seja feliz:

{% highlight html %}
  <link rel="stylesheet" href="path/to/css/grade.css">
{% endhighlight %}

<script src="https://gumroad.com/js/gumroad.js"></script>
<a class="gumroad-button" href="https://gum.co/grade-css-grid" target="_blank">Download "Grade"</a>
<!-- [**Baixar zip**](https://github.com/elvessousa/grade/archive/master.zip) -->
[**Github repo**](https://github.com/elvessousa/grade)

---

### Usando o código fonte

#### NPM: node package manager
Se você não possui o node instalado, baixe-o do [site](https://nodejs.org), ou use um gerenciador de pacotes de sua preferência.

#### Gulp
É um gerenciador de tarefas. Mais informações no [site do Gulp](http://gulpjs.com).
Para instalá-lo no seu sistema, execute:

{% highlight shell %}
  $ (sudo) npm install -g gulp
{% endhighlight %}

Para rodar a tarefa do gulpfile.js, execute:

{% highlight shell %}
  $ gulp
{% endhighlight %}

---


### Instalação
Para instalar e executar, cheque se todas as dependências estão satisfeitas.
Se estão, execute o seguinte em um terminal:

{% highlight shell %}
  $ npm install
{% endhighlight %}

{% highlight shell %}
  $ bower install
{% endhighlight %}
