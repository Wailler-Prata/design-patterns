# Factory

Uma Factory tem a intenção de definir uma interface para criar um objeto, mas deixar as subclasses decidirem que classe instanciar. O Factory Method permite adiar a instanciação para as subclasses.


### Aplicabilidade

##### Use o padrão Factory quando:

* Use o factory method quando não souber com certeza quais os tipos de objetos o seu código vai precisar
* Use o factory method para permitir a extensão de suas factories para criação de novos objetos (isso ajuda a aplicar o Open/Closed Principle)
* Use o factory method para desacoplar o código que cria do código que usa as classes (Single Responsibility Principle)
* Use o factory method para dar um hook (gancho) às subclasses para permitir que elas decidam a lógica de criação de objetos
* Use o factory method para eliminar duplicação de código na criação de objetos

### Consequências

##### Bom:

* Ajuda a aplicar o Open/Closed Principle. Seu código vai estar aberto para extensão
* Ajuda na aplicação do Single Responsibility Principle. Separa o código que cria do código que usa o objeto
* Ajuda no desacoplamento do seu código

##### Ruim:

* Pode causar uma explosão de subclasses. Será necessário uma classe Creator para cada ConcreteProduct. Só é vantajoso quando já seria necessário estender a classe Creator na estrutura