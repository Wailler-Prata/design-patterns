# Singleton

O singleton tem a função de garantir que uma classe tenha somente uma instância no programa e fornecer um ponto de acesso global para a mesma.


### Aplicabilidade

##### Use o padrão Singleton quando:

* Use o singleton quando uma classe precisa ter somente uma instância disponível em todo o seu programa;
* Use o singleton quando perceber que está usando variáveis globais para manter partes importantes do programa, como variáveis de configuração que são usadas por toda a aplicação.


### Consequências

##### Bom:

* Acesso controlado por encapsulamento à instância única;
* É possível permitir um número variável de instâncias (pode soar estranho, mas é possível criar um Singleton que permite n instâncias de uma classe);
* É possível usar thead lock para garantir que duas partes do código não alterem o singleton simultaneamente;
* Usa lazy instantiation, ou seja, o Singleton só será instanciado no momento do uso;

##### Ruim:

* É mais difícil de testar;
* Viola o princípio da responsabilidade única;
* Requer tratamento especial em casos de concorrência;