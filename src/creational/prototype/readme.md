# Prototype

O Prototype tem a intenção de especificar os tipos de objetos a serem criados usando uma instância-protótipo e criar novos objetos pela cópia desse protótipo.


### Aplicabilidade

##### Use o padrão Prototype quando:

* Precisar que seu código não dependa de classes concretas para a criação de novos objetos
* Quiser evitar explosão de subclasses para objetos muito similares
* Quiser evitar a recriação de objetos "caros" ou "complexos"


### Consequências

##### Bom:

* Oculta classes concretas do código cliente
* Ajuda na criação de objetos caros ou complexos
* Evita a explosão de subclasses

##### Ruim:

* Clonar objetos que que tem referências para outros objetos pode ser super complexo