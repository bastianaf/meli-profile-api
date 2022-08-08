# MELI Profile API

## Description

<img align="right" width="150" height="150" src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.19.1/mercadolibre/180x180.png" alt="meli logo" /></img>

This repository contains the source code of _MERCADO LIBRE PROFILE_ challenge

> El backend debe tener los endpoints necesarios para servir la información que necesita el
frontend. Los endpoints quedan a libre definición, pero sí vamos a proveerte un servicio de
ejemplo llamado “MercadolibreService” que expone los distintos mocks de información que
vas a necesitar.

## Installation

```bash
$ npm install
```
### Prerequisites  

- NodeJs `^14.0.0`

### Environment

Create an `.env` file on root of project or export the requiered environment variables, you can check for the required env vars on `.env.example` file

## Running the app

Run the following to start the app locally
```bash
# development watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## API

MELI PROFILE API expose this resources:

* User
  * Profile
  * Purchases
  * Restrictions
* Product Payment Info
* Product Shipment Info
* Meli Level Info

>💡 Note: Remember that you need to attach a valid `x-api-key` to the header on each request. This is set as a minimum security layer

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Framework

<a href="http://nestjs.com/" target="blank"><img align="left" width="175" height="100" style="margin-right: 20px" src="https://nestjs.com/img/logo_text.svg" alt="Nest Logo" /></a>

[Nest](https://github.com/nestjs/nest) is a TypeScript progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. [read more here](https://docs.nestjs.com/support).

<br>

___

<right> _Author:_ [@bastianaf](https://github.com/bastiaf)</right>
