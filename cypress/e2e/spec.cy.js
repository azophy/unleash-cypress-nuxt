// cypress/e2e/spec.cy.js
describe('Basic website test', () => {
  it('Visits the homepage', () => {
    // START CHANGES
    const cookie = JSON.stringify({
      "ENABLE-BUTTON-A": true,
      "ENABLE-BUTTON-B": true
    })
    cy.setCookie('OVERRIDE_FEATURE_TOGGLE', cookie) 
    // END CHANGES

    cy.visit('http://localhost:3000')

    cy.contains('Button A').click()

    cy.contains('Button B').click()
  })
})
