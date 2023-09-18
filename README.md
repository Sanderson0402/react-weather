# Documentação do React Weather

Bem-vindo à documentação do ReactWeather, um aplicativo construído com React para exibir informações meteorológicas em tempo real de uma cidade específica. Criei com o objetivo de estudar o consumo de APIs na arquitetura API RESTful. Esta documentação fornece uma visão geral da estrutura do projeto, principais componentes e funcionalidades.

## Índice
1. [Visão Geral do Projeto](#visão-geral-do-projeto)
2. [Frontend em React](#frontend-em-react)
3. [Dependências](#dependências)
4. [Configuração da API](#configuração-da-api)

## Visão Geral do Projeto
O aplicativo de clima permite aos usuários consultar informações meteorológicas de uma cidade específica. O aplicativo é construído com React e consome dados de uma API de previsão do tempo. Ele exibe a previsão atual e estendida do clima.

### Frontend em React
O aplicativo é construído com o framework React. Ele é dividido em vários componentes, incluindo:

- `App.js`: O componente principal que gerencia o estado do aplicativo e faz as solicitações à API.
- `input.js`: Um componente que permite ao usuário inserir o nome da cidade.
- `weatherDisplay.js`: Um componente que exibe as informações climáticas atuais.
- `extendedForecast.js`: Um componente que exibe a previsão estendida do clima.
- `weatherIcon.js`: Um componente que exibe o ícone correspondente da condição climática.

### Dependências
O aplicativo utiliza as seguintes dependências principais:

- `react`: Biblioteca para construir interfaces de usuário.
- `useState` e `useEffect`: Hooks do React para gerenciar o estado e os efeitos colaterais.
- `css.module.css`: Arquivo CSS para estilizar os componentes.

## Configuração da API
O aplicativo consome dados da API de previsão do tempo da OpenWeatherMap. Para configurar a API, siga estas etapas:

1. Obtenha uma chave de API gratuita em [OpenWeatherMap API](https://openweathermap.org/api).
2. Substitua `'SUA KEY'` na variável `apiKey` em `App.js` pela chave de API que você obteve.


