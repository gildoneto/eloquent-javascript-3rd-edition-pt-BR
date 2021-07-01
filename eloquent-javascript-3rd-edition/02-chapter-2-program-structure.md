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

...

# Exercícios 

Os exercícios abaixo são propostos pelo autor, abordando o que foi aprendido nos capítulos 1 e 2.

[Clicando aqui](https://github.com/braziljs/eloquente-javascript/blob/master/chapters/02-estrutura-do-programa.md) você pode ler e tentar fazer os exercícios da segunda edição traduzida pela BrazilJS.

Tente fazer os exercícios e depois volte aqui para checar minhas respostas comentadas e as respostas do autor.

### [Exercícios respondidos](https://github.com/gildoneto/estudando-javascript/blob/master/eloquent-javascript-3rd-edition/00-capitulos-1-e-2-exercicios.md) ⬅

