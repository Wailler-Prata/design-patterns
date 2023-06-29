# Adapter

O Adapter é um padrão de projeto muito usado para adaptar interfaces de código de terceiros (como frameworks ou libs) ou código legado (antigo) para o nosso código atual. Com ele é possível não depender diretamente de código que não está no domínio da nossa aplicação.


### Aplicabilidade

##### Use o padrão Adapter quando:

 * Você não quiser que seu código dependa diretamente de código de terceiros ou legado
* Você quiser usar um classe existente mas sua interface for incompatível com a interface que seu código ou domínio precisam
* Você quiser reutilizar várias subclasses que não possuam determinada funcionalidade mas for impraticável estender o código de cada uma apenas para adicionar a funcionalidade desejada


### Consequências

##### Bom:

* Desacopla o código da aplicação de códigos de terceiros
* Aplica o SRP ao separar a conversão de interfaces da lógica da aplicação
* Aplica o OCP ao permitir introduzir novos Adapters para código existente

##### Ruim:

* Aumenta a complexidade da aplicação (Por outro lado, qual outra solução deveria ser aplicada?)