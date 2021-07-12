# 3. Funções

[Functions](https://eloquentjavascript.net/03_functions.html)

[binding]: ##	"atribuir um nome a um trecho de código"
[statement]: ## "statement"
[body]: ## "corpo"
[braces]: ## "braces {}"

> "As pessoas pensam que ciência da computação é a arte dos gênios, mas na verdade é oposto, apenas algumas pessoas fazendo coisas que se constroem umas sobre as outras, como uma parede de mini pedras."
>
> -- Donald Knuth

Funções são o pão e a manteiga da programação JavaScript. Existem diversas formas de usar o conceito de envelopar/embrulhar/isolar um pedaço de programa em um valor. Isso nos dá uma maneira de estruturar programas bem maiores, para reduzir repetição, associar nomes a subprogramas, e isolar esses subprogramas um dos outros .

A aplicação de funções mais óbvia seria como definir um novo vocabulário. Criar novas palavras em prosa provavelmente não seria uma boa ideia. Mas em programação, isso é indispensável.

Um típico americano adulto tem cerca de 20.000 palavras em seu vocabulário. Algumas linguagens de programação trazem internamente cerca de 20.000 comandos. E o vocabulário que é disponibilizado tende a ser mais precisamente definido, e portanto, menos flexível que a linguagem humana. De qualquer forma, geralmente temos que introduzir novos conceitos para evitar que a gente se repita demasiadamente.



### Definindo uma Função (Defining a Function)

A definição de função é um [binding][binding] normal onde o valor desse binding é uma função. Por exemplo, este código define `square` para se referir a função que produz o **quadrado** de um dado número:

````javascript
const square = function(x) {
  return x * x;
};

console.log(square(12));
// → 144
````

Uma função é criada com uma expressão que inicia com a *keyword* `function`. Funções tem uma série de parâmetros (neste caso, somente `x`) e um [body][body], que contém [sentenças][statement] que são executadas quando a função é chamada. o [body][body] de uma função criada desta forma deve estar sempre entre [chaves][braces]



Em construção 👷 🚧 é sentença

<!-- <img src="" alt="linha reta" align="left"/> --> 