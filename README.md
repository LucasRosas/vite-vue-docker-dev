# vite-vue-docker

This template should help get you started developing with Vue 3 in Vite and Docker.

OBS: Tenha o Docker instalado.

Na primeira vez:

- Acesse a pasta .docker pelo terminal, usando `cd .docker`.
- Se você estiver no windows rode `config.bat`, se você estiver no mac rode `sh config.sh`.
- Tendo finalizado o passo anterior, volte à raiz do projeto `cd ..` e rode o comando `npm run dev`, isso vai iniciar o servidor dentro do docker.

Ao iniciar um dia comum de trabalho:

- Na raiz do projeto, rode o comando `npm run dev` no terminal, isso vai iniciar o servidor dentro do docker. E pronto!
- Se precisar iniciar o servidor no seu próprio sistema operacional, o comando é `npm run vite`. Nesse caso, você deve ter o node.js na versão 18.14.2 e deve se certificar que a pasta node_modules está corretamente montada. Você pode rodar `npm install` se a pasta node_modules não existir e depois o `npm run vite`.

## Fazendo isso manualmente

- Acesse a pasta .docker pelo terminal, usando o comando `cd .docker`.
- Inicie a imagem do node:lts-alpine3.16 pelo comando `docker build -t node-lts .`
- Volte para a raiz do projeto pelo comando `cd ..`
- Inicie o conteiner `docker-compose up --build --no-recreate -d`. As configurações do conteiner estão no arquivo docker-compose.yml.
- Ao finalizar, rode o comando `docker exec -it vite-docker sh -c \"npm install\"`. Isso irá instalar as dependências do projeto usando o node instalado na imagem e não o do seu sistema operacional.

Tudo iniciado, você pode, a partir de agora, rodar `npm run dev`. Esse comando liga o conteiner e inicia o servidor vite dentro dele.

Como dito anteriormente, o comando `npm run vite` é o que roda o servidor no seu próprio sistema operacional.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
