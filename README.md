# updater
Este programa consiste em uma interface web para atualização de software.
Ele recebe uma atualização de software, descompacta e aplica no devido local.

O software deve estar em formato **.zip** e conter um arquivo **package.json** na raiz.
O arquivo **package.json** deve conter as chaves **name** e **version**.
Estas informações serão mostradas na interface quando o usuário tentar atualizar.

## Instalação e execução
Você precisará instalar o ambiente Node.js antes de poder utilizar este programa. Você pode utilizar [este](https://github.com/creationix/nvm#installation) método.

Após clonar o repositório, instale as dependências executando ```npm install``` dentro da pasta.

Para rodar, execute ```npm start```. Assim, as configurações em **package.json** serão passadas ao programa como variáveis de ambiente.


## Configurações
Algumas configurações podem ser editadas no objeto **config** do arquivo **package.json**.

### Porta
A porta padrão é **8080**.
Para utilizar outra porta, defina a chave **port**.
```
"name": "updater",
"version": "1.0.0",
"config": {
  "port": 1234
}
```

### Diretório de aplicações
O diretório padrão para instalação das aplicações é **/srv/apps/<_app_>**, onde *app* é o nome da aplicação indicado no arquivo **package.json**.
Para utilizar outro diretório, defina a chave **appsdir**.
```
"name": "updater",
"version": "1.0.0",
"config": {
  "appsdir": "/opt/myApps"
}
```
