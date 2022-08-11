/// <reference types="cypress" />
// beforeEach, afterEach , before, after
describe('Test Suite',function(){

    before(() => {
        // runs once before all tests in the block
        cy.log('*****This is setup*****')
      })


      after(() => {
        // runs once after all tests in the block
        cy.log('*****This is tear down Test*****')
      })
    
      beforeEach(() => {
        // runs before each test in the block
        cy.log('*****This is Befor each Test*****')

      })

      afterEach(() => {
        // runs after each test in the block
        cy.log('*****This is After each Test*****')

      })
      


    it('Search',function(){
        cy.log('*****This is Search Test*****')

    })

    it('Advance Search',function(){
        cy.log('*****This is Advance Search Test*****')


    })
    it('Listing Product',function(){
        cy.log('*****This is Listing Product Test*****')

        
        
          
        
        
          


    })
})