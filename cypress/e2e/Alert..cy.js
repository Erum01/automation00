/// <reference types="cypress" />
describe('testsuite',function(){

    beforeEach('visit site',function(){
   // cy.visit('https://mail.rediff.com/cgi-bin/login.cgi')
      cy.visit('https://nxtgenaiacademy.com/alertandpopup/')
        //cy.wait("3000")
   
    })


describe('test suite2',function(){

    it('verify alert window',function(){

        cy.get('.elementor-widget-container').find('[name="alertbox"]').click()
        // alert will not appear in cypress window
        // but an accept line with string will appear after test run
        //cy.on('window:alert',(str) =>{  // trigger event using cy.on
                                        //make a variable str
        cy.on('window:alert',function(str){ 
         expect(str).to.equal('I am an alert box!')  // verify the alert text
            }) 
    }) 

    it('verify confirm window ',function(){
          //  cy.visit('https://nxtgenaiacademy.com/alertandpopup/')
            cy.get('.elementor-widget-container').find('[name="confirmalertbox"]')
            .click()
            cy.get('.elementor-element-01aedcf > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > center > button')
            .click()
            cy.on('window:confirm',function(str2){
            expect(str2).to.equal('Confirm pop up with OK and Cancel button')

            })
        })
//#content > article > div > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-859c260.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div.elementor-column.elementor-col-33.elementor-top-column.elementor-element.elementor-element-01aedcf > div > div > div > div > center > button

})

})