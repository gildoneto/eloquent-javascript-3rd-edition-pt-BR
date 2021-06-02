---
typora-root-url: img
---

# Looping a Triangle

Escreva um loop que faça sete chamadas para o console.log retornar o seguinte triângulo:

```
#
##
###
####
#####
######
#######
```

Pode ser útil saber que você pode acessar o tamanho de uma string escrevendo`.length`  depois dela.

```javascript
let palavra = "ECMA";
console.log(palavra.length);
// → 4
```

------

##### Looping a Triangle - RESPOSTA

Minha primeira resposta: 

- variável `secret` iniciada com uma string vazia
- laço `while` que itera enquanto o tamanho da variável `secret` seja menor do que 7
- durante o laço: 
  - é adicionada a variável `secret` o caractere `#` 
  - `console.log` imprime o valor da variável `secret` a cada iteração 
- fim do código 

[01_looping-a-triangle.png ](https://raw.githubusercontent.com/gildoneto/estudando-javascript/master/eloquent-javascript-3rd-edition/img/01_looping-a-triangle.png)

Abaixo segue a resposta do autor. Por razões óbvias o código dele é menor e mais simples:

```javascript
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
```

------

# FizzBuzz





Em construção 👷 🚧 

...