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
As variáveis `object1` e` object2` pegam o mesmo objeto, razão pela qual alterar `object1` também altera o valor de` object2`. Diz-se que eles têm a mesma identidade. A variável `object3` aponta para um objeto diferente, que inicialmente contém as mesmas propriedades de` object1`, mas vive uma vida separada.

As variáveis também podem ser alteráveis ou constantes, mas isso é diferente da maneira como seus valores se comportam. Mesmo que os valores numéricos não mudem, você pode usar uma variável `let` para acompanhar a mudança de um número, alterando o valor para o qual a variável aponta. Da mesma forma, embora uma variável `const` apontando para um objeto não possa ser alterada e continuará a apontar para o mesmo objeto, o conteúdo desse objeto pode mudar.

```javascript
const score = {visitors: 0, home: 0};
// This is okay
score.visitors = 1;
// This isn't allowed
score = {visitors: 1, home: 1};
```
Quando você compara objetos com o operador `==` do JavaScript, ele compara por identidade: ele produzirá `true` apenas se ambos os objetos tiverem precisamente o mesmo valor. Comparar objetos diferentes retornará `false`, mesmo se eles tiverem propriedades idênticas. Não existe uma operação de comparação “profunda” incorporada ao JavaScript, que compara objetos por conteúdo, mas é possível escrever você mesmo (que é um dos exercícios no final deste capítulo).


### O Diário do Licantropo

Então, Jacques inicia seu interpretador JavaScript e configura o ambiente de que precisa para manter seu diário.

```javascript
let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}
```

Observe que o objeto adicionado ao diário parece um pouco estranho. Em vez de declarar propriedades como `events: events`, ele apenas fornece um nome de propriedade. Isso é uma abreviatura que significa a mesma coisa - se um nome de propriedade na notação de chaves não for seguido por um valor, seu valor será obtido da associação com o mesmo nome.

Então, todas as noites às 22h - ou às vezes na manhã seguinte, depois de descer da prateleira de cima de sua estante - Jacques registra o dia.

```javascript
addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);
```
Assim que tiver dados suficientes, ele pretende usar estatística para descobrir quais desses eventos podem estar relacionados às esquilosidades.

A *correlação* é uma medida de dependência entre variáveis estatísticas. Uma variável estatística não é exatamente o mesmo que uma variável de programação. Em estatística, você normalmente tem um conjunto de *medidas*, e cada variável é medida para cada medida. A correlação entre as variáveis é geralmente expressa como um valor que varia de -1 a 1. A correlação zero significa que as variáveis não estão relacionadas. A correlação de um indica que os dois estão perfeitamente relacionados - se você conhece um, também conhece o outro. Negativo também significa que as variáveis estão perfeitamente relacionadas, mas que são opostas - quando uma é verdadeira, a outra é falsa.

Para calcular a medida de correlação entre duas variáveis booleanas, podemos usar o *coeficiente phi (ϕ)*. Esta é uma fórmula cuja entrada é uma tabela de frequência contendo o número de vezes que as diferentes combinações das variáveis foram observadas. O resultado da fórmula é um número entre -1 e 1 que descreve a correlação.

Poderíamos pegar o evento de comer pizza e colocá-lo em uma tabela de frequência como esta, onde cada número indica a quantidade de vezes que essa combinação ocorreu em nossas medições:


<img src="https://raw.githubusercontent.com/gildoneto/estudando-javascript/87fa51fdf045f2e658ce2d872e1b50dbdf0f4797/eloquent-javascript-3rd-edition/img/pizza-squirrel.svg" alt="pizza squirrel" align="center"/>

$$

ϕ =	n11n00 − n10n01/n1•n0•n•1n•0

$$

(Se neste ponto você está colocando o livro de lado para se concentrar em um terrível flashback da aula de matemática do ensino médio - espere! Não pretendo torturá-lo com páginas intermináveis de notação enigmática - é apenas uma fórmula por enquanto. E mesmo com esta, tudo o que fazemos é transformá-lo em JavaScript.)

A notação n01 indica o número de medições onde a primeira variável (squirrelness) é falsa (0) e a segunda variável (pizza) é verdadeira (1). Na mesa da pizza, n01 é 9.

O valor n1• refere-se à soma de todas as medições em que a primeira variável é verdadeira, que é 5 na tabela de exemplo. Da mesma forma, n•0 se refere à soma das medidas em que a segunda variável é falsa.

Então, para a mesa de pizza, a parte acima da linha de divisão (o dividendo) seria 1×76−4×9=40, e a parte abaixo dela (o divisor) seria a raiz quadrada de 5×85×10×80 ou √340000. Isso resulta em ϕ ≈ 0,069, o que é minúsculo. Comer pizza não parece ter influência nas transformações.

### Calculando a correlação

Podemos representar uma tabela dois por dois em JavaScript com um array de quatro elementos (`[76, 9, 4, 1]`). Também podemos usar outras representações, como um array contendo dois arrays de dois elementos (`[[76, 9], [4, 1]]`) ou um objeto com nomes de propriedade como `" 11 "` e `" 01 "` , mas o array plano é simples e torna as expressões que acessam a tabela agradavelmente curtas. Iremos interpretar os índices do array como números binários de dois bits, onde o dígito mais à esquerda (mais significativo) se refere à variável esquilo e o dígito mais à direita (menos significativo) se refere à variável de evento. Por exemplo, o número binário `10` se refere ao caso em que Jacques se transformou em um esquilo, mas o evento (say, "pizza") não ocorreu. Isso aconteceu quatro vezes. E como o binário `10` é 2 em notação decimal, armazenaremos esse número no índice 2 do array.

Esta é a função que calcula o coeficiente ϕ de um array como esse:

```javascript
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));
// → 0.068599434
```
Esta é uma tradução direta da fórmula ϕ em JavaScript. `Math.sqrt` é a função de raiz quadrada fornecida pelo objeto` Math` em um ambiente JavaScript padrão. Temos que adicionar dois campos da tabela para obter campos como n1• porque as somas de linhas ou colunas não são armazenadas diretamente em nossa estrutura de dados.

Jacques manteve seu diário por três meses. O conjunto de dados resultante está disponível no [coding sandbox](https://eloquentjavascript.net/code/#4) deste capítulo, onde é armazenado na variável `JOURNAL` e em um [arquivo para download](https://eloquentjavascript.net/code/journal.js).

Para extrair uma tabela dois por dois para um evento específico do diário, devemos fazer um loop em todas as entradas e registrar quantas vezes o evento ocorre em relação às transformações de esquilo.

```javascript
function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]
```
Os arrays têm um método `includes` que verifica se um determinado valor existe no array. A função usa isso para determinar se o nome do evento no qual está interessada faz parte da lista de eventos de um determinado dia.

O corpo do loop da função `tableFor` descobre em qual caixa na tabela cai cada entrada de diário , verificando se a entrada contém o evento específico em que está interessado e se o evento acontece ao lado de um incidente de esquilo. O loop então adiciona um à caixa correta na tabela.

Agora temos as ferramentas de que precisamos para calcular correlações individuais. A única etapa restante é encontrar uma correlação para cada tipo de evento que foi registrado e ver se algo se destaca.

### Loops de Array

Na função `tableFor` existe um loop como este:

```javascript
for (let i = 0; i < JOURNAL.length; i++) {
  let entry = JOURNAL[i];
  // Do something with entry
}
```
Esse tipo de loop é comum no JavaScript clássico - examinar arrays um elemento por vez é algo que surge muito e, para fazer isso, você executaria um contador ao longo do comprimento do array e escolheria cada elemento por vez.

Existe uma maneira mais simples de escrever esses loops em JavaScript moderno.

```javascript
for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events.`);
}
```
Um loop `for` como esse, com a palavra` of` após uma declaração de variável,  fará um loop sobre os elementos do valor dado após `of`. Isso funciona não apenas para arrays, mas também para strings e algumas outras estruturas de dados. Discutiremos como isso funciona no [capítulo 6](https://github.com/gildoneto/estudando-javascript/blob/main/eloquent-javascript-3rd-edition/06-chapter-6-the-secret-life-of-objects.md).


### A Análise Final

Precisamos calcular uma correlação para cada tipo de evento que ocorre no conjunto de dados. Para fazer isso, primeiro precisamos encontrar todos os tipos de eventos.

```javascript
function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

console.log(journalEvents(JOURNAL));
// → ["carrot", "exercise", "weekend", "bread", …]
```
Ao examinar todos os eventos e adicionar aqueles que ainda não estão no array `events`, a função coleta todos os tipos de evento.

Usando isso, podemos ver todas as correlações.

```javascript
for (let event of journalEvents(JOURNAL)) {
  console.log(event + ":", phi(tableFor(event, JOURNAL)));
}
// → carrot:   0.0140970969
// → exercise: 0.0685994341
// → weekend:  0.1371988681
// → bread:   -0.0757554019
// → pudding: -0.0648203724
// and so on...
```
A maioria das correlações parece estar perto de zero. Comer cenoura, pão ou pudim aparentemente não desencadeia a licantropia do esquilo. Parece ocorrer com mais frequência nos fins de semana. Vamos filtrar os resultados para mostrar apenas correlações maiores que 0,1 ou menores que -0,1.

```javascript
for (let event of journalEvents(JOURNAL)) {
  let correlation = phi(tableFor(event, JOURNAL));
  if (correlation > 0.1 || correlation < -0.1) {
    console.log(event + ":", correlation);
  }
}
// → weekend:        0.1371988681
// → brushed teeth: -0.3805211953
// → candy:          0.1296407447
// → work:          -0.1371988681
// → spaghetti:      0.2425356250
// → reading:        0.1106828054
// → peanuts:        0.5902679812
```
Aha! Existem dois fatores com uma correlação que é claramente mais forte do que os outros. Comer amendoim tem um forte efeito positivo na chance de se transformar em um esquilo, enquanto escovar os dentes tem um efeito negativo significativo.

Interessante. Vamos tentar algo.

```javascript
for (let entry of JOURNAL) {
  if (entry.events.includes("peanuts") &&
     !entry.events.includes("brushed teeth")) {
    entry.events.push("peanut teeth");
  }
}
console.log(phi(tableFor("peanut teeth", JOURNAL)));
// → 1
```
Esse é um resultado forte. O fenômeno ocorre justamente quando Jacques come amendoim e deixa de escovar os dentes. Se ele não fosse tão desleixado com a higiene dental, ele nunca teria notado sua aflição.

Sabendo disso, Jacques para de comer amendoim completamente e descobre que suas transformações não voltam.

Por alguns anos, as coisas foram muito bem para Jacques. Mas em algum momento ele perdeu o emprego. Por morar em um país horrível, onde não ter emprego significa não ter serviços médicos, ele é forçado a trabalhar em um circo onde atua como O Incrível Homem Esquilo, enchendo a boca de pasta de amendoim antes de cada show.

Um dia, farto desta existência lamentável, Jacques não consegue voltar à sua forma humana, salta por uma fenda na tenda do circo e desaparece na floresta. Ele nunca mais foi visto.


Em construção 👷 🚧 é sentença `

```javascript
```

<!-- <img src="" alt="muuda o texto aqui" align="left"/> --> 