describe('Portfolio smoke test', () => {
  it('loads home section', () => {
    cy.visit('/')
    cy.contains('Yusuf Ahmad')
    cy.contains('Software Test Engineer')
  })
})
