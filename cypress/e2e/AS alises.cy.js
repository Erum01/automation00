/// <reference types="cypress" />

before('clear fields',function(){
    cy.visit('https://admin-demo.nopcommerce.com/login')
    cy.get('#Email').clear()
    cy.get('#Password').clear()
  })

it.only('as alises',function(){
    
  cy.get('#Email').as('admin@yourstore.com')
  cy.get('@admin@yourstore.com').type('something')
  cy.get('#Password').as('admin')
  cy.get('@admin').type('somtjing')
  cy.get('.button-1').click()
  cy.get('#Email-error').contains('Wrong email')

}) 