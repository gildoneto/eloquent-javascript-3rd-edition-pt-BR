# 1. Valores, Tipos e Operadores

[Values, Types, and Operators](https://eloquentjavascript.net/01_values.html)

> Abaixo da superfície da máquina, o programa se move. Sem esforço, ela se expande e se contrai. Em grande harmonia, os elétrons se dispersam e se reagrupam. As formas no monitor são apenas ondulações na água. A essência fica invisível abaixo.
>
> -- Master Yuan-Ma, The Book of Programming

![Desenho de um mar de bits](https://eloquentjavascript.net/img/chapter_picture_1.jpg)

Dentro do mundo do computador, existem apenas dados. Você pode ler dados, modificar dados, criar novos dados, mas o que não é dado não pode ser mencionado. Todos esses dados são armazenados como longas sequências de bits e, portanto, são fundamentalmente semelhantes.

Bits são qualquer tipo de coisa de dois valores, geralmente descritos como zeros e uns. Dentro do computador, eles assumem formas como uma carga elétrica alta ou baixa, um sinal forte ou fraco ou um ponto brilhante ou opaco na superfície de um CD. Qualquer pedaço de informação discreta pode ser reduzido a uma sequência de zeros e uns e assim representado em bits.

Por exemplo, podemos expressar o número 13 em bits. Funciona da mesma forma que um número decimal, mas em vez de 10 dígitos diferentes, você tem apenas 2, e o peso de cada um aumenta por um fator de 2 da direita para a esquerda. Aqui estão os bits que compõem o número 13, com os pesos dos dígitos mostrados abaixo deles:

```
  0   0   0   0  1  1  0  1
128  64  32  16  8  4  2  1
```
Então esse é o número binário `00001101`. Seus dígitos diferentes de zero representam `8`, `4` e `1`, e somam `13`.

## Valores (Values)

Imagine um mar de bits — um oceano deles. Um computador moderno típico tem mais de 30 bilhões de bits em seu armazenamento de dados voláteis (memória de trabalho). O armazenamento não volátil (o disco rígido ou equivalente) tende a ter algumas ordens de magnitude a mais.

Para poder trabalhar com essas quantidades de bits sem nos perdermos, devemos separá-los em pedaços que representam pedaços de informação. Em um ambiente JavaScript, esses pedaços são chamados de *valores*. Embora todos os valores sejam feitos de bits, eles desempenham papéis diferentes. Cada valor tem um tipo que determina sua função. Alguns valores são números, alguns valores são pedaços de texto, alguns valores são funções e assim por diante.

Para criar um valor, você deve simplesmente invocar/chamar seu nome. Isso é conveniente. Você não precisa reunir material de construção para seus valores ou pagar por eles. Você apenas chama por um, e *whoosh*, você tem. Eles não são realmente criados do nada, é claro. Cada valor deve ser armazenado em algum lugar, e se você quiser usar uma quantidade gigantesca deles ao mesmo tempo, poderá ficar sem memória. Felizmente, isso é um problema apenas se você precisar de todos eles simultaneamente. Assim que você não usar mais um valor, ele se dissipará, deixando para trás seus bits para serem reciclados como material de construção para a próxima geração de valores.

Este capítulo apresenta os elementos atômicos dos programas JavaScript, ou seja, os tipos de valor simples e os operadores que podem atuar em tais valores.

## Números (Numbers)

Os valores do tipo `number` são, sem surpresa, valores numéricos. Em um programa JavaScript, eles são escritos da seguinte forma:

```javascript
13
```
Use isso em um programa e isso fará com que o padrão de bits para o número 13 passe a existir dentro da memória do computador.

JavaScript usa um número fixo de bits, 64 deles, para armazenar um único valor numérico. Existem poucos padrões que você pode criar com 64 bits, o que significa que a quantidade de números diferentes que podem ser representados é limitado. Com *N* dígitos decimais, você pode representar 10<sup>N</sup> números. Da mesma forma, dados 64 dígitos binários, você pode representar 2<sup>64</sup> números diferentes, que são cerca de 18 quintilhões (um 18 com 18 zeros depois). Isso é muito.

A memória do computador costumava ser muito menor e as pessoas tendiam a usar grupos de 8 ou 16 bits para representar seus números. Era fácil estourar(overflow) acidentalmente números tão pequenos — acabar com um número que não se encaixava no número de bits disponibilizados. Hoje, até mesmo os computadores que cabem no seu bolso têm muita memória, então você está livre para usar pedaços de 64 bits e precisa se preocupar com estouro(overflow) apenas ao lidar com números realmente astronômicos.

Nem todos os números inteiros menores que 18 quintilhões cabem em num `number` JavaScript. Esses bits também armazenam números negativos, então um bit indica o sinal do número. Um problema maior é que os números não inteiros também devem ser representados. Para fazer isso, alguns dos bits são usados ​​para armazenar a posição do ponto decimal. O número inteiro máximo real que pode ser armazenado está mais na faixa de 9 quatrilhões (15 zeros) – o que ainda é agradavelmente grande.

Os números fracionários são escritos usando um ponto.

```javascript
9.81
```
Para números muito grandes ou muito pequenos, você também pode usar a notação científica adicionando um `e` (para *expoente*), seguido pelo expoente do número.

```javascript
5.998e8
```

Isso é 2.998 × 10<sup>8</sup> = 299,800,000.

Cálculos com números inteiros (também chamados de *integers*) menores que os 9 quatrilhões mencionados acima são garantidos para serem sempre precisos. Infelizmente, cálculos com números fracionários geralmente não são. Assim como π (pi) não pode ser expresso com precisão por um número finito de dígitos decimais, muitos números perdem alguma precisão quando apenas 64 bits estão disponíveis para armazená-los. Isso é uma pena, mas causa problemas práticos apenas em situações específicas. O importante é estar atento a isso e tratar os números digitais fracionários como aproximações, não como valores precisos.

## Aritmética

A principal coisa a fazer com números é aritmética. Operações aritméticas, como adição ou multiplicação, recebem dois valores numéricos e produzem um novo número a partir deles. Aqui está como eles se parecem em JavaScript:

```javascript
100 + 4 * 11
```

Os símbolos `+` e `*` são chamados de operadores. O primeiro significa *adição* e o segundo, *multiplicação*. Colocar um operador entre dois valores o aplicará a esses valores e produzirá um novo valor.

Mas o exemplo significa “somar 4 e 100 e multiplicar o resultado por 11”, ou a multiplicação é feita antes da adição? Como você deve ter adivinhado, a multiplicação acontece primeiro. Mas, como na matemática, você pode mudar isso envolvendo a adição entre parênteses.

```javascript
(100 + 4) * 11
```

Para *subtração*, existe o operador `-`, e a *divisão* pode ser feita com o operador `/`.

Quando os operadores aparecem juntos sem parênteses, a ordem em que são aplicados é determinada pela ***precedência*** dos operadores. O exemplo mostra que a multiplicação vem antes da adição. O operador `/` tem a mesma precedência que `*`. Da mesma forma para `+` e `-`. Quando vários operadores com a mesma precedência aparecem um ao lado do outro, como em `1 - 2 + 1`, eles são aplicados da esquerda para a direita: `(1 - 2) + 1`.

Essas regras de precedência não são algo com que você deve se preocupar. Na dúvida, basta adicionar parênteses.

Há mais um operador aritmético, que você pode não reconhecer imediatamente. O símbolo `%` é usado para representar o operador de ***resto***(remainder). `X % Y` é o resto da divisão de `X` por `Y`. Por exemplo, `314 % 100` produz `14` e `144 % 12` dá `0`. A precedência do operador de ***resto*** é a mesma da multiplicação e divisão. Você também verá com frequência esse operador chamado de **módulo**.

## Números especiais

Existem três valores especiais em JavaScript que são considerados números, mas não se comportam como números normais.

Os dois primeiros são `Infinity` e `-Infinity`, que representam os infinitos positivos e negativos. `Infinity - 1` ainda é `Infinity`, e assim por diante. No entanto, não confie muito na computação baseada em infinito. Não é matematicamente correto e levará rapidamente ao próximo número especial: `NaN`.

`NaN` significa "Not a number"(não é um número), embora seja um valor do tipo `number`. Você obterá esse resultado quando, por exemplo, tentar calcular `0 / 0` (zero dividido por zero), `Infinito - Infinito` ou qualquer número de outras operações numéricas que não produzam um resultado significativo.

## Strings

O próximo tipo de dados básico é a `string`. **Strings** são usadas para representar texto. Eles são escritos colocando seu conteúdo entre aspas.

```javascript
`Down on the sea`
"Lie on the ocean"
'Float on the ocean'
```

Você pode usar aspas simples, aspas duplas ou acentos graves para criar strings, desde que as aspas no início e no final da string correspondam.

Quase tudo pode ser colocado entre aspas, e o JavaScript criará um valor de `string` a partir disso. Mas alguns caracteres são mais difíceis. Você pode imaginar que colocar aspas entre aspas pode ser difícil. *Newlines* (os caracteres que você obtém quando pressiona enter) podem ser incluídas sem escape apenas quando a string é citada com acentos graves ( ` ).

Para possibilitar a inclusão de tais caracteres em uma string, utiliza-se a seguinte notação: sempre que uma barra invertida (`\`) for encontrada dentro de um texto entre aspas, indica que o caractere que vem depois tem um significado especial. Isso é chamado de caractere de escape(escaping). Uma aspa precedida por uma barra invertida não terminará a string, mas fará parte dela. Quando um caractere `n` ocorre após uma barra invertida, ele é interpretado como uma nova linha. Da mesma forma, um `t` após uma barra invertida significa um caractere de tabulação. Observe a seguinte string:

```javascript
"This is the first line\nAnd this is the second"
```

O texto acima será exibido desta forma:

```bash
This is the first line
And this is the second
```

Existem, é claro, situações em que você deseja que uma barra invertida em uma string seja apenas uma barra invertida, não um código especial. Se duas barras invertidas se seguirem, elas serão recolhidas juntas e apenas uma será deixada no valor da string resultante. É assim que a string `“A newline character is written like "\n".”` pode ser expressada:

```javascript
"A newline character is written like \"\\n\"."
```

Strings também precisam ser modeladas como uma série de bits para poder existir dentro do computador. A maneira como o JavaScript faz isso é baseada no padrão ***Unicode***. Esse padrão atribui um número a praticamente todos os caracteres que você precisaria, incluindo caracteres do grego, árabe, japonês, armênio e assim por diante. Se tivermos um número para cada caractere, uma string pode ser descrita por uma sequência de números.

E é isso que o JavaScript faz. Mas há uma complicação: a representação do JavaScript usa 16 bits por elemento de string, que pode descrever até 2<sup>16</sup> caracteres diferentes. Mas o padrão Unicode define mais caracteres do que isso - cerca de duas vezes mais, neste momento. Assim, alguns caracteres, como muitos emojis, ocupam duas “posições de caracteres” em strings JavaScript. Voltaremos a isso no [Capítulo 5](https://github.com/gildoneto/estudando-javascript/blob/main/eloquent-javascript-3rd-edition/05-chapter-5-high-order-functions.md).

Strings não podem ser divididas, multiplicadas ou subtraídas, mas o operador `+` pode ser usado nelas. Ele não adiciona, mas concatena - ele junta duas strings. A linha a seguir produzirá a string `"concatenate"`:

```javascript
"con" + "cat" + "e" + "nate"
```

Os valores de string têm várias funções associadas (métodos) que podem ser usadas para realizar outras operações. Falarei mais sobre isso no [Capítulo 4](https://github.com/gildoneto/estudando-javascript/blob/main/eloquent-javascript-3rd-edition/04-chapter-4-data-structures-objects-and-arrays.md).

Strings escritas com aspas simples ou duplas se comportam da mesma forma - a única diferença é em qual tipo de aspas você precisa escapar dentro delas. Strings com aspas invertidas, geralmente chamadas de ***template literals***, podem fazer mais alguns truques. Além de poder abranger linhas, eles também podem incorporar outros valores.

```javascript
`half of 100 is ${100 / 2}`
```

Quando você escreve algo dentro de `${}` em um *template literal*, seu resultado será calculado, convertido em uma string e incluído nessa posição. O exemplo acima produz ***“half of 100 is é 50”***.

## Operadores unários (Unary operators)

Nem todos os operadores são símbolos. Alguns são escritos como palavras. Um exemplo é o operador `typeof`, que produz um valor de string nomeando o tipo do valor que você fornece.

```javascript
console.log(typeof 4.5)
// → number
console.log(typeof "x")
// → string
```
Usaremos `console.log` no código de exemplo para indicar que queremos ver o resultado da avaliação de algo. Mais sobre isso no [próximo capítulo](https://github.com/gildoneto/estudando-javascript/blob/main/eloquent-javascript-3rd-edition/02-chapter-2-program-structure.md).

Os outros operadores mostrados operaram em dois valores, mas `typeof` aceita apenas um. Operadores que usam dois valores são chamados de **operadores binários**, enquanto aqueles que usam um são chamados de **operadores unários**. O operador `-` pode ser usado tanto como operador binário quanto como operador unário.

```javascript
console.log(- (10 - 2))
// → -8
```

## Valores booleanos (Boolean values)

Muitas vezes é útil ter um valor que tenha apenas duas possibilidades, como “sim” e “não” ou “ligado” e “desligado”. Para este propósito, JavaScript possui um tipo `boolean`, que possui apenas dois valores, `true` e `false`, que são escritos como essas palavras.

### Comparação

Aqui está uma maneira de produzir valores booleanos:

```javascript
console.log(3 > 2)
// → true
console.log(3 < 2)
// → false
```

Os sinais `>` e `<` são os símbolos tradicionais para **“maior que”** e **“menor que”**, respectivamente. São operadores binários. Aplicá-los resulta em um valor `booleano` que indica se eles são verdadeiros nesse caso.

Strings podem ser comparadas da mesma forma.

```javascript
console.log("Aardvark" < "Zoroaster")
// → true
```

A forma como as strings são ordenadas é aproximadamente alfabética, mas não é exatamente o que você esperaria ver em um dicionário: letras maiúsculas são sempre “menores” que as minúsculas, então "Z" < "a" e caracteres não alfabéticos (`!`, `-`, e assim por diante) também estão incluídos na ordenação. Ao comparar strings, o JavaScript percorre os caracteres da esquerda para a direita, comparando os códigos Unicode um por um.

Outros operadores semelhantes são `>=` (maior ou igual), `<=` (menor ou igual), `==` (igual) e `!=` (diferente).

```javascript
console.log("Itchy" != "Scratchy")
// → true
console.log("Apple" == "Orange")
// → false
```

Existe apenas um valor em JavaScript que não é igual a si mesmo, é o `NaN` "Not a number" (“não é um número”).

`NaN` deve denotar o resultado de uma computação sem sentido e, como tal, não é igual ao resultado de qualquer outra computação sem sentido.

## Operadores lógicos (Logical operators)

Existem também algumas operações que podem ser aplicadas aos próprios valores booleanos. JavaScript suporta três operadores lógicos: `E`, `OU`, e `não`. Estes podem ser usados ​​para “raciocinar” sobre booleanos.

O operador `&&` representa o `E` lógico. É um operador binário e seu resultado é verdadeiro somente se ambos os valores dados a ele forem verdadeiros.

```javascript
console.log(true && false)
// → false
console.log(true && true)
// → true
```

O operador `||` denota o `OU` lógico. Ela produz `true` se qualquer um dos valores fornecidos a ela for `true`.

```javascript
console.log(false || true)
// → true
console.log(false || false)
// → false
```

`Não` é escrito como um ponto de exclamação `!`. É um operador unário que inverte o valor dado a ele. `!true` produz `false` e `!false` resulta em `true`.

Nem sempre é óbvio quando os parênteses são necessários ao misturar esses operadores **booleanos** com aritméticos e outros operadores. Na prática, geralmente você pode se virar sabendo que, dos operadores que vimos até agora `||` tem a precedência mais baixa, depois vem `&&`, depois os operadores de comparação (`>`, `==` e assim por diante) e depois o resto. Esta ordem foi escolhida de tal forma que, em expressões típicas como a seguinte, seja necessário o mínimo de parênteses:

```javascript
1 + 1 == 2 && 10 * 10 > 50
```

O último operador lógico que discutirei não é unário, nem binário, mas **ternário**, operando em três valores. É escrito com um ponto de interrogação e dois pontos, desta forma:

```javascript
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2
```

Este é chamado de **operador condicional** (ou às vezes apenas **operador ternário**, pois é o único operador desse tipo na linguagem). O valor à esquerda do ponto de interrogação “escolhe” qual dos outros dois valores sairá. Quando for verdadeiro, ele escolhe o valor do meio, e quando for falso, ele escolhe o valor da direita.

## Valores vazios (Empty values)

Existem dois valores especiais, escritos como `null` e `undefined`, que são usados ​​para denotar a ausência de um valor **significativo**. Eles próprios são valores, mas não carregam nenhuma informação.

Muitas operações na linguagem que não produzem um valor significativo (você verá algumas mais tarde) geram `undefined` simplesmente porque precisam gerar algum valor.

A diferença de significado entre `undefined` e `null` é um acidente do design do JavaScript e não importa na maioria das vezes. Nos casos em que você realmente precisa se preocupar com esses valores, recomendo tratá-los como intercambiáveis.

## Conversão automática de tipo

Na introdução, mencionei que o JavaScript se esforça para aceitar quase qualquer programa que você der a ele, mesmo programas que fazem coisas estranhas. Isso é bem demonstrado pelas seguintes expressões:

```javascript
console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true
```

Quando um operador é aplicado ao tipo de valor “errado”, o JavaScript silenciosamente converterá esse valor para o tipo necessário, usando um conjunto de regras que geralmente não são o que você deseja ou espera. Isso é chamado de coerção de tipo(type coercion). O `null` na primeira expressão se torna `0` e o `"5"` na segunda expressão se torna `5` (de `string` para o `number`). Ainda na terceira expressão, `+` tenta a concatenação de strings antes da adição numérica, então o `1` é convertido em `"1"` (de `number` para `string`).

Quando algo que não é mapeado para um número de maneira óbvia (como `"cinco"` ou `undefined`) é convertido em um número, você obtém o valor `NaN`. Outras operações aritméticas em `NaN` continuam produzindo `NaN`, portanto, se você encontrar uma dessas em um local inesperado, procure por conversões de tipo acidentais.

Ao comparar valores do mesmo tipo usando `==`, o resultado é fácil de prever: você deve obter `true` quando ambos os valores forem iguais, exceto no caso de `NaN`. Mas quando os tipos diferem, o JavaScript usa um conjunto complicado e confuso de regras para determinar o que fazer. Na maioria dos casos, ele apenas tenta converter um dos valores para o tipo do outro valor. No entanto, quando `null` ou `undefined` estiver em qualquer lado do operador, ele produz `true` somente se ambos os lados forem `null` ou `undefined`.

```javascript
console.log(null == undefined);
// → true
console.log(null == 0);
// → false
```

Esse comportamento é muitas vezes útil. Quando você quiser testar se um valor tem um valor real em vez de `null` ou `undefined`, você pode compará-lo com `null` com o operador `==` (ou `!=`).

Mas e se você quiser testar se algo se refere ao valor preciso `false`? Expressões como `0 == false` e `"" == false` também são verdadeiras devido à conversão automática de tipo. Quando você **não** deseja que nenhuma conversão de tipo aconteça, há dois operadores adicionais: `===` e `!==`. O primeiro testa se um valor é **precisamente** igual ao outro, e o segundo testa se não é **precisamente** igual. Portanto, `"" === false` é falso conforme o esperado.

Eu recomendo usar os operadores de comparação de três caracteres defensivamente para evitar que conversões de tipo inesperadas o atrapalhem. Mas quando você tem certeza de que os tipos de ambos os lados serão os mesmos, não há problema em usar os operadores mais curtos.

## Curto-circuito de operadores lógicos

Os operadores lógicos `&&` e `||` lidar com valores de diferentes tipos de uma maneira peculiar. Eles converterão o valor do lado esquerdo para o tipo booleano para decidir o que fazer, mas dependendo do operador e do resultado dessa conversão, eles retornarão o valor original à esquerda ou o valor à direita.

O `||` operador, por exemplo, retornará o valor à sua esquerda quando puder ser convertido em true e retornará o valor à sua direita caso contrário. Isso tem o efeito esperado quando os valores são booleanos e faz algo análogo para valores de outros tipos.

```javascript
console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
```

Podemos usar essa funcionalidade como uma maneira de retornar a um valor padrão. Se você tem um valor que pode estar vazio, você pode colocar `||` depois dele com um valor de reposição. Se o valor inicial puder ser convertido em falso, você receberá a substituição. As regras para converter strings e números em valores booleanos afirmam que `0`, `NaN` e a string vazia `""` contam como `false`, enquanto todos os outros valores contam como `true`. Então `0 || -1` produz `-1` e `"" || "!?"` retorna `"!?"`.

O operador `&&` funciona de forma semelhante, mas de outra forma. Quando o valor à sua esquerda é algo que converte em `false`, ele retorna esse valor e, caso contrário, retorna o valor à sua direita.

Outra propriedade importante desses dois operadores é que a parte à sua direita é avaliada apenas quando necessário. No caso de `true || X`, não importa o que seja `X`, mesmo que seja um programa que faça algo terrível o resultado será `true` e `X` nunca será avaliado. O mesmo vale para `false && X`, que é `false` e ignorará `X`. Isso é chamado de avaliação de curto-circuito(*short-circuit evaluation*).

O operador condicional funciona de maneira semelhante. Do segundo e terceiro valores, apenas o selecionado é avaliado.

## Resumo

Examinamos quatro tipos de valores JavaScript neste capítulo: números, strings, booleanos e valores indefinidos.

Esses valores são criados digitando seu nome (`true`, `null`) ou valor (`13`, `"abc"`). Você pode combinar e transformar valores com operadores. Vimos operadores binários para aritmética (`+`, `-`, `*`, `/` e `%`), concatenação de strings (`+`), comparação (`==`, `!=`, `===`, `!==`, `<`, `>`, `<=`, `>=`), e lógica (`&&`, `||`), bem como vários operadores unários (`-` para negar um número, `!` para negar logicamente e `typeof` para encontrar o tipo de um valor) e um operador ternário (`?:`) para escolher um dos dois valores baseados em um terceiro valor.

Isso fornece informações suficientes para usar o JavaScript como uma calculadora de bolso, mas não muito mais. O próximo capítulo começará a unir essas expressões em programas básicos.

[Ir para o próximo capítulo](https://github.com/gildoneto/estudando-javascript/blob/main/eloquent-javascript-3rd-edition/02-chapter-2-program-structure.md)

[Capítulo anterior](https://github.com/gildoneto/estudando-javascript/blob/main/eloquent-javascript-3rd-edition/01-chapter-1-values-types-operators.md)

[Página principal](https://github.com/gildoneto/estudando-javascript)