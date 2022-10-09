# PREFEITURA - FRONT-END

Grupo G:

- Ana Sofia Nunes de Abreu
- Bruno Vieira Campos Gouveia
- Rafael Kimihiro Moribe
- Tiago Vieira Cavalcante

## Intro

Esse projeto faz parte da 3a entrega para o curso de MBA FIAP, trata-se de um protótipo de front-end em REACT.JS.
para simular um portal da prefeitura do Recife, mais clean, direto ao ponto, levando em consideracão as necessidades do usuários.
Será conectado a um back-end em django. Aqui faremos um CRUD para imóveis dos usuários, além de receber algumas listas que serão
renderizadas pelo front-end para auxiliar nos cadastros.

## Pré-requisitos

- Devemos ter o Node.JS instalado no computador.

## Variáveis de Ambiente

Na raiz do projeto crie um arquivo .env

E nele coloque a seguinte linha de código, temos na raiz um arquivo .env.exemple que mostra como fazer para rodar pegar o endpoint do
back-end em localhost.

```js
REACT_APP_BACKEND_URL = "a_raiz_do_endereco_do_back_end";
```

## Instalar Dependências

```shell
yarn
```

## Rodar o Projeto

```shell
yarn start
```

O projeto vai rodar no localhost:3000 em dev
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Ferramentas e principais bibliotecas utilizadas:

- React hooks
- Context API
- Styled Components
- Axios
- React-router-dom (V6)
- React-hook-form
- Yup
- Hookform/resolvers

## O Projeto

obs: Para poder navegar nas páginas que necessitam de autenticacão, fazer o signup e depois o login.

### Página Home

### Página Auth

### Página Sessions

### Página Buildings

### Not Found
