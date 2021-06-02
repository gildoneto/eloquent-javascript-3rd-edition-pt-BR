# 1. Valores, Tipos e Operadores

[Values, Types, and Operators]([Values, Types, and Operators :: Eloquent JavaScript](https://eloquentjavascript.net/01_values.html))

Neste capítulo aprendemos:

### Quatro tipos de de valores (*values*) no JavaScript: ###

- Números (*numbers*)
- Strings
- Booleanos (*booleans*)
- Valores Indefinidos (*undefined vales*)

Esses tipos são criados escrevendo seus nomes ou valores.

```javascript
//BOOLEAN
let isNumber = true;

//UNDEFINED
let count = null;

//NUMBER
let mediaFinal = 7;

//STRING
let userName = "Gildo Neto";
```

Podemos combinar e transformar valores com operadores(*operators*). 

### Operadores binários para operações aritméticas:

- Soma (*addition*) `+`
- Subtração (*subtraction*) `-`
- Multiplicação (*multiplication*) `*`
- Divisão (*division*) `/`
- Resto (*remainder*) `%`

```javascript
//EXAMPLES

3 + 4 * 7
//result → 31

(3 + 4) * 7
//result → 49

20 - 8 / 2
//result → 16

(20 - 8) / 2
//result → 6
```

OBS.: quando os operadores aparecem juntos sem parênteses, a ordem que eles serão aplicados é determinada pela *precedência* deles. Os exemplos acima mostram que a multiplicação ocorre antes da adição. O operador  `/`  possui a mesma precedência que  `*`  e, de forma similar, os operadores  `+` e `-` possuem a mesma precedência entre si. Quando vários operadores de mesma precedência aparecem próximos uns aos outros, como por exemplo  `1 - 2 + 1` , eles são aplicados da esquerda para a direita:  `(1 - 2) + 1` . Na dúvida, adicione parênteses.

### Operador binário para concatenação de strings: `+` ###

```javascript
//STRING CONCATENATION

let nome = "Marijn";
let sobrenome = "Haverbeke";

console.log(nome + sobrenome);
//result → MarijnHaverbeke

console.log(nome + " " + sobrenome);
//result → Marijn Haverbeke
```

### Operadores binários de comparação e lógica:

##### Operadores de comparação (*comparison operators*) retornam resultados booleanos.

- Maior que (*is greater than*): `>`
- Menor que (*is less than*): `<`
- Maior ou igual (*greater than or equal to*): `>=`
- Menor ou igual (*less than or equal to*): `<=`
- Igual (*equal to*): `==`
- Diferente (*not equal to*): `!=`

```javascript
// COMPARISON

console.log(40 > 20)
// → true
console.log(90 < 10)
// → false

console.log(22 == 22)
// → true
console.log(22 != 22)
// → false
```

Strings também podem ser comparadas da mesma forma, onde serão comparadas no aspecto da ordem alfabética, que neste caso não é exatamente igual ao dicionário.

Letras maiusculas serão sempre menores que letras minúsculas, então considere que "a" é maior que "B" por exemplo. E os caracteres não alfabéticos como `*` ou `^` também são inclusos na ordenação.

A comparação de strings pelo JavaScript é feita da esquerda para a direita, passando por cada codigo Unicode um por um.

##### Operadores de lógica (*logical operators*)

- e (*and*): `&&`

- ou (*or*): `||`

- negação (*not*): `!` 

  > *Not*, em português *não*, é escrito usando um ponto de exclamação (`!`). Ele é um **operador unário** que inverte o valor que é dado à ele. Por exemplo, `!true` produz `false` e `!false` produz `true`.
  >
  > *Trecho retirado da tradução da segunda edição pela BrasilJS*

##### Operador condicional (*conditional operator*)

Também chamado de *operador ternário* visto que é o único deste tipo no JavaScript. É escrito com uma *interrogação* `?` e *dois pontos* `:`

```javascript
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2
```

O valor a esquerda da interrogação "escolhe" qual dos outros dois valores a direita irá retornar. Quando for `true` retorna o primeiro valor, quando `false` retorna o segundo.

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

Em construção 👷 🚧 

# Exercícios 

Os exercícios abaixo são propostos pelo autor, abordando o que foi aprendido nos capítulos 1 e 2.

[Clicando aqui](https://github.com/braziljs/eloquente-javascript/blob/master/chapters/02-estrutura-do-programa.md) você pode ler e tentar fazer os exercícios da segunda edição traduzida pela BrazilJS.

Tente fazer os exercícios e depois volte aqui para checar minhas respostas comentadas e as respostas do autor.

### Looping a Triangle

