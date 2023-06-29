# Biulder

O Biulder tem a intenção de separar a construção de um objeto complexo da sua representação de modo que o mesmo processo de construção possa criar diferentes representações.

### Aplicabilidade

##### Use o padrão Biulder quando:

* Use o Builder quando a criação do objeto se torna complexa
* Use o Builder quando quiser que o código seja capaz de gerar diferentes representações do mesmo objeto
### Consequências

##### Bom:

* Separa criação de utilização de objetos
* O cliente não precisa criar objetos diretamente
* O mesmo código pode construir objetos diferentes
* Ajuda na aplicação dos princípios SRP e OCP

##### Ruim:

* O código final pode se tornar muito complexo