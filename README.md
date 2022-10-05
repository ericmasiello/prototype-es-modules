# Testing Prototype

This is a small prototype to demonstrate how a team could gradually migrate JS files _to_ ES modules and then test them.

## Getting Started

1. Clone the repo
2. Run `npm ci` (using npm v. 8.x.x or later)

### Run the demo app

```bash
npm start
```

### Run the tests
```
npm test
```

## A few notes

The `app.js` file is an ES module that depends on jQuery existing on the DOM. This was done to match the behavior of the client.
There is a corresponding `app.test.js` file that demonstrates how you *could* write tests for such cases. However, in practice, it seems
unsustainable as it will require you stub the DOM for each test case.

Consequently, my recommendation is that the team write `vitest` based tests for simple business logic that does not directly touch the DOM. For DOM based tests,
you're better off using a browser based testing solution like Cypress.