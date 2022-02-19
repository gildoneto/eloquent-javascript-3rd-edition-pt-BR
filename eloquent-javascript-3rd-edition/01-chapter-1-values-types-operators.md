# 1. Valores, Tipos e Operadores

[Values, Types, and Operators :: Eloquent JavaScript](https://eloquentjavascript.net/01_values.html)

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