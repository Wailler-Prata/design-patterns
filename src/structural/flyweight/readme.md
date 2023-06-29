# Flyweight

O Flyweight visa dividir um objeto em dois estados: o estado intrínseco e o estado extrínseco.

O estado intrínseco de um objeto é a parte que nunca muda ou muda poucas vezes dentro do sistema. Por exemplo, imagine um objeto de endereço de um cliente com os seguintes dados: rua, número, bairro, cidade, cep, complemento, etc... O estado intrínseco deste objeto seriam as coisas que podem se repetir de cliente para cliente. Pense comigo, se vários clientes são do mesmo bairro, sabemos que outros dados também não mudam, como cidade e cep. Esses são parte do estado intrínseco do objeto de endereço.

Por outro lado temos o estado extrínseco. Esse estado mantém dados que estão constantemente variando. No caso do endereço, o número, o complemento e os dados do cliente mudam para cada localização. Esses valores podem ser movidos para fora do objeto a fim de liberar a memória que podem consumir.


### Aplicabilidade

##### Só use o Flyweight quanto TODAS as condições a seguir forem verdadeiras:

* Uma aplicação utiliza uma grande quantidade de objetos;
* Os custos de armazenamento são altos por causa da grande quantidade de objetos;
* A maioria dos estados de objetos podem se tornar extrínsecos;
* Muitos objetos podem ser substituídos por poucos objetos compartilhados;
* A aplicação não depende da identidade dos objetos.


### Consequências

##### Bom:

* Economiza memória RAM

##### Ruim:

* Pode gerar outros problemas de desempenho não relacionados com a RAM
* Seu código vai se tornar muito complexo