# 4. Estrutura de Dados: Objetos e Arrays

> Em duas ocasiões me perguntaram: "Ora, Sr. Babbage, se você colocar números errados em uma máquina, respostas certas irão sair?" [...] Certamente eu não sou capaz de compreender o tipo de confusão de ideias que poderia provocar tal questionamento.
>
> — Charles Babbage, Passages from the Life of a Philosopher (1864)

[stack]: ## "stack"
[statement]: ## "statement"

Números, booleanos e strings são os átomos a partir dos quais as estruturas de dados são construídas. Muitos tipos de informação requerem mais de um átomo, no entanto. Os objetos nos permitem agrupar valores - incluindo outros objetos - para construir estruturas mais complexas.

Os programas que construímos até agora foram limitados pelo fato de operarem apenas em tipos de dados simples. Este capítulo irá apresentar as estruturas de dados básicas. Ao final, você saberá o suficiente para começar a escrever programas úteis.

O capítulo trabalhará por meio de um exemplo de programação mais ou menos realista, introduzindo conceitos conforme se aplicam ao problema em questão. O código de exemplo geralmente se baseia em funções e associações que foram introduzidas anteriormente no texto.



### The Weresquirrel

De vez em quando, geralmente entre às 20h00 e 22h, Jacques se transforma em um pequeno roedor peludo com cauda espessa.

Por um lado, Jacques está muito feliz por não ter licantropia clássica. Transformar-se em esquilo causa menos problemas do que transformar-se em lobo. Em vez de ter que se preocupar em comer acidentalmente o vizinho (isso seria estranho), ele se preocupa em ser comido pelo gato do vizinho. Depois de duas ocasiões em que acordou em um galho precariamente fino na copa de um carvalho, nu e desorientado, ele começou a trancar as portas e janelas de seu quarto à noite e a colocar algumas nozes no chão para se manter ocupado.

Isso resolve os problemas do gato e da árvore. Mas Jacques prefere livrar-se totalmente de sua condição. As ocorrências irregulares da transformação fazem ele suspeitar que podem ser desencadeadas por algo. Por um tempo, ele acreditou que isso acontecia apenas nos dias em que estava perto de carvalhos. Mas evitar os carvalhos não impediu o problema.

Mudando para uma abordagem mais científica, Jacques começou a manter um registro diário de tudo o que ele faz em um determinado dia e se ele mudou de forma. Com esses dados, ele espera estreitar as condições que desencadeiam as transformações.

A primeira coisa que ele precisa é de uma estrutura de dados para armazenar essas informações.



### Conjunto de Dados

Para trabalhar com um pedaço de dados digitais, primeiro teremos que encontrar uma maneira de representá-los na memória de nossa máquina. Digamos, por exemplo, que queremos representar uma coleção dos números 2, 3, 5, 7 e 11.

Poderíamos ser criativos com strings - afinal, strings podem ter qualquer comprimento (`length`), então podemos colocar muitos dados neles - e usar `"2 3 5 7 11"` como nossa representação. Mas isso é estranho. Você teria que extrair os dígitos de alguma forma e convertê-los de volta em números para acessá-los.

Felizmente, o JavaScript fornece um tipo de dados especificamente para armazenar sequências de valores. É chamado de `array` e é escrito como uma lista de valores entre colchetes, separados por vírgulas.

````javascript
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3
````

A notação para obter os elementos dentro de um array também usa colchetes. Um par de colchetes imediatamente após uma expressão, com outra expressão dentro deles, pesquisará o elemento na expressão à esquerda que corresponde ao índice fornecido pela expressão entre colchetes.

O primeiro índice de um array é zero, não um. Portanto, o primeiro elemento é recuperado com `listOfNumbers[0]`. A contagem baseada em zero tem uma longa tradição em tecnologia e, de certa forma, faz muito sentido, mas leva algum tempo para se acostumar. Pense no índice como a quantidade de itens a pular, contando a partir do início do array.



### Propriedades

Vimos algumas expressões de aparência suspeita como `myString.length` (para obter o comprimento de uma string) e `Math.max` (a função máxima) nos capítulos anteriores. Essas são expressões que acessam a ***propriedade*** de algum valor. No primeiro caso, acessamos a propriedade `length` do valor em `myString`. No segundo, acessamos a propriedade chamada `max` no objeto `Math` (que é uma coleção de constantes e funções relacionadas à matemática).

Quase todos os valores de JavaScript têm propriedades. As exceções são `null` e `undefined`. Se você tentar acessar uma propriedade em um desses valores sem valor, receberá um erro.

````javascript
null.length;
// → TypeError: null has no properties
````

As duas formas principais de acessar propriedades em JavaScript são com um ponto e entre colchetes. Tanto `value.x` quanto `value[x]` acessam uma propriedade em `value` — mas não necessariamente a mesma propriedade. A diferença está em como `x` é interpretado. Ao usar um ponto, a palavra após o ponto é o nome literal da propriedade. Ao usar colchetes, a expressão entre os colchetes é avaliada para obter o nome da propriedade. Enquanto `value.x` busca a propriedade do valor denominado “x”, o `valor[x]` tenta avaliar a expressão `x` e usa o resultado, convertido em uma string, como o nome da propriedade.

Portanto, se você souber que a propriedade na qual está interessado se chama `color`, diga `value.color`. Se você deseja extrair a propriedade nomeada pelo valor contido na variável `i`, diga `value[i]`. Os nomes das propriedades são strings. Eles podem ser qualquer string, mas a notação de ponto funciona apenas com nomes de variáveis válidos. Portanto, se você deseja acessar uma propriedade chamada *2* ou *John Doe*, deve usar colchetes: `value[2]` ou `value["John Doe"]`.

Os elementos em um array são armazenados como *propriedades do array*, usando números como nomes de propriedade. Como você não pode usar a notação de ponto com números e geralmente deseja usar uma variável que contenha o índice de qualquer maneira, é necessário usar a notação de colchetes para chegar até eles.

A propriedade `length` de um array nos diz quantos elementos ele possui. Este nome de propriedade é um nome de variável válido e sabemos seu nome com antecedência, portanto, para encontrar o comprimento de um array, você normalmente escreve `array.length` porque é mais fácil de escrever do que `array["length"]`.


### Métodos

Os valores de string e array contêm, além da propriedade `length`, várias propriedades que contêm valores de função.

````javascript
let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH
````
Cada string possui uma propriedade `toUpperCase`. Quando chamado, ele retornará uma cópia da string com todas as letras convertidas em maiúsculas. Existe também o `toLowerCase`, que faz exatamente o oposto.

Curiosamente, embora a chamada para `toUpperCase` não passe nenhum argumento, a função de alguma forma tem acesso à string `"Doh"`, o valor cuja propriedade chamamos. Como isso funciona é descrito no [capítulo 6](https://github.com/gildoneto/estudando-javascript/blob/main/eloquent-javascript-3rd-edition/06-chapter-6-the-secret-life-of-objects.md).

Propriedades que contêm funções são geralmente chamadas de *métodos* do valor ao qual pertencem, assim como em “`toUpperCase` é um método de uma string”.

Este exemplo demonstra dois métodos que você pode usar para manipular arrays:

```javascript
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]
```
O método `push` adiciona valores ao final de um array, e o método `pop` faz o oposto, removendo o último valor do array e retornando-o.

Esses nomes um tanto bobos são os termos tradicionais para operações em uma [pilha][stack]. Uma pilha, na programação, é uma estrutura de dados que permite inserir valores nela e retirá-los novamente na ordem oposta para que o que foi adicionado por último seja removido primeiro. Eles são comuns na programação - você deve se lembrar da pilha de chamadas de função do capítulo anterior, que é uma instância da mesma ideia.

### Objetos

Voltando para o Weresquirrel. Um conjunto de entradas de registro diárias pode ser representado como um array. Mas as entradas não consistem em apenas um número ou uma string - cada entrada precisa armazenar uma lista de atividades e um valor booleano que indica se Jacques se transformou em um esquilo ou não. Idealmente, gostaríamos de agrupá-los em um único valor e, em seguida, colocar esses valores agrupados em um array de entradas de registro.

Os valores do tipo *objeto* são coleções arbitrárias de propriedades. Uma maneira de criar um objeto é usando colchetes como uma expressão.

```javascript
let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false
```
Dentro das chaves, há uma lista de propriedades separadas por vírgulas. Cada propriedade possui um nome seguido por dois pontos e um valor. Quando um objeto é escrito em várias linhas, identá-lo como no exemplo ajuda a facilitar a leitura. Propriedades cujos nomes não são variáveis ou números válidos precisam estar entre aspas.

```javascript
let descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree"
};
```
Isso significa que colchetes têm dois significados em JavaScript. No início de uma [instrução][statement], eles iniciam um bloco de instruções. Em qualquer outra posição, eles descrevem um objeto. Felizmente, raramente é útil iniciar uma instrução com um objeto entre colchetes, portanto, a ambigüidade entre os dois não é um grande problema.

Ler uma propriedade que não existe lhe dará o valor `undefined`.

É possível atribuir um valor a uma expressão de propriedade com o operador `=`. Isso substituirá o valor da propriedade, se já existia, ou criará uma nova propriedade no objeto, se não existir.

Retornando brevemente ao nosso modelo de tentáculo de associação de variáveis - associações de propriedades são semelhantes. Elas *recebem* valores, mas outras variáveis e propriedades podem estar associadas a esses mesmos valores. Você pode pensar nos objetos como polvos com um número qualquer de tentáculos, cada um deles com um nome tatuado.

O operador `delete` corta um tentáculo desse polvo. É um operador unário que, quando aplicado a uma propriedade do objeto, irá remover a propriedade nomeada do objeto. Isso não é algo comum, mas é possível.

```javascript
let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true
```
O operador binário `in`, quando aplicado a uma string e a um objeto, informa se aquele objeto tem uma propriedade com aquele nome. A diferença entre definir uma propriedade como `undefined` e realmente excluí-la é que, no primeiro caso, o objeto ainda tem a propriedade (ele apenas não tem um valor muito interessante), enquanto no segundo caso a propriedade não existe mais e `in` retornará `false`.

Para descobrir quais propriedades um objeto possui, você pode usar a função `Object.keys`. Você passa um objeto como parêmetro e ele retorna um array de strings - os nomes das propriedades do objeto.

```javascript
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]
```
Existe uma função `Object.assign` que copia todas as propriedades de um objeto para outro.

```javascript
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}
```
Arrays, então, são apenas um tipo de objeto especializado para armazenar sequências de coisas. Se você avaliar `typeof []`, ele retorna um `" objeto "`. Você pode interpretá-los como polvos com longos tentáculos de tamanhos semelhantes, ordenados em linha e rotulados com números.

Vamos representar o diário que Jacques como um array de objetos.

```javascript
let journal = [
  {events: ["work", "touched tree", "pizza",
            "running", "television"],
   squirrel: false},
  {events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
   squirrel: false},
  {events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
   squirrel: true},
  /* and so on... */
];
```

### Mutabilidade

Em breve chegaremos à programação de fato. Primeiro, há mais uma parte da teoria para entender.

Vimos que os valores dos objetos podem ser modificados. Os tipos de valores discutidos nos capítulos anteriores, como números, strings e booleanos, são todos ***imutáveis*** - é impossível alterar os valores desses tipos. Você pode combiná-los e derivar novos valores deles, mas quando você pega um valor de string específico, esse valor sempre permanecerá o mesmo. O texto dentro dele não pode ser alterado. Se você tem uma string que contém `"cat"`, não é possível para um outro código alterar um caractere em sua string para fazê-lo soletrar `"rat"`.

Os objetos funcionam de maneira diferente. Você pode alterar suas propriedades, fazendo com que um único valor de objeto tenha conteúdo diferente em momentos diferentes.

Quando temos dois números, 120 e 120, podemos considerar precisamente que são o mesmo número, quer se refiram ou não aos mesmos bits físicos. Com objetos, há uma diferença entre ter duas referências ao mesmo objeto e ter dois objetos diferentes que contêm as mesmas propriedades.
Considere o seguinte código:

```javascript
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
```



Em construção 👷 🚧 é sentença `
```javascript
```

<!-- <img src="" alt="muuda o texto aqui" align="left"/> --> 
### Mutabilidade