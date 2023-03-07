# S.O.L.I.D
SOLID são cinco princípios de desenvolvimento de software, diretrizes a serem seguidas ao criar software para facilitar o dimensionamento e a manutenção. Eles se tornaram populares por um engenheiro de software, Robert C. Martin.

## S - Single Responsibility (Responsabilidade Única)
> Conceito teórico: Uma classe deve ter uma única responsabilidade

![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*P3oONz9Da3Tc1w97fMV73Q.png)
Se uma classe tiver muitas responsabilidades, aumenta a possibilidade de bugs, pois alterar uma de suas responsabilidades pode afetar as outras sem que você saiba.

### Exemplo no Driven Bank
Nossos casos de uso são um exemplo disso. Cada um é responsável por apenas uma ação e nada mais.

## O — Open-Closed (Aberto-Fechado)
> Conceito teórico: As classes devem ser abertas para extensão, mas fechadas para modificação

![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*0MtFBmm6L2WVM04qCJOZPQ.png)
Uma Classe tem que estar aberta para ser extendida e fechada para ser alterada.

Se você deseja que a classe execute mais funções, a abordagem ideal é adicionar às funções que já existem, NÃO alterá-las.

### Exemplo no Driven Bank
Nossa conexão aos repositórios passa por uma interface que diz quais comportamentos qualquer repositório que a implementar deve fazer, com isso, não importa o tipo de repositorio ou como ele persiste dados, os nossos casos de uso sempre vão ter os mesmos métodos para aplicar.

A mesma coisa acontece com o Chrome, quando você adiciona uma extensão, não é necessário ir no código fonte do Chrome, para conseguir usar essa extenção, o código base não é alterado, a "interface" extende uma nova funcionalidade.

## L — Liskov Substitution
> Conceito teórico: Se S é um subtipo de T, então os objetos do tipo T em um programa podem ser substituídos por objetos do tipo S sem alterar nenhuma das propriedades desejáveis desse programa.

![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*yKk2XKJaCLNlDxQMx1r55Q.png)
Quando uma classe filha não pode executar as mesmas ações que sua classe pai, isso pode causar bugs.

Se você tiver uma classe e criar outra classe a partir dela, ela se tornará pai e a nova classe se tornará filha. A classe filha deve ser capaz de fazer tudo o que a classe pai pode fazer. Este processo é chamado de Herança.

A classe filha deve ser capaz de processar as mesmas solicitações e entregar o mesmo resultado que a classe pai ou pode entregar um resultado do mesmo tipo.

A figura mostra que a classe pai entrega café (pode ser qualquer tipo de café). É aceitável que a Classe filha entregue Cappucino por ser um tipo específico de Café, mas NÃO é aceitável entregar Água.

Se a classe filha não atender a esses requisitos, isso significa que a classe filha foi alterada completamente e viola esse princípio.

### Exemplo no Driven Bank
Quando extendemos a classe Account para a Classe Business Account, não faria sentido a classe filha criar um cliente por exemplo, a classe filha precisa conseguir utilizar tudo o que a classe pai oferece e eventualmente fazer coisas diferentes, porém que façam sentido com o contexto.

Imagine esse outo exemplo:
- Temos uma classe Ave() que tem os métodos bicar e voar
- Criamos a partir dela a classe JoãoDeBarro() que consegue bicar, voar e construirCasa, isso faz total sentido
- Não faria sentido extendermos Ave() para a classe Pinguin(), pois ele saber bicar e não voar, dai teriamos uma quebra nesse principio, e provavelmente no código.

## I — Interface Segregation (Segregação de interface)
> Conceito teórico: Os clientes não devem ser forçados a depender de métodos que não usam.

![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*2hmyR9L43Vm64MYxj4Y89w.png)

Quando uma classe é obrigada a executar ações que não são úteis, é um desperdício e pode produzir bugs inesperados se a classe não tiver a capacidade de executar essas ações.

Uma classe deve executar apenas as ações necessárias para cumprir seu papel. Qualquer outra ação deve ser removida completamente ou movida para outro lugar se puder ser usada por outra classe no futuro.

### Exemplo no Driven Bank
Nesse projeto nós criamos as interfaces para nossos Repositórios implementarem, percebam que é obrigatório implementar todos os métodos da interface, esse principio diz que se houver algum método ou propriedade que não faz sentido ser implementado pela classe que recebe a interface, esse não deve estar nessa interface, mas sim em outra, para outro fim.

## D — Dependency Inversion (Inversão de Dependência)
> Conceito teórico: Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender da abstração. As abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

![](https://miro.medium.com/v2/resize:fit:720/format:webp/1*Qk8tDmjQlyvwKxNTfXIo0Q.png)
Em primeiro lugar, vamos definir os termos usados aqui de forma mais simples

Módulo(ou Classe) de alto nível: Classe que executa uma ação com uma ferramenta.

Módulo de baixo nível (ou Classe): A ferramenta necessária para executar a ação

Abstração: Representa uma interface que conecta as duas Classes.

Detalhes: Como a ferramenta funciona

Este princípio diz que uma classe não deve ser fundida com a ferramenta que usa para executar uma ação. Em vez disso, ele deve ser fundido à interface que permitirá que a ferramenta se conecte à classe.

Também diz que tanto a Classe quanto a interface não devem saber como a ferramenta funciona. No entanto, a ferramenta precisa atender à especificação da interface.

### Exemplo no Driven Bank
Nossos casos de uso não conseguem acessar os repositórios sem passar por nossa interface.

## Fontes bibliográficas:
- [SOLID fica FÁCIL com Essas Ilustrações](https://www.youtube.com/watch?v=6SfrO3D4dHM)
- Esse acima vídeo usa esse [artigo](https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898)