describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200')

    cy.contains("Heroes").click();
    cy.url().should("include","heroes")

    cy.contains("Dashboard").click();
    cy.url().should("include","dashboard")

    cy.contains("Bombasto").click();
    cy.url().should("include","detail/13")

    cy.contains("go back").click();
    cy.url().should("include","dashboard")
  })
})