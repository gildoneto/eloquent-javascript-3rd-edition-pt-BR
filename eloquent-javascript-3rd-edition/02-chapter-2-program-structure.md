# 2. Estrutura do Programa

[Program Structure](https://eloquentjavascript.net/02_program_structure.html)

[binding]: ## "binding"
[keyword]: ## "palavra reservada"
[braces]: ## "chaves {}"
[statement]: ## "statement"
[control flow]: ## "controle de fluxo"
[body]: ## "corpo"
[block]: ## "bloco"
[semicolon]: ## "ponto e vírgula ;"
[remainder]: ## "resto da divisão %"
[label]: ## "label"

### Expressões e Instruções (Expressions and Statements)

Uma *expressão* é um fragmento de uma instrução que produz um valor. Cada valor que é definido literalmente como `99` ou `"Playstation"` é uma *expressão*.

Uma *expressão* entre parênteses também é uma expressão, assim como um operador binário se aplicado a duas expressões ou um operador unario aplicado a uma. Ou seja, expressões podem conter outras expressões aninhadas (*nested*).

Se uma *expressão* é um fragmento de uma instrução, um *statement* corresponde a instrução inteira. E um programa é uma lista de *statements*.

### Bindings (Variáveis)

Para recuperar e guardar valores o JavaScript usa uma *variável* (variável):

```javascript
let calc = 10 / 2;
```

A ***keyword*** (palavra reservada) `let` indica que esta instrução irá definir uma variável (uma variável). Ele é seguido pelo nome da variável e, se quisermos atribuir um valor imediatamente, usamos o operador `=` e uma expressão ou um valor específico.

No teste acima o *statement* cria uma variável `calc` e armazena o valor produzido pela expressão `10 / 2` sendo então 5 no fim das contas.

Assim que uma variável é definida, seu nome já pode ser usado como uma expressão. 

Quando uma variável aponta para um valor, não significa que este valor será o mesmo sempre. O operador `=` pode ser usado a qualquer momento para alterar o valor de uma variável.

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

A palavra `const` (abreviação de constante) define uma variável constante que aponta sempre para o mesmo valor. Não é possível a alteração após sua declaração.

### Biding Names (nomes de variáveis)

Um nome de variável não pode começar com um número, pontuação ou caracteres especiais. Mas além de letras, pode começar com dollar sign `$` ou underscore `_`.

Nomes de variáveis não podem ter o mesmo nome de uma (*keyword*) palavra reservada do JavaScript, são elas: 

`break` `case` `catch` `continue` `debugger` `default` `delete` `do` `else` `false` `finally` `for` `function` `if` `implements` `in` `instanceof` `interface` `let` `new` `null` `package` `private` `protected` `public` `return` `static` `switch` `throw` `true` `try` `typeof` `var` `void` `while` `with` `yield` `this` 

### Functions (funções)

Muito dos valores disponibilizados no ambiente default são do tipo *function*. Uma função é um pedaço de um programa encapsulado num valor. Esses valores podem ser *usados* para executar o programa encapsulado. Por exemplo, num ambiente de browser(navegador), a variável `prompt` contém uma função que mostra uma pequena caixa de diálogo solicitando um input do usuário. Ele é usado desta forma:

```javascript
prompt("Digite sua senha")
```

<img src="https://github.com/gildoneto/estudando-javascript/blob/main/eloquent-javascript-3rd-edition/img/prompt.png?raw=true" alt="Prompt do Edge" width="400" />

O ato de executar uma função é chamada de *invoking*, *calling*, or *applying it*. Em português uso muito a palavra "chamar". Você pode *chamar* uma função colocando um parênteses depois da expressão que dá nome a ela. Normalmente você irá chamar diretamente o nome da variável que contém a função. Os valores entre os parênteses são levados para o programa dentro da função. No exemplo acima, a função `prompt` usa a string que passamos como um texto a ser exibido no dialog box. Valores dados a funções são chamados de *arguments*. As funções podem ter mais de um argumento e também mais de um tipo de argumento.

A função `prompt` não é mais usada no programação web moderna, principalmente porque não temos como fazer qualquer modificação na forma de como esse dialog box é exibido para o usuário.  Mas pode ser útil em programas feitos apenas para estudo ou experimentos.



### A function console.log

A maioria dos sistemas JavaScript (incluindo todos os navegadores modernos e o Node.js) disponibilizam a função `console.log` que exibe os argumentos passados na chamada com um output de texto. Nos navegadores, esse output fica no console JavaScript, que por padrão fica escondido, mas a maioria deles exibe o console apenas pressionando a tecla F12, se não funcionar, procure algo no menu relacionado a Developer Tools.

Apesar do `console.log` ter um ponto, funções não podem conter esse caractere `.` , isso ocorre porque ele não é uma variável simples. Isto na verdade é uma expressão que acessa a propriedade `log` do objeto `console`. Isso vai ser melhor explicado no [Capítulo 4](https://github.com/gildoneto/estudando-javascript/blob/main/eloquent-javascript-3rd-edition/04-chapter-4-data-structures-objects-and-arrays.md).

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

O [próximo capítulo](https://github.com/gildoneto/estudando-javascript/blob/main/eloquent-javascript-3rd-edition/03-chapter-3-functions.md) explica melhor como escrever suas próprias funções.



### Controle de Fluxo

Quando seu programa contém mais de uma instrução (*statement*), as instruções são executadas de cima para baixo (*from top to bottom*).

O programa abaixo tem duas instruções. A primeira pede um número ao usuário , e a segunda, que é executada depois da primeira, mostra a raiz quadrada do número digitado.

````javascript
let theNumber = Number(prompt("digite um numero"));
console.log("O numero digitado é a raíz quadrada de " +
            theNumber * theNumber);
````

A função `Number` convert um valor em número. Precisamos falar sobre isso porque o `prompt` retorna uma string, e nós queremos um número. Existem funções similares chamadas `String` e `Boolean` que convertem valores para esses tipos.

Aqui está uma representação esquemática bastante trivial do fluxo de controle em linha reta‎:

<br>
<img src="https://raw.githubusercontent.com/gildoneto/estudando-javascript/3fbc72247f9d888265de03d0d07a781e98cacdb3/eloquent-javascript-3rd-edition/img/controlflow-straight.svg" alt="linha reta" align="left"/>
<br>
<br>



### Execução Condicional

Nem todos os programas são estradas retas. Podemos, por exemplo, criar uma bifurcação , onde o programa escolhe automaticamente o caminho certo. Isto é chamado de *conditional execution* (execução condicional).

<br>
<img src="https://raw.githubusercontent.com/gildoneto/estudando-javascript/3fbc72247f9d888265de03d0d07a781e98cacdb3/eloquent-javascript-3rd-edition/img/controlflow-if.svg" alt="fluxo if" align="left"/>
<br>
<br>
<br>
<br>
<br>

Uma *execução condicional* é criada com a *keyword* `if` (*se*) no JavaScript. Sendo simplista, queremos que um determinado trecho de código seja executado se, e somente se, uma determinada condição for válida. Podemos, por exemplo, querer mostrar a raiz quadrada de um input apenas se ele for de fato um número.

````javascript
let theNumber = Number(prompt("Digite um número"));
if (!Number.isNaN(theNumber)) {
console.log("O numero digitado é a raíz quadrada de " +
            theNumber * theNumber);
}
````

Com essa modificação, se você digitar **"Caranguejo"**, nenhum output é exibido. 

A *keyword* `if` executa ou ignora uma instrução (*statement*) dependendo do valor de uma expressão Booleana. A expressão decisiva é escrita depois da *keyword* `if`, entre parênteses, seguida de uma instrução para executar.

A função `Number.isNan` é nativa do JavaScript e somente retorna `true` se o argumento passado for `NaN` (not a number). A função `Number` retorna `NaN` quando você passa um argumento do tipo string, que não representa um número válido. Então, lemos o programa acima da seguinte forma: "somente se theNumber não seja um Not-a-Number, faça isso".

A instrução depois do `if` está entre [braces][braces]  ({ and }) neste exemplo. As chaves podem ser usadas para agrupar várias instruções dentro de uma única [instrução][statement], chamada de *block* (bloco). Você também pode omitir as [braces][braces], desde que seja uma única [instrução][statement], mas pra evitar ter que pensar sobre quando as chaves são necessárias, a maioria dos programadores JavaScript usam [braces][braces] em cada bloco de código como esse. Este livro segue esse padrão, a não ser que a [instrução][statement] seja de apenas uma linha.

````javascript
if (1 + 1 == 2) console.log("É verdade esse bilete"); 
// → É verdade esse bilete
````

Em vários casos você não terá um código que seja executado quando a condição não retornar como o esperado, seja o retorno`true` ou `false`.

Esse caminho alternativo é representado pela segunda flexa no diagrama acima. Você pode usar a [keyword][keyword] `else` junto com a `if` para criar dois caminhos separados de execução alternativa.

````javascript
let theNumber = Number(prompt("Digite um número"));
if (!Number.isNaN(theNumber)) {
  console.log("O numero digitado é a raíz quadrada de " +
              theNumber * theNumber);
} else {
  console.log("Hey parça. Pq você não digitou um número?");
}

````

Se você tem mais de dois caminhos para escolher, você pode encadear múltiplos pares de `if`/`else` juntos. Segue um exemplo:

````javascript
let num = Number(prompt("Digite um número"));

if (num < 10) {
  console.log("Pequeno");
} else if (num < 100) {
  console.log("Médio");
} else {
  console.log("Grande");
}
````

O programa primeiro irá checar se `num` é menor que 10. Se for, ele segue esse caminho, exibe o texto "Pequeno" e encerra. Se não for menor que 10, ele e segue o `else`, que contém um segundo `if`. Se esta segunda condição *(num < 100)* for verdadeira, significa que o número é no mínimo 10 e no máximo 99, e o texto "Médio" será exibido. Se não, o segundo e último `else` é escolhido.

O diagrama para esse programa poderia ser representado por essa figura:

<br>
<img src="https://raw.githubusercontent.com/gildoneto/estudando-javascript/fbb1e4460a78e7fbc12230736fe71d712aaac715/eloquent-javascript-3rd-edition/img/controlflow-nested-if.svg" alt=" else if aninhados" align="left"/>
<br>
<br>
<br>
<br>
<br>
<br>

### Loops While e Do

Imagine um programa que exibe todos os números pares de 0 a 12. Uma forma de escrever isto é:

````javascript
console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);
````

Funcionaria, mas a ideia de escrever um programa é justamente ter "menos" trabalho, não mais. Se precisássemos de todos os números pares menores que 1.000, o exemplo acima seria impraticável. O que precisamos é de uma forma de rodar um pedaço de código múltiplas vezes. Esta forma de [control flow][control flow] é chamada de **loop**.

<br>
<img src="https://raw.githubusercontent.com/gildoneto/estudando-javascript/fbb1e4460a78e7fbc12230736fe71d712aaac715/eloquent-javascript-3rd-edition/img/controlflow-loop.svg" alt="loop" align="left"/> <br>
<br>
<br>
<br>

O controle de fluxo **Loop** nos permite voltar para certo ponto do programa onde estávamos antes e repete isso com nosso atual estado do programa. Se combinarmos isso com uma [variável][binding] que faça uma contagem, podemos fazer algo parecido com isto: 

````javascript
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
// → 0
// → 2
//   … etcetera
````

A [instrução][statement] que começa com a [keyword][keyword] `while` cria o **loop**. A palavra `while` é seguida por uma expressão em parênteses e logo após uma instrução bem parecida com o `if`. O **loop** segue executando a instrução até que a expressão produza um valor que retorna `true` quando convertido para Booleano.

A [variável][binding] `number` demonstra a forma como uma variável pode acompanhar o progresso de um programa. Cada vez que o loop se repete, `number` recebe seu valor atual acrescido de 2. No começo de cada repetição, `number` é comparado com o número 12 para decidir quando trabalho desde programa será finalizado.

Como um exemplo que de fato faz algo útil, agora podemos escrever um programa que calcula e mostra o valor de 2 elevado a 10 potência. Usamos duas [variáveis][binding]: uma para acompanhar nosso resultado, e outra para contar quantas vezes multiplicaremos o `result` por 2. A cada iteração o loop testa se a [variável][binding] `counter` já alcançou o número 10, se não, atualiza as duas [variáveis][binding].

````javascript
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024
````

O contador também poderia começar com o valor 1 e checar por menor ou igual a 10 (<= 10), mas por razões que serão discutidas no [Capítulo 4](https://github.com/gildoneto/estudando-javascript/blob/main/eloquent-javascript-3rd-edition/04-chapter-4-data-structures-objects-and-arrays.md), é sempre uma boa ideia se acostumar a iniciar o contador por 0.

Um loop `do` tem uma estrutura de controle similar ao loop `while`. Eles se diferem somente em um ponto: um loop `do` executa seu [body][body] pelo menos uma vez, e inicia o teste se deve para somente após a primeira execução. Pra reproduzir este cenário, o teste deve aparecer depois do [body][body] do loop.

````javascript
let yourName;
do {
  yourName = prompt("Digite seu nome");
} while (!yourName);
console.log(yourName);
````

Este programa vai te forçar a digitar um nome. E irá solicitar isso de novo e de novo até receber um valor que não seja uma string vazia. O operador `!` irá converter o valor para Booleano antes de negar, e todas as strings exceto "" convertem para `true`. Isso significa que o loop continuará rodando até você digitar um nome não-vazio.



### Identando o Código

Nos exemplos acima, temos adicionado espaços na frente de [instruções][statement] que são parte de alguma outra instrução maior ainda. Esses espaços não são necessários, o computador irá aceitar o o programa normalmente sem eles. Na verdade, até as quebras de linha são opcionais. Você poderia escrever um programa inteiro usando apenas uma linha se você quisesse.

A identação dentro de blocos tem o propósito de destacar a estrutura do código. Em códigos onde novos blocos são abertos dentro de outros blocos, pode ser difícil de ver onde um bloco termina e onde inicia. Com uma identação apropriada, a forma visual do programa corresponde com a forma dos blocos internos. Pode se usar dois espaços para cada bloco aberto, mas alguns programadores preferem 4 espaços, e outros caracteres de tabulação. O importante é que cada novo bloco tenha o mesmo padrão de identação.

````javascript
if (false != true) {
  console.log("That makes sense.");
  if (1 < 2) {
    console.log("No surprise there.");
  }
}
````

A maioria dos editores de código tem opção de identação automática.



### Loops For

Muitos loops seguem o padrão mostrado nos exemplos de `while`. Primeiro a [variável][binding] `counter` é criada pra registrar o progresso do loop. Depois vem o loop `while`, normalmente com uma expressão de teste que checa se o contador alcançou seu valor final. No final do [body][body] do loop, o contador é atualizado pra registrar o progresso.

Por causa desse padrao ser tao comum, o JavaScript e linguagens similares disponibilizam uma forma bem menor e mais compreensiva, o loop `for`.

````javascript
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
// → 0
// → 2
//   … etcetera
````

Este programa é equivalente ao exemplo onde exibimos os números pares. A única diferença é que todas as instruções que estão relacionadas ao "estado"(ou status do progresso) do loop são agrupados depois do `for`.

Os parênteses depois da [keyword][keyword] `for` devem conter dois [semicolons][semicolon]. A parte antes do primeiro [semicolon][semicolon] *inicializa* o loop, geralmente definindo uma [variável][binding]. A segunda parte é a expressão que checa se o loop deve continuar. A parte final atualiza o "estado" do loop a cada iteração. Pra maioria dos casos, essa é uma forma mais curta e clara que a estrutura de um `while`.

Este é o código que calcula 2 elevado a décima potência usando um loop `for` ao invés do `while`:

````javascript
let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// → 1024
````

### Saindo de um Loop

Uma condição que produz um valor `false` não é a única maneira de finalizar um loop. Existe uma expressão especial chamada `break` que tem o efeito de imediatamente sair do loop.

Esse programa ilustra a [expressão][statement] `break`. Ele acha o primeiro número que seja ao mesmo tempo maior ou igual a 20 e também divisível por 7.

````javascript
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
// → 21
````

Usar o operador [remainder][remainder] `%` é uma forma fácil de testar quando um número é divisível por outro número. Se ele for, o resto da divisão é ZERO.

A estrutura `for` no exemplo acima não possui uma parte que faz a checagem para finalizar o loop. Isso significa que o loop nunca irá parar até que a expressão `break` seja executada.

Se voce remover a expressão `break` ou acidentalmente escrever uma condição final que sempre retorna `true`, seu programa ficará preso num *loop infinito*. Um programa preso num loop infinito nunca irá parar de rodar, o que normalmente é uma coisa ruim.

A [keyword][keyword] `continue` é similar ao `break`, e influencia o progresso do loop. Quando um `continue` é encontrado no [body][body] de um loop, o controle sai do [body][body] e continua com a próxima iteração do loop.



### Atualizando Bindings Sucintamente

Especialmente durante um loop, um programa normalmente precisa atualizar uma [variável][binding] para guardar um valor baseado no valor anterior desta mesma variável.

````javascript
counter = counter + 1;
````

O JavaScript disponibiliza um atalho pra isso:

````javascript
counter =+ 1;
````

Atalhos similares funcionam pra vários outros operadores, como o `result *= 2` para dobrar o `result`, ou `counter -= 1` pra fazer contagem regressiva.

Isso nos permite diminuir nosso exemplo de contagem ainda um pouco mais.

````javascript
for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}
````

Para `counter += 1` e `counter -= 1`, existe equivalentes ainda menores:

`counter++` e `counter--`.



### Despachando um Valor com Switch

Nao é incomum encontrar códigos parecidos com este:

````javascript
if (x == "value1") action1();
else if (x == "value2") action2();
else if (x == "value3") action3();
else defaultAction();
````

Existe uma estrutura chamada `switch` que tem o intuito de expressar esse "despacho" de uma forma mais direta. Infelizmente, a sintaxe que o JavaScript usa pra isso (que foi herdado do C e Java) é um pouco estranha - uma cadeia de expressões `if` parecem ser melhor. Segue um exemplo:

````javascript
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
````

Você pode colocar quantos [rótulos][label] `case` quiser dentro do bloco aberto pelo `switch`. O programa começará executando a partir do rótulo que corresponde com o valor dado ao `switch`, ou a partir do `default` se nenhum valor de comparação for encontrado. Ele continuará executando, mesmo entre outros rótulos, até encontrar uma expressão `break`. Em alguns rótulos `case`, assim como no "sunny", podem ser usados para compartilhar código entre [rótulos][label] `case` (ele recomenda sair de casa para os dois casos, sunny e cloudy). Mas tenha cuidado, é bastante comum esquecer de do `break`, o que fará com que o programa execute código que você não quer que seja executado.



### Capitalization

Nomes de [variáveis][binding] não devem conter espaços, no entanto, muitas vezes é útil usar várias palavras para descrever claramente o que a [variável][binding] representa. Seguem as formas para atribuir nomes a uma variável com várias palavras nele:

````javascript
fuzzylittleturtle
fuzzy_little_turtle
FuzzyLittleTurtle
fuzzyLittleTurtle
````

O primeiro estilo pode ser difícil de ler. Eu prefiro algo parecido com o exemplo com underscores, mas é um estilo doloroso pra escrever. As funções padrão do JavaScript, e a maioria dos programadores, seguem o último exemplo. Eles deixam cada início de palavra maiúscula, exceto a primeira. Não é difícil se acostumar com pequenas coisas como essas, e um código com vários estilos diferentes de nomes pode ser bem estranho pra ler, então seguimos esta convenção.

Em alguns casos, assim como a função `Number`, a primeira letra do binding também está maiuscula. Isso foi feito para marcar a função como um **construtor**. O que é um construtor vai ficar mais claro no  [capítulo 6](https://github.com/gildoneto/estudando-javascript/blob/main/eloquent-javascript-3rd-edition/06-chapter-6-the-secret-life-of-objects.md). Por enquanto, tente não se chatear com essa aparente falta de consistência.



### Comentários

Com frequência, um código bruto não transmite toda informação que você quer que um programa transmita para leitores humanos, ou transmite isso de uma forma tão enigmática que as pessoas podem não entender. Em algum momento, você pode apenas incluir alguns pensamentos relacionados como parte do seu programa. É para isso que servem ‎os *‎**comentários‎***‎.‎

Um comentário é um pedaço de texto que e parte de um programa, mas e completamente ignorado pelo computador. O JavaScript tem duas maneiras de escrever comentários. Para escrever um comentário de apenas uma linha, voce pode usar o caractere ***slash*** duas vezes `//` e então comentar o texto após isso.

````javascript
let accountBalance = calculateBalance(account);
// It's a green hollow where a river sings
accountBalance.adjust();
// Madly catching white tatters in the grass.
let report = new Report();
// Where the sun on the proud mountain rings:
addToReport(accountBalance, report);
// It's a little valley, foaming like light in a glass.
````

Um comentário com "//" funciona apenas até o fim da linha. Uma seção de texto entre `/*` e `*/` será ignorado totalmente mesmo se houver quebra de linha. Isto é útil para adicionar blocos de informação sobre um arquivo ou um pedaço de programa.

````javascript
/* 
  Eu encontrei este número pela primeira vez rabiscado nas costas de um antigo
  caderno. Desde então, ele caiu muitas vezes, aparecendo em
  números de telefone e os números de série dos produtos que eu
  comprei. Ele obviamente gosta de mim, então decidi ficar com ele.
*/
const myNumber = 11213;
````



### Sumário 

Agora você sabe que um programa é construído por [expressões][statement], que podem conter outras expressões. Expressões tendem a conter expressões, que podem ser construídas por expressões menores.

Colocando expressões depois de outras formamos um programa que é executado de cima pra baixo (*from top to bottom*). Você pode introduzir alterações no [control flow][control flow] usando as expressões condicionais (`if`, `else` e `switch`) e expressões de loop (`while`, `do` e `for`).

[Variáveis][binding] podem ser usadas para atribuir pedaços de dados a um nome, e elas são úteis para acompanhar estados em seu programa. O ambiente é um conjunto de variáveis que são definidas. Sistemas JavaScript carregam consigo um conjunto de variáveis padrão que podem ser usadas dentro de seu ambiente.

Funções são valores especiais que encapsulam uma parte de programa. Você pode invocá-los escrevendo `nomeDaFuncao(argument1, argument2)`. Essa chamada de função é uma expressão e pode produzir um valor.

# Exercícios 

Os exercícios abaixo são propostos pelo autor, abordando o que foi aprendido nos capítulos 1 e 2.

[Clicando aqui](https://github.com/braziljs/eloquente-javascript/blob/main/chapters/02-estrutura-do-programa.md) você pode ler e fazer os exercícios deste capítulo referente a segunda edição do livro traduzido pela BrazilJS.

Já referente a terceira edição, clicando abaixo você irá para a página dos exercícios deste capítulo com as minhas respostas e as do autor:

### [Exercícios - #3rd Edition](https://github.com/gildoneto/estudando-javascript/blob/main/eloquent-javascript-3rd-edition/22-exercises-chapter-2.md) ⬅

