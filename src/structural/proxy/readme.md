# Proxy

A intenção do proxy é ter um objeto (o proxy) que fingirá ser o objeto real para controle de acesso. O objeto Proxy receberá as solicitações que seriam enviadas ao objeto real e terá controle sobre como e quando encaminha-las (ou não) para objeto real. O objeto proxy atinge seu objetivo se posicionando entre o código cliente e o objeto real.


O objeto proxy pode:

* Fazer cache de chamadas para objetos caros para o sistema.<br>
* Criar logs de acesso, avisos ou erros.<br>
* Controle de acesso (autenticação).<br>
* Distribuir serviços.<br>
* Adiar instanciações (lazy instantiation) ou execuções (lazy evaluation).<br><br>



### Aplicabilidade

Use o padrão Proxy quando:

* Você tem um objeto caro para ser criado e não quer permitir acesso direto a esse objeto (proxy virtual).<br>
* Você que restringir acesso a partes da sua aplicação (proxy de proteção).<br>
* você quer uma ligação entre seu sistema e um sistema remoto. O proxy pode fingir ser a interface do objeto remoto e lidar com toda a complexidade de conexão e transmissão de dados (proxy remoto).<br>
* Você quer fazer cache de chamadas já realizadas (proxy inteligente ou proxy de cache).<br>


### Consequências

##### Bom:

* O código cliente nem precisa saber se está ou não usando um Proxy (ele finge ser o objeto real)
* Você pode adicionar novos Proxies sem mudar código já testado (OCP)
* O Proxy funciona mesmo se o objeto real não estiver operacional ou pronto para uso
* Você pode controlar o ciclo de vida de objetos reais dentro do proxy

##### Ruim:

* Introduz mais classes ao sistema isso o torna mais complexo