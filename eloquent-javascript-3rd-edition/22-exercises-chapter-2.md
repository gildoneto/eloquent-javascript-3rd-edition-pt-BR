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

##### Looping a Triangle - Minha solução:

Minha primeira resposta: 

- variável `secret` iniciada com uma string vazia

- laço `while` que itera enquanto o tamanho da variável `secret` seja menor do que 7

- durante o laço: 

  - é adicionada a variável `secret` o caractere `#` 
  - `console.log` imprime o valor da variável `secret` a cada iteração 

- fim do código 


  <img src="https://raw.githubusercontent.com/gildoneto/estudando-javascript/master/eloquent-javascript-3rd-edition/img/2.1_looping-a-triangle.png" alt="Answer - 2.1 Looping a Triangle" width="600" />



Abaixo segue a resposta do autor. Por razões óbvias o código dele é menor e mais simples:

Para ver a resposta no site do livro [clique aqui](https://eloquentjavascript.net/code/#2.1), e na página clique em <span style="color:red">look at the solution</span>.

```javascript
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
```

# FizzBuzz 🔢

Escreva um programa que usa o console.log para printar todos os números de 1 a 100, com duas exceções. Para números divisíveis por 3, printe "Fizz" ao invés do número, e para os divisíveis por 5 (e não 3), print "Buzz".

Quando conseguir implementar o proposto acima, modifique seu código para printar "FizzBuzz" para os números que são divisíveis tanto por 3 como por 5, mas que continue printando o "Fizz" e "Buzz" para os números que sejam divisíveis apenas por 3 ou por 5.

(Isto na verdade é uma questão de entrevista bastante usada. Então se você resolver, considere que você terá boas chances de ser contratado.)

------

##### FizzBuzz - Minha solução:

 <img src="https://raw.githubusercontent.com/gildoneto/estudando-javascript/master/eloquent-javascript-3rd-edition/img/2.2_fizzbuzz.png" alt="Answer - 2.2 FizzBuzz" width="600" />

Abaixo resposta do autor. Para ver a resposta no site do livro [clique aqui](https://eloquentjavascript.net/code/#2.2), e na página clique em <span style="color:red">*look at the solution*</span>.

```javascript
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
```

# ChessBoard ♟

Escreva um programa que cria uma string que representa um grid de 8 por 8 (8x8), usando caracteres de [newline](a "nova linha, quebra de linha: '\n' ") para separar as linhas. Cada linha do grid deve começar com um "espaço" ou com um caractere "#". Esses caracteres devem criar um tabuleiro de xadrez.

Passando essa string no console.log() deveria mostrar algo como isso:

```javascript
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
```

Quando você escrever um programa que gera esse padrão, defina um binding `size = 8` e mude o programa pra que ele funcione com qualquer tamanho, exibindo assim um grid que terá altura e largura igual ao valor dado a `size`.

##### ChessBoard - Minha solução:

 <img src="https://raw.githubusercontent.com/gildoneto/estudando-javascript/master/eloquent-javascript-3rd-edition/img/2.3_chessboard.png" alt="Answer - 2.3 ChessBoard" width="600" />

Abaixo resposta do autor. Para ver a resposta no site do livro [clique aqui](https://eloquentjavascript.net/code/#2.3), e na página clique em <span style="color:red">look at the solution</span>.

```javascript
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
```

