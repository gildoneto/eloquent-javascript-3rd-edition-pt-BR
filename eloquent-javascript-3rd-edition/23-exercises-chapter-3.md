# Minimum ➖

O capítulo anterior introduziu a função padrão `Math.min` que retorna seu menor argumento. Podemos construir algo assim agora. Escreva uma função `min` que receba dois argumentos e retorne o menor deles.

------

##### Minimum ➖ - Minha solução:

<img src="https://github.com/gildoneto/estudando-javascript/blob/main/eloquent-javascript-3rd-edition/img/3.1_minimum.png" alt="Answer - 3.1 Minimum" width="600" />

Abaixo resposta do autor. Para ver a resposta no site do livro [clique aqui](https://eloquentjavascript.net/code/#3.1), e na página clique em <span style="color:red">*look at the solution*</span>.
 ```javascript
function min(a, b) {
  if (a < b) return a;
  else return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
 ```
# Recursion 🔁

Vimos que `%` (o operador de resto) pode ser usado para testar se um número é par ou ímpar usando `% 2` para ver se ele é divisível por dois. Esta é outra maneira de definir se um número inteiro positivo é par ou ímpar:

    - Zero é par.
    - Um é ímpar.
    - Para qualquer outro número *N*, sua uniformidade é igual a `N - 2`.

Defina uma função recursiva `isEven` de acordo com esta descrição. A função deve aceitar um único parâmetro (um número inteiro positivo) e retornar um booleano.

Teste com os valores `50` e `75`. Veja como se comporta com o valor `-1`. Por quê? Você pode pensar em uma maneira de consertar isso?
------

##### Recursion 🔁 - Minha solução:

<img src="" alt="Answer - Recursion" width="600" />


# Bean Counting #️⃣

Você pode obter o enésimo caractere, ou letra, de uma string escrevendo "string"[N]. O valor retornado será uma string contendo apenas um caractere (por exemplo, "b"). O primeiro caractere tem posição 0, o que faz com que o último seja encontrado na posição string.length - 1. Em outras palavras, uma string de dois caracteres tem comprimento 2 e seus caracteres têm posições 0 e 1.

Escreva uma função `countBs` que recebe uma string como seu único argumento e retorna um número que indica quantos caracteres “B” maiúsculos existem na string.

Em seguida, escreva uma função chamada countChar que se comporte como countBs, mas que recebe um segundo argumento que indica o caractere que deve ser contado (em vez de contar apenas caracteres “B” maiúsculos). Reescreva countBs para usar essa nova função.

------

##### Bean Counting #️⃣ - Minha solução:

<img src="" alt="Answer - Bean Counting" width="600" />

Em construção 👷 🚧 

<!-- <img src="" alt="Answer - Minimum" width="600" /> --> 