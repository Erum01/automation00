/// <reference types="cypress" />

import { addSyntheticLeadingComment } from "typescript"

// import cypress from "cypress"
describe("this is DemoQA",function(){
    it("google",function(){
        cy.visit("https://demoqa.com/")

        // click on elements
        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg > path').click()
        //cy.get('#google_ads_iframe_\/21849154601\,22343295815\/Ad\.Plus-Anchor_0__container__').click()
        // click on arrow head
        cy.get(':nth-child(2) > .group-header > .header-wrapper > .header-right').click()
        // click on form
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click()
    
        // type  first name 
        cy.get('#firstName').type("erum")

        // type lastname
        cy.get('#lastName').type("naz")

        // type email
        cy.get('#userEmail').type("test@test.com")
        // let Female = 'Female'
        cy.wait(4000)
        // select gender
      cy.get('.custom-control.custom-radio.custom-control-inline')// hit by class of div1
      cy.get('[class="custom-control custom-radio custom-control-inline"]')
      cy.get('.custom-radio').contains('Female').click()
    //   cy.get('input[value="Female"]').click()
    //   cy.get('class="col-md-9 col-sm-12')
    //   .find('custom-control custom-radio custom-control-inline')
    //   .should('have.id','gender-radio-2')
    //   .should('have.type')
    //   .and('have.value',Female)
     

       //cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label')  // hit by cypress label
       

    //    cy.get('custom-control-input').contains('Female')
    //    .should('be.visible')
    //    .and('have.id','gender-radio-2')


       //.within(function(){
       // cy.get('custom-control-label')
       // cy.contains('custom-control-label')

        //
      // .click({force: true})
       
       //cy.get('[data-left="484.8999938964844"]')
     //  cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').contains('Female')  // hit by cypress label
       // cy.get('#genterWrapper > .col-md-9 > :nth-child(2)') // with out lable
      //  .find('radio')


      // select number
      cy.get('#userNumber').type('0123456789')



    })


        
       //.select('Female')
       

        //     cy.get('select').select('Female')

        //<input name="gender" required="" type="radio" id="gender-radio-2" class="custom-control-input" value="Female">)
        
       // cy.get('#userEmail').select()
      
    })

/*it("google",function(){
    cy.visit("https://www.google.com/")
*/

