# Façade

Tem a intenção de facilitar a vida do código cliente ao criar um objeto de fachada para um sistema mais complexo.
Imagine ter que instanciar várias classes, passar objetos como parâmetro de outros objetos, chamar vários métodos ou executar algoritmos apenas para iniciar um sistema. O Façade ajudará você a não poluir o código cliente com todo esse código. 


### Aplicabilidade

##### Use o padrão Façade quando:

* Você quer disponibilizar uma interface mais simples para um sistema complexo
* Você quer criar pontos de entrada para determinadas partes do sistema, como serviços externos, camadas da aplicação e objetos complexos dentro em determinadas partes do código


### Consequências

##### Bom:

* Isola o código complexo do código cliente
* Facilita o uso do sistema
* Cria pontos de entrada para camadas da aplicação e serviços de terceiros

##### Ruim:

* O objeto Façade se torna facilmente uma "God class" (use fachadas adicionais se perceber que isso está ocorrendo no seu código)