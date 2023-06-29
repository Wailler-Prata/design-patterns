# Decorator

O Decorator é uma padrão de projeto usado para adicionar funcionalidades a objetos já criados, ou seja, sem a necessidade de alterar nenhum código. Isso faz com que este padrão aplique naturalmente o princípio do aberto/fechado (classes devem estar abertas para extensão, mas fechadas para modificação).


### Aplicabilidade

##### Use o padrão Decorator quando:

* Você precisa adicionar funcionalidades em objetos sem quebrar ou alterar o código  existente
* Você quiser usar composição ao invés de herança
* Você percebe que pode ocorrer uma explosão de subclasses em determinada estrutura


### Consequências

##### Bom:

* Composição é melhor do que herança em grande maioria dos casos
* É fácil adicionar ou remover comportamento de objetos sem tocar em código já escrito ou testado (OCP)
* É possível decorar um objeto já decorado, adicionando ainda mais funcionalidades (camadas)

##### Ruim:

* Quanto mais decorators em camadas, mais complexo seu código se torna