# 3. Funções

[Functions](https://eloquentjavascript.net/03_functions.html)

[binding]: ##	"binding"
[statement]: ## "statement"
[body]: ## "body"
[braces]: ## "braces {}"
[keyword]: ## "palavra reservada"
[lexical]: ## "Lexical Scoping"
[declaration]: ## "declaration"
[arrow]: ## "flecha=>"
[stack]: ## "call stack"


> "As pessoas pensam que ciência da computação é a arte dos gênios, mas na verdade é oposto, apenas algumas pessoas fazendo coisas que se constroem umas sobre as outras, como uma parede de mini pedras."
>
> -- Donald Knuth

Funções são o pão e a manteiga da programação JavaScript. Existem diversas formas de usar o conceito de envelopar/embrulhar/isolar um pedaço de programa em um valor. Isso nos dá uma maneira de estruturar programas bem maiores, para reduzir repetição, associar nomes a subprogramas, e isolar esses subprogramas um dos outros .

A aplicação de funções mais óbvia seria como definir um novo vocabulário. Criar novas palavras em prosa provavelmente não seria uma boa ideia. Mas em programação, isso é indispensável.

Um típico americano adulto tem cerca de 20.000 palavras em seu vocabulário. Algumas linguagens de programação trazem internamente cerca de 20.000 comandos. E o vocabulário que é disponibilizado tende a ser mais precisamente definido, e portanto, menos flexível que a linguagem humana. De qualquer forma, geralmente temos que introduzir novos conceitos para evitar que a gente se repita demasiadamente.



### Definindo uma Função (Defining a Function)

A definição de função é uma [variável][binding] comum onde o valor dessa variável é uma função. Por exemplo, este código define `square` para se referir a função que produz o **quadrado** de um dado número:

````javascript
const square = function(x) {
  return x * x;
};

console.log(square(12));
// → 144
````

Uma função é criada com uma expressão que inicia com a *keyword* `function`. Funções tem uma série de parâmetros (neste caso, somente `x`) e um [corpo][body], que contém [instruções][statement] que são executadas quando a função é chamada. O [corpo][body] de uma função criada desta forma deve estar sempre entre [chaves][braces], mesmo que tenha apenas uma única [instrução][statement].

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

Algumas funções produzem um valor, como `power` e `square`, e outras não, assim como `makeNoise`, que resulta apenas num *side effect*. Uma sentença `return` determina o valor que a função retorna. Quando o controle se depara com essa afirmação, ele sai imediatamente da função atual e devolve o valor de retorno para o código que chamou a função. A [palavra reservada][keyword] `return` sem a expressão depois dela fará com que a função retorne `undefined`. Funções que não tem uma [instrução][statement] `return`, como `makeNoise`, também retornam `undefined`.

Os parâmetros para uma função se comportam como uma [variável][binding] comum, mas seus valores iniciais são dados por quem chama a função, e não pelo função propriamente dita.



### Variáveis e Escopos (Bindings and Scopes)

Cada [variável][binding] tem um escopo, que é a parte do programa onde a variável é visível. Para variáveis definidas fora de uma função ou bloco, o escopo é todo o programa, você poderá acessá-los quando quiser. Esses são chamados de ***Global*** (globais).

Variáveis criadas para parâmetros de funções ou declaradas dentro de uma função, só podem ser acessadas na função, essas são conhecidas como variáveis ***Locais***. Cada vez que a função é chamada, novas instâncias dessas variáveis são criadas. Isso proporciona um isolamento entre funções, cada função atua no seu próprio mundo (seu ambiente local) e pode ser entendida sem necessariamente ter ciência de que está acontecendo no ambiente global.

Variáveis são na verdade ***locais*** para o bloco em que elas foram declaradas, então se você criar uma dentro de um loop, o código antes e depois não poderá acessá-la. No JavaScript antes de 2015, somente funções criavam novos escopos, então a forma antiga era criar uma variável com a [*keyword*][keyword] `var`, que era visível dentro de toda a função em que ela estava, ou no escopo global se não estivesse dentro de uma função.

````javascript
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40
````

Cada escopo pode "olhar" para o escopo ao seu redor, então `x` é visível dentro do bloco no exemplo. A exceção ocorre quando múltiplas variáveis tem o mesmo nome, neste caso, o código pode acessar apenas a variável mais próxima. Por exemplo, quando o código dentro da função `halve` se refere a `n` está acessando seu próprio `n`, e não o `n` ***Global***.

````javascript
const halve = function(n) {
  return n / 2;
};

let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10
````

### Escopo Aninhado

JavaScript distingue não apenas as [variáveis][binding] ***global*** e ***local***. Blocos e funções podem ser criados dentro de outros blocos e funções, produzindo múltiplos níveis de localidade.

Por exemplo, esta função, que exibe os ingredientes necessários para fazer um pasta de húmus, tem uma outra função dentro dela:

````javascript
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
    ingredient(1, "lata", "grão de bico");
    ingredient(0,25, "xícara", "tahini");
    ingredient(0,25, "xícara", "suco de limão");
    ingredient(1, "cravo", "alho");
    ingredient(2, "colher de sopa", "azeite");
    ingredient(0,5, "colher de chá", "cominho");
};
````

O código dentro da função `ingredient` pode ver a variável `factor` da função externa. Mas suas variáveis locais, como `unit` ou `ingredientAmount`, não são visíveis para a função externa.

 ‎O conjunto de [variáveis][binding] visíveis dentro de um bloco é determinado pelo lugar desse bloco no texto do programa.‎ Cada escopo local também pode ver todos os escopos locais em que está contido, e todos os escopos podem ver o escopo global. Essa abordagem de visibilidade de variável é chamada de [Escopo Léxico][lexical].

### Funções como Valores

Uma variável de função geralmente funciona como um título para nomear uma parte específica do programa. Essa variável é definida uma vez e nunca será alterada. Isso faz com que seja fácil confundir a função com o seu nome.

Mas os dois são diferentes. Um valor de uma função pode fazer todas as coisas que os outros valores podem fazer, você pode usar isto em expressões arbitrárias, e não apenas chamá-las. É possível guardar um valor de uma função numa novo variável, passá-la como como argumento de uma função e assim por diante. Igualmente, uma variável que guarda uma função continua sendo apenas uma variável comum e pode, se não for uma constante, ter um novo valor atribuído a ela, assim como:

````javascript
let launchMissiles = function() {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function() {/* do nothing */};
}
````

No [capítulo 5](https://github.com/gildoneto/estudando-javascript/blob/main/eloquent-javascript-3rd-edition/05-chapter-5-high-order-functions.md), discutiremos coisas interessantes que podem ser feitas repassando valores de funções para outras funções.



### Notação de Declaração

Existe uma maneira bem mais curta de criar uma função. Quando a *keyword* `function` é usada no início de uma [instrução][statement], isto funciona diferente.

````javascript
function square(x) {
  return x * x;
}
````

Isto é uma [declaração][declaration] de função. A instrução define a variável `square` e aponta para a função dada. É um pouco mais fácil de escrever e não requer um ponto-e-vírgula `;` depois da função.

‎Há uma sutileza com esta forma de definição de função.‎

````javascript
console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}
````

O código acima funciona mesmo se a função for definida *abaixo* do código que chama ele. [Declarações][declaration] de função não fazem parte do *fluxo de controle* regular **de cima pra baixo**(*top-to-bottom*). Elas são, conceitualmente, movidas para o topo de seus escopos e pode ser chamada por todo o código deste escopo. Isto as vezes é útil porque oferece a liberdade de ordenar o código de uma forma que faça sentido, sem se preocupar que ter que definir todas as funções antes de serem usadas.



### Arrow Functions

Existe uma terceira notação para funções, que aparenta ser bem diferente das outras. Ao invés da *keyword* `function`, nesta notação usamos uma [flexa][arrow] (`=>`) criada por um sinal de igual `=` e o caractere maior-que `>` (*não confundir com o operador maior-que-ou-igual `>=`*).

````javascript
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
````

A [flecha][arrow] vem depois da lista de parâmetros e é seguida pelo [corpo][body] da função. Deve ser lido da seguinte forma: "este input *(os parâmetros)* produz este resultado *(o corpo)*".

Quando existe apenas um parâmetro, você pode omitir os parênteses ao redor da lista de parâmetros. Se o corpo for uma expressão única, ao invés de um bloco de [chaves][braces], essa expressão será retornada pela função. Logo, essas duas definições de `square` fazem a mesma coisa:

````javascript
const square1 = (x) => { return x * x; };
const square2 = x => x * x;
````

Quando uma arrow function não possui nenhum parâmetro, sua lista de parâmetros será apenas os parênteses vazios.

````javascript
const horn = () => {
  console.log("Toot");
};
````

Não existe uma razão profunda para haver arrow functions e expressões `function` na linguagem. A não ser por um pequeno detalhe, que discutiremos no [Capítulo 6](https://github.com/gildoneto/estudando-javascript/blob/main/eloquent-javascript-3rd-edition/06-chapter-6-the-secret-life-of-objects.md), eles fazem a mesma coisa. Arrow Functions foram adicionadas em 2015, principalmente para haver a possibilidade de escrever pequenas expressões de função de uma forma menos verbosa. Iremos usar muito isto no [Capítulo  5](https://github.com/gildoneto/estudando-javascript/blob/main/eloquent-javascript-3rd-edition/05-chapter-5-high-order-functions.md)



### A Pilha de Chamadas (The Call Stack)

A maneira como o controle flui pelas funções é um pouco complicada. Vamos dar uma olhada nisso de perto. Aqui está um programa simples que faz algumas chamadas de funções:

````javascript
1  function cumprimentar(quem) {
2    console.log("Olá " + quem);
3  }
4  cumprimentar("Harry");
5  console.log("Tchau");
````

O fluxo deste programa é mais ou menos assim: a chamada para o `cumprimentar` faz o controle ir para o início da função (linha 2). A função chama o `console.log`, que assume o controle, faz o seu trabalho, e então retorna para a linha 2. Então chega ao fim da função `cumprimentar`, que retorna para o lugar de onde foi chamado, que foi a linha 4. A linha depois disso chama o `console.log` novamente. Depois do retorno, o programa chega ao seu final.

Podemos mostrar o esquema do fluxo de controle desta forma:

````javascript
1  not in function
2    in cumprimentar
3        in console.log
4   in cumprimentar
5  not in function
6    in console.log
7  not in function
````

Como a função precisa retornar para o local de onde foi chamada, o computador deve lembrar o contexto a partir de onde a chamada aconteceu. Neste caso (linha 3 e 4), o `console.log` tem que retornar para a função `cumprimentar` quando finalizar sua tarefa. No caso da linha 6, ele retorna para o fim do programa.

O computador guarda este contexto na ***Call Stack***. Toda vez que uma função é chamada, o contexto atual é guardado no topo dessa stack. Quando uma função retorna, ela remove o contexto do topo da stack e usa este contexto pra continuar a execução.

Guardar essa stack requer espaço na memória do computador. Quando a stack se torna grande demais, o computador irá falhar com uma mensagem do tipo: *“out of stack space”* ou *“too much recursion”*. O código a seguir ilustra isso fazendo ao computador uma pergunta realmente difícil que causa uma chamada infinita entre duas funções. ‎Isto ‎*‎seria‎*‎ infinito, se o computador tivesse uma pilha infinita.‎ Do jeito que foi escrito, ou vamos ficar sem espaço, o vamos "explodir o stack".

````javascript
function galinha() {
    return ovo();
  }
  function ovo() {
    return galinha();
  }
  console.log(galinha() + " veio primeiro.");
  // → ??
````



### Argumentos Opcionais

O código a seguir é permitido e executa sem nenhum problema:

````javascript
function square(x) { return x * x; }
console.log(square(4, true, "ouriço"));
// → 16
````

Nós definimos `square` com apenas um parâmetro. Ainda assim quando chamamos a função com 3 parâmetros, o JavaScript não reclama. Ele ignora os argumentos extras e executa o `square` com o primeiro.

‎O JavaScript é extremamente tolerante sobre o número de argumentos que você passa para uma função.‎ Se você passa argumentos demais, os extras são ignorados. Se você passa menos parâmetros do que a função espera, os parâmetros não repassados receberão o valor `undefined`.

A desvantagem disso é que é possível - provavelmente com frequência - que você acidentalmente passe o número errado de argumentos para as funções. E ninguém vai te avisa quando isso acontecer.

A vantagem é que esse comportamento pode ser usado para permitir que uma função seja chamada com diferentes números de argumentos. Por exemplo, esta função `minus` tenta imitar o operador `-` agindo com base em um ou dois argumentos:

````javascript
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5
````

Se você escrever um operador `=` após um parâmetro, seguido por uma expressão, o valor dessa expressão substituirá o argumento quando não for fornecido.

Por exemplo, esta versão de `potencia` torna seu segundo argumento opcional. Se você não fornecer ou passar o valor `undefined`, o padrão será dois e a função se comportará como um `square`.

````javascript
function potencia(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(potencia(4));
// → 16
console.log(potencia(2, 6));
// → 64
````

No [próximo capítulo](https://github.com/gildoneto/estudando-javascript/blob/main/eloquent-javascript-3rd-edition/04-chapter-4-data-structures-objects-and-arrays.md), veremos uma maneira pela qual o corpo de uma função pode obter toda a lista de argumentos que foi passada. Isso é útil porque possibilita que uma função aceite qualquer número de argumentos. Por exemplo, o `console.log` que exibe todos os valores passados na chamada.

````javascript
console.log("C", "O", 2);
// → C O 2
````



### Closure

A capacidade de tratar funções como valores, combinada com o fato de que as [variáveis][binding] locais são recriadas toda vez que uma função é chamada, levanta uma questão interessante. O que acontece com as variáveis locais quando a chamada de função que as criou não está mais ativa?

O código a seguir mostra um exemplo disso. Ele define uma função, `wrapValue`, que cria uma variável local. Em seguida, ele retorna uma função que acessa e retorna essa variável local.

````javascript
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
````

Isso é permitido e funciona como você espera - ambas as instâncias da variável ainda podem ser acessadas. Esta situação é uma boa demonstração do fato de que as variáveis locais são criadas novamente para cada chamada, e chamadas diferentes não podem interferir nas variáveis locais uma das outras.

Esse recurso - ser capaz de fazer referência a uma instância específica de uma variável local em um escopo delimitador - é chamado de ***closure***. Uma função que faz referência a variáveis de escopos locais em torno dela é chamada de ***closure***. Esse comportamento não apenas o livra de ter que se preocupar com a duração das variáveis, mas também torna possível usar valores de função de algumas maneiras criativas.

Com uma pequena mudança, podemos transformar o exemplo anterior em uma forma de criar funções que se multiplicam por uma quantidade arbitrária.

````javascript
function multiplicador(fator) {
   return numero => numero * fator;
}

let duasVezes = multiplicador(2);
console.log (duasVezes(5));
// → 10
````

A variável local explicita `local` do exemplo do `wrapValue` não é realmente necessária, já que o parâmetro é em si uma variável local.

Pensar em programas como este requer alguma prática. Um bom modelo mental é pensar em valores de funções como o código no seu body e o ambiente no qual são criados. Quando chamado, o corpo da função vê o ambiente no qual foi criado, não o ambiente no qual é chamado.

No exemplo, a função `multiplicador` é chamada e cria um ambiente no qual seu parâmetro `fator` é limitado a 2. O valor da função que retorna, que é armazenado em `duasVezes`, lembra desse ambiente. Então, quando é chamada, ela multiplica seu argumento por 2.



### Recursão (Recursion)

É perfeitamente normal que uma função chame a si mesma, contanto que não o faça com tanta frequência a ponto de estourar a pilha(*stack overflow*). Uma função que chama a si mesma é chamada de ***recursiva***. A recursão permite que algumas funções sejam escritas em um estilo diferente. Considere, por exemplo, esta implementação alternativa de `potencia`:

````javascript
function potencia(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * potencia(base, exponent - 1);
  }
}

console.log(potencia(2, 3));
// → 8
````

Isso se aproxima bastante da maneira como os matemáticos definem a exponenciação e, sem dúvida, descreve o conceito de forma mais clara do que a variante em loop. A função chama a si mesma várias vezes com expoentes cada vez menores para obter a multiplicação repetida.

Mas essa implementação tem um problema: em implementações de JavaScript típicas, é cerca de três vezes mais lenta do que a versão em loop. Executar um loop simples geralmente é mais barato do que chamar uma função várias vezes.

O dilema de velocidade versus elegância é interessante. Você pode ver isso como uma espécie de transição gradual entre um código mais legível para seres humanos e um mais produtivo para as máquinas. Quase qualquer programa pode ser feito mais rápido, tornando-o maior e mais complicado. O programador deve decidir sobre um equilíbrio apropriado.

No caso da função `potencia`, a versão deselegante (looping) ainda é bastante simples e fácil de ler. Não faz muito sentido substituí-la pela versão recursiva. Frequentemente, porém, um programa lida com conceitos tão complexos que abrir mão de alguma eficiência para torná-lo mais simples é útil.

A preocupação com a eficiência pode ser uma distração. É mais um fator que complica o design do programa, e quando você está fazendo algo que já é difícil, aquela coisa extra com que se preocupar pode ser paralisante.

Portanto, sempre comece escrevendo algo que seja correto e fácil de entender. Se você está preocupado por ser muito lento - o que geralmente não é, já que a maioria do código simplesmente não é executado com frequência suficiente para levar uma quantidade significativa de tempo - você pode medir depois e melhorá-lo, se necessário.

A recursão nem sempre é apenas uma alternativa ineficiente ao loop. Alguns problemas são realmente mais fáceis de resolver com recursão do que com loops. A maioria desses problemas envolve exploração ou processamento de várias ramificações, as quais podem se dividir em novas ramificações e assim por diante.

Considere este quebra-cabeça: começando do número 1 e repetidamente adicionando 5 ou multiplicando por 3, um conjunto infinito de números pode ser produzido. Como você escreveria uma função que, dado um número, tenta encontrar uma sequência de tais adições e multiplicações que produz esse número?

Por exemplo, o número 13 pode ser alcançado multiplicando-se primeiro por 3 e depois adicionando 5 duas vezes, enquanto o número 15 não pode ser alcançado.

Aqui está uma solução recursiva:

````javascript
function findSolution(alvo) {
    function find(atual, historico) {
      if (atual == alvo) {
        return historico;
      } else if (atual > alvo) {
        return null;
      } else {
        return find(atual + 5, `(${historico} + 5)`) ||
               find(atual * 3, `(${historico} * 3)`);
      }
    }
    return find(1, "1");
  }
  
  console.log(findSolution(24));
  // → (((1 * 3) + 5) * 3)
````

Observe que este programa não encontra necessariamente a sequência mais curta de operações. Ele fica satisfeito quando encontra qualquer sequência.

Tudo bem se você não ver como funciona imediatamente. Vamos trabalhar nisso, já que é um ótimo exercício de pensamento recursivo.

A função interna `find` faz a real recursão. Ela recebe dois argumentos: o número atual e uma string que registra como alcançamos esse número. Se encontrar uma solução, ela retorna uma string que mostra como chegar ao alvo. Se nenhuma solução puder ser encontrada a partir desse número, ele retornará `null`.

Para fazer isso, a função executa uma das três ações. Se o número atual for o número alvo, o histórico atual é uma forma de atingir esse alvo, então ele é retornado. Se o número atual for maior do que o alvo, não há sentido em explorar mais esta ramificação, porque tanto a adição quanto a multiplicação apenas tornarão o número maior, então ele retorna `null`. Finalmente, se ainda estivermos abaixo do número alvo, a função tenta os dois caminhos possíveis que começam do número atual chamando a si mesma duas vezes, uma para adição e outra para multiplicação. Se a primeira chamada retornar algo que não seja `null`, ele será retornado. Caso contrário, a segunda chamada é retornada, independentemente de produzir uma string ou `null`.

Para entender melhor como essa função produz o efeito que estamos procurando, vamos dar uma olhada em todas as chamadas para `find` que são feitas durante a busca por uma solução para o número 13.

````javascript
find(1, "1")
  find(6, "(1 + 5)")
    find(11, "((1 + 5) + 5)")
      find(16, "(((1 + 5) + 5) + 5)")
        grande demais
      find(33, "(((1 + 5) + 5) * 3)")
        grande demais
    find(18, "((1 + 5) * 3)")
      grande demais
  find(3, "(1 * 3)")
    find(8, "((1 * 3) + 5)")
      find(13, "(((1 * 3) + 5) + 5)")
        encontrado!
````

A identação indica a profundidade da [pilha de chamadas][stack]. A primeira chamada do `find` invoca a si mesma duas vezes, explorando as soluções que começam com `(1 + 5)` e `(1 * 3)`. A primeira chamada tenta achar a solução que começa com `(1 + 5)` e, usando recursão, percorre todas as possíveis soluções que produzam um número menor ou igual ao número esperado. Como ele não encontra uma solução para o número esperado, o valor `null` é retornado até retornar para a chamada inicial. Nesse momento, o operador `||` faz com que a pilha de chamadas inicie o processo de exploração pelo outro caminho `(1 * 3)`. Essa busca tem resultados satisfatórios, porque após duas chamadas recursivas acaba encontrando o número 13. Essa chamada recursiva mais interna retorna uma `string` e cada operador `||` nas chamadas intermediárias passa essa `string` adiante, retornando no final a solução esperada.



### Funções Crescentes (Growing Functions)

Existem duas maneiras mais ou menos naturais para as funções serem introduzidas nos programas.

A primeira é que você se vê escrevendo um código semelhante várias vezes. Prefira evitar isso. Ter mais código significa mais espaço para esconder erros e mais material para ler para quem está tentando entender o programa. Então, você pega a funcionalidade repetida, encontra um bom nome para ela e a coloca em uma função.

A segunda maneira é descobrir que precisa de alguma funcionalidade que ainda não escreveu e que parece que merece uma função própria. Você começará nomeando a função e, em seguida, escreverá seu corpo. Você pode até começar a escrever o código que usa a função antes de realmente definir a função em si.

A dificuldade pra definir um bom nome para uma função está diretamente relacionada a quão claro é o conceito que você está tentando implementar. Vejamos um exemplo.

Queremos escrever um programa que exibe dois números: o número de vacas e galinhas em uma fazenda, com as palavras `Cows` e `Chickens` depois deles e zeros preenchidos antes de ambos os números, de modo que sempre tenham três dígitos.

````javascript
007 Cows
011 Chickens
````

Isso pede uma função de dois argumentos - o número de vacas e o número de galinhas. Vamos começar a programar.

````javascript
function exibeInventario(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
      cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
      chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
  }
  exibeInventario(7, 11);
````

Escrever `.length` depois de uma expressão string nos dará o comprimento dessa string. Assim, os loops `while` continuam adicionando zeros na frente das cadeias de números até que tenham pelo menos três caracteres.

Missão cumprida! Porém, no momento em que iríamos enviar o código ao fazendeiro (juntamente com uma grande cobrança, é claro), ele nos ligou dizendo que começou a criar porcos, e perguntou, se poderíamos estender a funcionalidade do software para também imprimir os porcos.

É claro que podemos. Antes de entrar no processo de copiar e colar essas mesmas quatro linhas outra vez, vamos parar e reconsiderar. Deve existir uma forma melhor. Aqui está a primeira tentativa:

````javascript
function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
      numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
  }
  
  function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
  }
  
  printFarmInventory(7, 11, 3);
````

Funcionou! Mas o nome `printZeroPaddedWithLabel` é um pouco estranho. Ele é uma combinação de três coisas - imprimir, adicionar zeros e adicionar a label correta - em uma única função.

Ao invés de tentarmos abstrair a parte repetida do nosso programa como um todo, vamos tentar selecionar apenas um conceito.

````javascript
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);
````

Ter uma função com um bom nome descritivo como `zeroPad` torna fácil para qualquer um ler e entender o que o código faz. Além disso, ele pode ser útil em outras situações, além desse programa específico. Você pode usá-lo, por exemplo, para imprimir números corretamente alinhados em uma tabela.

O quão inteligente e versátil as nossas funções deveriam ser? Nós poderíamos escrever funções extremamente simples, que apenas adicionam algarismos para que o número tenha três caracteres, até funções complicadas, para formatação de números fracionários, números negativos, alinhamento de casas decimais, formatação com diferentes caracteres e por aí vai.

Um princípio útil é não adicionar funcionalidades, a menos que você tenha certeza absoluta de que irá precisar delas. Pode ser tentador escrever soluções genéricas para cada funcionalidade com que você se deparar. Resista a essa vontade. Você não vai ganhar nenhum valor real com isso e vai acabar escrevendo muitas linhas de código que nunca serão usadas.



### Funções e Efeitos Colaterais (Functions and Side Effects)

Funções podem ser divididas naquelas que são invocadas para produzir um efeito colateral e naquelas que são invocadas para gerar um valor de retorno (embora também seja possível termos funções que produzam efeitos colaterais e que retornem um valor).

A primeira função auxiliar no exemplo da fazenda, `printZeroPaddedWithLabel`, é invocada para produzir um efeito colateral: imprimir uma linha. A segunda versão, `zeroPad`, é chamada para produzir um valor de retorno. Não é coincidência que a segunda versão é útil em mais situações do que a primeira. Funções que criam valores são mais fáceis de serem combinadas de diferentes maneiras do que funções que produzem efeitos colaterais diretamente.

Uma função "pura" é um tipo específico de função que produz valores e que não gera efeitos colaterais, como também não depende de efeitos colaterais de outros códigos — por exemplo, ela não utiliza variáveis globais que podem ser alteradas por outros códigos. Uma função pura tem a característica de, ser sempre chamada com os mesmos argumentos, produzir o mesmo valor (e não fará nada além disso). Isso acaba fazendo com que seja fácil de entendermos como ela funciona. Uma chamada para tal função pode ser mentalmente substituída pelo seu resultado, sem alterar o significado do código. Quando você não tem certeza se uma função pura está funcionando corretamente, você pode testá-la simplesmente invocando-a. Sabendo que ela funciona nesse contexto, funcionará em qualquer outro contexto. Funções que não são "puras" podem retornar valores diferentes baseados em vários tipos de fatores e produzem efeitos colaterais que podem fazer com que seja difícil de testar e pensar sobre elas.

Mesmo assim, não há necessidade de se sentir mal ao escrever funções que não são "puras" ou começar uma "guerra santa" para eliminar códigos impuros. Efeitos colaterais são úteis em algumas situações. Não existe uma versão "pura" de `console.log`, por exemplo, e `console.log` certamente é útil. Algumas operações são também mais fáceis de se expressar de forma mais eficiente quando usamos efeitos colaterais, portanto a velocidade de computação pode ser uma boa razão para se evitar a "pureza".



### Resumo

Este capítulo te mostrou como escrever suas próprias funções. A keyword `function`, quando usada como uma expressão, pode criar um valor de função. Quando usado como uma instrução, pode ser usado para declarar uma variável e dar a ela uma função como seu valor. **Arrow Functions** são outra forma de criar funções.

````javascript
// Define f para guardar um valor de função
const f = function(a) {
  console.log(a + 2);
};

// Declara g como uma função
function g(a, b) {
  return a * b * 3.5;
}

// Um valor de função menos verboso(detalhado)
let h = a => a % 3;
````

Um aspecto fundamental para compreender as funções é compreender os escopos. Cada bloco cria um novo escopo. Os parâmetros e variáveis declaradas em um determinado escopo são locais e não visíveis do lado de fora. As variáveis declaradas com `var` se comportam de maneira diferente - elas acabam no escopo de função mais próximo ou no escopo global.

É útil separar as tarefas que seu programa executa em funções diferentes. Você não terá que se repetir tanto, e as funções podem ajudar a organizar um programa, agrupando o código em partes que fazem coisas específicas.

# Exercícios 

Os exercícios abaixo são propostos pelo autor, abordando o que foi aprendido no capítulo 3.

[Clicando aqui](https://github.com/braziljs/eloquente-javascript/blob/master/chapters/03-funcoes.md) você pode ler e fazer os exercícios deste capítulo referente a segunda edição do livro traduzido pela BrazilJS.

Já referente a terceira edição, clicando abaixo você irá para a página dos exercícios deste capítulo com as minhas respostas e as do autor:

### [Exercícios - #3rd Edition](https://github.com/gildoneto/estudando-javascript/blob/main/eloquent-javascript-3rd-edition/23-exercises-chapter-3.md) ⬅
