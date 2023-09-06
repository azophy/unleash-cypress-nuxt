// cypress/e2e/spec.cy.js
describe('Basic website test', () => {
  it('Visits the homepage', () => {
    cy.visit('http://localhost:3000')

    cy.contains('Button A').click()

    cy.contains('Button B').click()
  })
})
