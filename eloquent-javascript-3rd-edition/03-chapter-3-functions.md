# 3. Funções

[Functions](https://eloquentjavascript.net/03_functions.html)

[binding]: ##	"atribuir um nome a um trecho de código"
[statement]: ## "statement"
[body]: ## "body"
[braces]: ## "braces {}"
[keyword]: ## "keyword"

> "As pessoas pensam que ciência da computação é a arte dos gênios, mas na verdade é oposto, apenas algumas pessoas fazendo coisas que se constroem umas sobre as outras, como uma parede de mini pedras."
>
> -- Donald Knuth

Funções são o pão e a manteiga da programação JavaScript. Existem diversas formas de usar o conceito de envelopar/embrulhar/isolar um pedaço de programa em um valor. Isso nos dá uma maneira de estruturar programas bem maiores, para reduzir repetição, associar nomes a subprogramas, e isolar esses subprogramas um dos outros .

A aplicação de funções mais óbvia seria como definir um novo vocabulário. Criar novas palavras em prosa provavelmente não seria uma boa ideia. Mas em programação, isso é indispensável.

Um típico americano adulto tem cerca de 20.000 palavras em seu vocabulário. Algumas linguagens de programação trazem internamente cerca de 20.000 comandos. E o vocabulário que é disponibilizado tende a ser mais precisamente definido, e portanto, menos flexível que a linguagem humana. De qualquer forma, geralmente temos que introduzir novos conceitos para evitar que a gente se repita demasiadamente.



### Definindo uma Função (Defining a Function)

A definição de função é um [binding][binding] comum onde o valor desse binding é uma função. Por exemplo, este código define `square` para se referir a função que produz o **quadrado** de um dado número:

````javascript
const square = function(x) {
  return x * x;
};

console.log(square(12));
// → 144
````

Uma função é criada com uma expressão que inicia com a *keyword* `function`. Funções tem uma série de parâmetros (neste caso, somente `x`) e um [corpo][body], que contém [sentenças][statement] que são executadas quando a função é chamada. O [corpo][body] de uma função criada desta forma deve estar sempre entre [chaves][braces], mesmo que tenha apenas uma única [sentença][statement].

Uma função pode ter múltiplos parâmetros ou até não ter nenhum. No exemplo a seguir, `makeNoise`  não possui nenhum parâmetro, enquanto que `power` tem dois:

````javascript
const makeNoise = function() {
  console.log("Pling!");
};

makeNoise();
// → Pling!

const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));
// → 1024
````

Algumas funções produzem um valor, como `power` e `square`, e outras não, assim como `makeNoise`, que resulta apenas num *side effect*. Uma sentença `return` determina o valor que a função retorna. Quando o controle se depara com essa afirmação, ele sai imediatamente da função atual e devolve o valor de retorno para o código que chamou a função. A [palavra reservada][keyword] `return` sem a expressão depois dela fará com que a função retorne `undefined`. Funções que não tem uma [sentença][statement] `return`, como `makeNoise`, também retornam `undefined`.

Os parâmetros para uma função se comportam como um [binding][binding] comum, mas seus valores iniciais são dados por quem chama a função, e não pelo função propriamente dita.



### Bindings e Escopos

Cada [binding][binding] tem um escopo, que é a parte do programa onde o binding é visível. Para bindings definidos fora de uma função ou bloco, o escopo é todo o programa, você poderá acessá-los quando quiser. Esses são chamados de ***Global*** (globais).

Bindings criados para parâmetros de funções ou declarados dentro de uma função, só podem ser acessados na função, esses são conhecidos como ***Local*** bindings. Cada vez que a função é chamada, novas instâncias desses bindings são criados. Isso proporciona um isolamento entre funções, cada função atua no seu próprio mundo (seu ambiente local) e pode ser entendida sem necessariamente ter ciência de que está acontecendo no ambiente global.

Bindings são na verdade ***locais*** para o bloco em que eles foram declarados, então se você criar um dentro de um loop, o código antes e depois não poderá acessá-lo. No JavaScript antes de 2015, somente funções criavam novos escopos, 

Em construção 👷 🚧 é sentença



<!-- <img src="" alt="linha reta" align="left"/> --> 