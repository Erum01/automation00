/// <reference types="cypress" />

describe('CustomCommand',function(){

   it('Login',function(){
  /*
    cy.visit('https://admin-demo.nopcommerce.com/login')
    cy.get('#Email').clear().should('be.empty').type("admin@yourstore.com")
    cy.get('#Password').clear().should('be.empty').type('admin')
    cy.get('.button-1').click()
  */
      cy.login('admin@yourstore.com','admin')
      cy.title().should('be.equal','Dashboard / nopCommerce administration')
   })

   it('AddCustomer',function(){

   /* 
    cy.visit('https://admin-demo.nopcommerce.com/login')
    cy.get('#Email').clear().should('be.empty').type("admin@yourstore.com")
    cy.get('#Password').clear().should('be.empty').type('admin')
    cy.get('.button-1').click()
  */

    cy.login('admin@yourstore.com','admin')
    cy.title().should('be.equal','Dashboard / nopCommerce administration')

    cy.log('***Script for Add new customer****')
    
   })

   it('EditCustomer',function(){

    /*
    cy.visit('https://admin-demo.nopcommerce.com/login')
    cy.get('#Email').clear().should('be.empty').type("admin@yourstore.com")
    cy.get('#Password').clear().should('be.empty').type('admin')
    cy.get('.button-1').click()
    */
    cy.login('admin@yourstore.com','admin')
    cy.title().should('be.equal','Dashboard / nopCommerce administration')
    cy.log('***Script for Edit customer****')

   })

   
   
})