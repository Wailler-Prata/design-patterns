# Bridge

Bridge é um padrão de projeto estrutural que tem a intenção de desacoplar uma abstração da sua implementação, de modo que as duas possam variar e evoluir independentemente.

O bridge foca o trabalho em composição, ou seja, ao invés de extender infinitamente minha estrutura de classes para todas as possíveis variantes por herança, posso apenas manter uma referência para uma implementação dentro da minha abstração. Isso me permite encaminhar chamadas de métodos da abstração para a implementação em tempo de execução.

        (GOF em PT-BR pág. 208) A diferença chave entre esses padrões está nas suas intenções… O padrão Adapter faz as coisas funcionarem APÓS elas terem sido projetadas; o Bridge as faz funcionar ANTES QUE existam...


### Aplicabilidade

##### Use o padrão Bridge quando:

* Você souber que sua estrutura terá abstrações (código de alto nível) e implementações dessa abstração (detalhes) que possam variar de maneira independente
* Você souber que o Adapter poderia ser aplicado naquela estrutura (você já conhece a estrutura)
* Você quiser dividir uma classe que possa ter diversas variantes (como em produtos e suas variações de cores: CanetaAzul, CanetaVermelha, CamisetaAzul, CamisetaVermelha, etc...)
* Você quer trocar as implementações em tempo de execução


### Consequências

##### Bom:

* Desacopla o código da abstração do código da implementação (SRP)
* Implementa o OCP ao permitir novas abstrações e/ou implementações para código existente
* Tem as mesmas vantagens do Adapter

##### Ruim:

* Aumenta a complexidade da aplicação quando implementado em locais incorretos