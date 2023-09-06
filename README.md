# Example Nuxt 3 x Unleash x Cypress Project

Example on controlling [Unleash](https://getunleash.io) on [NuxtJs](https://nuxt.com) app using [Cypress](https://cypress.io) End-to-End testing

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Starting the test

```bash
npx cypress run --browser chrome --spec cypress/e2e/spec.cy.js 
```
