# 2. Estrutura do Programa

[Program Structure](https://eloquentjavascript.net/02_program_structure.html)

Neste capítulo aprendemos:

### Expressões e instruções (expressions and statements)

Uma *expression* é um fragmento de uma sentença que produz um valor. Cada valor que é definido literalmente como `99` ou `"Playstation"` é uma *expression*.

Uma *expression* entre parênteses também é uma expressão, assim como um operador binário se aplicado a duas expressões ou um operador unario aplicado a uma. Ou seja, expression podem conter outras expressions aninhadas (*nested*).

Se uma *expression* é um fragmento de uma sentença, um *statement* corresponde a sentença inteira. E um programa é uma lista de *statements*.

### Bindings (variáveis)

Para recuperar e gardar valores o JavaScript usa uma *binding* (ou variável):

```javascript
let calc = 10 / 2;
```

A ***keyword*** (palavra especial) `let` indica que esta sentença irá definir um binding (uma variável). Ele é seguido pelo nome da variável e, se quisermos atribuir um valor imediatamente, usuamos o operador `=` e uma expression ou um valor específico.

No teste acima o *statement* cria uma variável `calc` e armazena o valor produzido pela expressão `10 / 2` sendo então 5 no fim das contas.

Assim que uma variável é definida, seu nome já pode ser usado como uma expressão. 

Quando uma variavel aponta para um valor, não significa que este valor será o mesmo sempre. O operador `=` pode ser usado a qualquer momento para alterar o valor de uma variável.

```javascript
let clima = "ensolarado";
console.log(clima);
// → ensolarado
clima = "chuvoso";
console.log(clima);
// → chuvoso
```

As palavras `var` e `const` também podem ser usadas para criar bindings igualmente como o `let`.

```javascript
var word1 = "World!";
const word2 = "Hello ";
console.log(word2 + word1);
// → Hello World!
```

A palavra `var` (abreviação de variável) era usada para declarar bindings no JavaScript antes de 2015, isso é melhor explicado no capítulo 3 Funções.

A palavra `const` (abreviação de constante) define um binding constante que aponta sempre para o mesmo valor. Não é possível a alteração após sua declaração.

### Biding Names (nomes de variáveis)

Um nome de variável não pode começar com um número, pontuação ou caracteres especiais. Mas além de letras, pode começar com dollar sign `$` ou underscore `_`.

Nomes de variáveis não podem ter o mesmo nome de uma (*keyword*) palavra reservada do JavaScript, são elas: 

`break` `case` `catch` `continue` `debugger` `default` `delete` `do` `else` `false` `finally` `for` `function` `if` `implements` `in` `instanceof` `interface` `let` `new` `null` `package` `private` `protected` `public` `return` `static` `switch` `throw` `true` `try` `typeof` `var` `void` `while` `with` `yield` `this` 

### Functions (funções)

Muito dos valores disponibilizados no ambiente default são do tipo *function*. Uma função é um pedaço de um programa encapsulado num valor. Esses valores podem ser *usados* para executar o programa encapsulado. Por exemplo, num ambiente de browser(navegador), a variável `prompt` contém uma função que mostra uma pequena caisa de diálogo solicitando um input do usuário. Ele é usado desta forma:

```javascript
prompt("Digite sua senha")
```

<img src="https://github.com/gildoneto/estudando-javascript/blob/master/eloquent-javascript-3rd-edition/img/prompt.png?raw=true" alt="prompt.png" width="400" />

O ato de executar uma função é chamada de *invoking*, *calling*, or *applying it*. Em português uso muito a palavra "chamar". Você pode *chamar* uma função colocando um parênteses depois da expressão que dá nome a ela. Normalmente você irá chamar diretamente o nome da variável que contém a função. Os valores entre os parênteses são levados para o programa dentro da função. No exemplo acima, a função `prompt` usa a string que passamos como um texto a ser exibido no dialog box. Valores dados a funções são chamados de *arguments*. As funções podem ter mais de um argumento e também mais de um tipo de argumento.

A função `prompt` não é mais usada no programação web moderna, principalmente porque não temos como fazer qualquer modificação na forma de como esse dialog box é exibido para o usuário.  Mas pode ser útil em programas feitos apenas para estudo ou experimentos.



### A function console.log

A maioria dos sistemas JavaScript (incluindo todos os navegadores modernos e o Node.js) disponibilizam a função `console.log` que exibe os argumentos passados na chamada com um output de texto. Nos navegadores, esse output fica no console JavaScript, que por padrão fica escondido, mas a maioria deles exibe o console apenas pressionando a tecla F12, se não funcionar, procure algo no menu relacionado a Developer Tools.

Apesar do `console.log` ter um ponto, funções não podem conter esse caractere `.` , isso ocorre porque ele não é um binding simples. Isto na verdade é uma expressão que acessa a propriedade `log` do objeto `console`. Isso vai ser melhor explicado no [Capítulo 4](https://github.com/gildoneto/estudando-javascript/blob/master/eloquent-javascript-3rd-edition/04-chapter-4-data-structures-objects-and-arrays.md).

### Retornando Valores

Mostrar um *dialog box* ou exibir um texto na tela é um *side effect* (efeito colateral(?)). Várias funções são úteis por causa dos *side effects* que elas produzem. Funções também podem produzir valores, e nesse caso não precisam ter um *side effect* para ser úteis. Por exemplo, a função `Math.max` recebe uma quantidade de números como argumentos e devolve o maior deles.

````javascript
console.log(Math.max(9, 1, 5, 7))
// → 9
````

Quando uma função produz um valor, dizemos que ela *retorna* aquele valor. Tudo que produz valor é uma **expressão** em JavaScript, o que significa que chamadas de funções podem ser usadas dentro de expressões maiores. No exemplo abaixo temos uma chamada do `Math.min`, que é o oposto do `Math.max`, usada como parte de uma expressão de soma:

````javascript
console.log(Math.min(3, 9) + 7)
// → 10
````

O [próximo capítulo](https://github.com/gildoneto/estudando-javascript/blob/master/eloquent-javascript-3rd-edition/03-chapter-3-functions.md) explica melhor como escrever suas próprias funções.



### Controle de Fluxo

Quando seu programa contém mais de uma declaração (*statement*), as declarações são executadas de cima para baixo (*from top to bottom*).

O programa abaixo tem duas declaracoes. A primeira pede um número ao usuário , e a segunda, que é executada depois da primeira, mostra a raíz quadrada do número digitado.

````javascript
let theNumber = Number(prompt("digite um numero"));
console.log("O numero digitado é a raíz quadrada de " +
            theNumber * theNumber);
````

A função `Number` convert um valor em número. Precisamos falar sobre isso porque o `prompt` retorna uma string, e nós queremos um número. Existem funções similares chamadas `String` e `Boolean` que convertem valores para esses tipos.

Aqui está uma representação esquemática bastante trivial do fluxo de controle em linha reta‎:

<img src="https://raw.githubusercontent.com/gildoneto/estudando-javascript/3fbc72247f9d888265de03d0d07a781e98cacdb3/eloquent-javascript-3rd-edition/img/controlflow-straight.svg" alt="linha reta" align="left"/>

### Execução Condicional

Nem todos os programas são estradas retas. Podemos, por exemplo, criar uma bifurcação , onde o programa escolhe automaticamente o caminho certo. Isto é chamado de *conditional execution* (execução condicional).

<img src="https://raw.githubusercontent.com/gildoneto/estudando-javascript/3fbc72247f9d888265de03d0d07a781e98cacdb3/eloquent-javascript-3rd-edition/img/controlflow-if.svg" alt="linha reta" align="left"/>

Uma *execução condicional* é criada com a *keyword* `if` (*se*) no JavaScript. Sendo simplista, queremos que um determinado trecho de código seja executado se, e somente se, uma determinada condição for válida. Podemos, por exemplo, querer mostrar a raíz quadrada de um input apenas se ele for de fato um número.

````javascript
let theNumber = Number(prompt("digite um numero"));
if (!Number.isNaN(theNumber)) {
console.log("O numero digitado é a raíz quadrada de " +
            theNumber * theNumber);
}
````

Com essa modificação, se você digitar **"Carangueijo"**, nenhum output é exibido. 

A *keyword* `if` executa ou ignora uma declaração (*statement*) dependendo do valor de uma expressão Booleana. A expressão decisiva é escrita depois da *keyword* `if`, entre parênteses, seguida de uma declaração para executar.

A função `Number.isNan` é nativa do JavaScript e somente retorna `true` se o argumento passado for `NaN` (not a number). A função `Number` retorna `NaN` quando você passa um argumento do tipo string, que não representa um número válido. Então, lemos o programa acima da seguinte forma: "somente se theNumber não seja um Not-a-Number, faça isso".

A declaração depois do `if` está entre [chaves](a "braces")  ({ and }) neste exemplo. As [chaves](a "braces") podem ser usadas para agrupar várias declarações dentro de uma única [declaração](a "statement"), chamada de *block* (bloco). Você também pode omitir as [chaves](a "braces"), desde que seja uma única [declaração](a "statement"), mas pra evitar ter que pensar sobre quando as chaves são necessárias, a maioria dos programadores JavaScript usam as [chaves](a "braces") em cada bloco de código como esse. Este livro segue esse padrão, a não ser que a [declaração](a "statement") seja de apenas uma linha.

````javascript
if (1 + 1 == 2) console.log("É verdade esse bilete"); 
// → É verdade esse bilete
````

Em vários casos você não terá um código que seja executado quando a condição não retornar como o esperado, seja o retorno`true` ou `false`.

Esse caminho alternativo é representado pela segunda flexa no diagrama acima. Você pode usar a [keyword](a "palavra reservada") `else` junto com a `if` para criar dois caminhos separados de execução alternativa.



Em construção 👷 🚧 

<img src="" alt="linha reta" align="left"/>

...

# Exercícios 

Os exercícios abaixo são propostos pelo autor, abordando o que foi aprendido nos capítulos 1 e 2.

[Clicando aqui](https://github.com/braziljs/eloquente-javascript/blob/master/chapters/02-estrutura-do-programa.md) você pode ler e tentar fazer os exercícios da segunda edição traduzida pela BrazilJS.

Tente fazer os exercícios e depois volte aqui para checar minhas respostas comentadas e as respostas do autor.

### [Exercícios respondidos](https://github.com/gildoneto/estudando-javascript/blob/master/eloquent-javascript-3rd-edition/22-exercises-chapters-1-and-2.md) ⬅

