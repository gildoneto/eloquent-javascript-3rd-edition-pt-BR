# Looping a Triangle 🔺

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


  <img src="https://raw.githubusercontent.com/gildoneto/estudando-javascript/master/eloquent-javascript-3rd-edition/img/01_looping-a-triangle.png" alt="01_looping-a-triangle.png" width="600" />
  


Abaixo segue a resposta do autor. Por razões óbvias o código dele é menor e mais simples:



```javascript
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
```

------

# FizzBuzz 🔢

Escreva um programa que usa o console.log para printar todos os números de 1 a 100, com duas exceções. Para números divisíveis por 3, printe "Fizz" ao invés do número, e para os divisíveis por 5 (e não 3), print "Buzz".

Quando conseguir implementar o proposto acima, modifique seu código para printar "FizzBuzz" para os números que são divisíveis tanto por 3 como por 5, mas que continue printando o "Fizz" e "Buzz" para os números que sejam divisíveis apenas por 3 ou por 5.



Em construção 👷 🚧 

...