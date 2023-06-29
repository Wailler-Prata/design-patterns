# Abstract Factory

O Abstract Factory é usado para garantir que uma família de produtos relacionados ou dependentes trabalhem sempre juntos.

Por exemplo: imagine que está criando um sistema de interfaces gráficas que deva funcionar em Linux, Windows e Mac. É natural termos várias classes representando elementos como Janela, Botão, Input e assim por diante. Você não quer que classes ButtonWindows se misturem com UILinux, não é? Por isso focamos em família de objetos relacionados ou dependentes.

### Aplicabilidade

##### Use o padrão Abstract Factory quando:

* Um sistema deve ser independente de como seus produtos são criados, compostos ou representados
* Um sistema deve ser configurado como um produto de família de múltiplos produtos
* Uma família de objetos for projetada para ser usada em conjunto e você necessita garantir essa restrição
* Você quer fornecer uma biblioteca de classes de produtos e quer revelar somente suas interfaces, não suas implementações

### Consequências

##### Bom:

* Os produtos sempre serão compatíveis entre si
* Aplicação clara do Open/Closed Principle, é fácil adicionar novas fábricas e produtos
* Aplicação clara do Single Responsibility Principle, o código que cria está separado do código que usa os objetos

##### Ruim:

* Muitas classes e maior complexidade será introduzida no código