/// <reference types="cypress" />

import { addSyntheticLeadingComment } from "typescript"

// import cypress from "cypress"
describe("this is DemoQA",function(){
    it("google",function(){
        cy.visit("https://demoqa.com/")
        cy.viewport(1710, 1166)


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
      // don't forget to add . instead of space when using class
      cy.get('[class="custom-control custom-radio custom-control-inline"]')
       
      cy.get('.custom-radio').contains('Female').click() // custom radio is common 
     // cy.xpath('input[value="Female"]').click() 
    //   cy.get('class="col-md-9 col-sm-12')
    //   .find('custom-control custom-radio custom-control-inline')
    //   .should('have.id','gender-radio-2')
    //   .should('have.type')
    //   .and('have.value',Female)
     

       //cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label')  // hit by cypress label issue 
       

    //    cy.get('custom-control-input').contains('Female')
    //    .should('be.visible')
    //    .and('have.id','gender-radio-2')


       //.within(function(){
       // cy.get('custom-control-label')
       // cy.contains('custom-control-label')
      // .click({force: true})
       
       // cy.get('#genterWrapper > .col-md-9 > :nth-child(2)') // with out lable
      //  .find('radio')

      // select number
      cy.get('#userNumber').type('0123456789')
      
      // date picker
      cy.get('#dateOfBirth-wrapper')
   //// cy.get('#dateOfBirth')
    cy.get('.react-datepicker-wrapper')
    cy.get('#dateOfBirthInput').click()
   // 
    
    cy.get('.react-datepicker')
    cy.get('.react-datepicker__week')
    .find('.react-datepicker__day--today')
    .click()
       // make an object
     //date.setDate{date.getDate{} + 2}\
      //let futureDay = date.getDate{}
      //let fututeMonth = date.toLocaleString{'default',{month:'shout'}}
        // select year
      //.select('react-datepicker__year-select')
      //cy.get('react-datepicker__input-container').invoke('val').then((text) => {
        //expect('04 Augest 2022').to.equal(text)
        cy.get('.subjects-auto-complete__value-container').type('sample text')
        // select checkbox
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click()
        // upload image
       // cy.get('.form-control-file')
       cy.get('.form-file')
        cy.get('#uploadPicture')
        .attachFile('../fixtures/logo1.jpg')
       // cy.wait('@upload', { requestTimeout: 120000 });

        //current address
        cy.get('#currentAddress').type('sample text ')

        // select state
       // cy.get('.css-2b097c-container')
       //cy.get('.css-1wa3eu0-placeholder')
       cy.get('#state')
        .click()
        cy.get('#state').type('NCR')
        //.select('NCR')
        //.should('have.value','NCR')
        //find('.css-1wa3eu0-placeholder"')
        //.click()

        //select city // field is disabled
       cy.get('#stateCity-wrapper > :nth-child(3)').click({ force: true })
       
       // submit
       cy.get('#submit').click()

    


      })

    })


        
       //.select('Female')
       

        //     cy.get('select').select('Female')

        //<input name="gender" required="" type="radio" id="gender-radio-2" class="custom-control-input" value="Female">)
        
       // cy.get('#userEmail').select()
      

    

/*it("google",function(){
    cy.visit("https://www.google.com/")
*/

