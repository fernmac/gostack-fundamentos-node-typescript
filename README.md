# GOSTACK - Fundamentos do Node JS utilizando Typescript

![](https://img.shields.io/badge/made%20by-fernmac-04d361?style=flat&color=04d361) 
![](https://img.shields.io/github/languages/count/fernmac/gostack-fundamentos-node-typescript?style=flat&color=04d361) 
[![GitHub stars](https://img.shields.io/github/stars/fernmac/gostack-fundamentos-node-typescript?style=social)](https://github.com/fernmac/gostack-conceitos-react-native/stargazers)

Aplicação para armazenar transações financeiras de entrada e saída, que deve permitir o cadastro e a listagem dessas transações.

------------

## Instalação

- Para iniciar a instalação é necessário clonar o repositório
    >`git clone [url_repositorio]`

- Entrar no diretório clonado
    >`cd gostack-fundamentos-node-typescript`

- Instalar as dependências do projeto via **NPM** ou **YARN**
    >`npm install`

## Execução

- Executar o comando para iniciar o back-end
    >`npm run dev:server`

## Rotas

### **`POST`** `/transactions`

A rota deve receber title, value e type dentro do corpo da requisição, sendo type o tipo da transação, que deve ser income para entradas (depósitos) e outcome para saídas (retiradas). Ao cadastrar uma nova transação, ela deve ser armazenada dentro de um objeto com o seguinte formato :

```json
{
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income"
}
```

### **`GET`** `/transactions`

Essa rota deve retornar uma listagem com todas as transações que você cadastrou até agora, junto com o valor de soma de entradas, retiradas e total de crédito. Essa rota deve retornar um objeto com o formato a seguir:

```json
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salário",
      "value": 4000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Freela",
      "value": 2000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Pagamento da fatura",
      "value": 4000,
      "type": "outcome"
    },
    {
      "id": "uuid",
      "title": "Cadeira Gamer",
      "value": 1200,
      "type": "outcome"
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}
```
