/// <reference types="Cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('contains Grex', () => {
        cy.get('h1').should('contain', 'Grex')
    })
})
