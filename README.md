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
REACT_APP_BACKEND_URL = "http://localhost:8000";
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
Open [http://localhost:3000] to view it in your browser.

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

Se o usuário possuir o token, será redirecionado página Session.
Lading page do sistema, aqui o usuário receberá informacões iniciais e poderá ir para a página de Autenticação (Auth)

### Página Auth

Se o usuário possuir o token, será redirecionado página Session.
Nesta página podemos fazer o login ou o registro (signup) do usuário caso não seja registrado.

### Página Session (Protegida)

Se o usuário não possuir o token, será redirecionado página HOME.
Após o login, o usuário será redirecionado para está página. A depender do seu tipo de interesse essa página exibe conteúdo personalizado
Podemos ir até a página de imóveis (buildings)

### Página Buildings (Protegida)

Se o usuário não possuir o token, será redirecionado página HOME.
Aqui o usuário poderá fazer o CRUD dos seus imóveis.
Seus imóveis são listados assim que a página é renderizada.

### Not Found

Caso o usuário digite um endpoint que não exista, será redirecionado para está página.
