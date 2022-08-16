/// <reference types="cypress" />
describe('something',function(){
    it('test one',function(){
        cy.visit('https://admin-demo.nopcommerce.com/')
        cy.login('admin@yourstore.com','admin')

        cy.get(':nth-child(4) > [href="#"] > .nav-icon').click()
        

    })
})