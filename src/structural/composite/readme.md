# Composite

O composite é um padrão de projeto que permite ao cliente tratar um único objeto ou uma estrutura formada de vários objetos aninhados hierarquicamente da mesma maneira. Como por exemplo a hierarquia de uma empresa onde possuímos uma hierarquia de trabalhadores.


### Aplicabilidade

##### Use o padrão Composite quando:

* Sua estrutura de objetos possa ser representada hierarquicamente, como por exemplo, estruturas do tipo árvore
* Você quiser que o código cliente trate objetos compostos e objetos simples da mesma maneira


### Consequências

##### Bom:

* É muito fácil criar objetos complexos por composição
* É fácil gerar uma hierarquia de objetos
* É fácil usar polimorfismo e recursão
* É fácil adicionar novos tipos de elementos na estrutura (OCP)

##### Ruim:

* Dependendo da estrutura, pode quebrar o princípio da segregação de interface (ISP). Objetos do tipo "Leaf" (folha) tendem a ter métodos que não usam ou não fazem nada.