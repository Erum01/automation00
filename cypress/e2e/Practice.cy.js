/// <reference types="cypress" />

const { addSyntheticLeadingComment } = require("typescript")

// fixture test Dats is present in Fixture foldur.
  //Can reuse the Fixture file in multipple Test cases

describe('Test suite',function(){

   this.beforeEach('Fixtures',function(){

    cy.visit("https://demo.nopcommerce.com/register?returnUrl=%2F")

   })
   it("Reg form",function(){

    cy.log("this is some case")
    cy.log("this is terst case for register form")
        
    cy.get('.female').click()
    cy.get('#FirstName').type('Erum')
    cy.get('#LastName').type('Naz')
  /* 
        // practice to selectn val;ue from dropdown
  cy.get('.date-picker-wrapper').click()
   // cy.get('select[name="DateOfBirthDay"]')
    cy.get('.valid')
  //  .find('[value="5"]')
  .click()

    cy.get('.date-picker-wrapper').click()
    cy.get()
    */
    cy.get('#Email').type('erum.naz@gmail.com')
    cy.get('#Newsletter').uncheck().should('not.be.checked')
    //.and('have.value','Newsletter:')
    cy.get('#Company').type('Fixtures')
   // let pwd=
    cy.get('#Password').type('asdf123')
    cy.get('#ConfirmPassword').type('asdf123')
    /*
        // writew function to compare values in two fildes
    it('confirm test',function(){
        const a= a.text()
                expect(bookName).to.equal("a")
    })
    */
    cy.get('#register-button').click() 






   })

})