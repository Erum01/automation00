/// <reference types="cypress" />
it('Alert Practice',function(){
   // cy.visit('https://mail.rediff.com/cgi-bin/login.cgi')
cy.visit('https://nxtgenaiacademy.com/alertandpopup/')

cy.get('.elementor-widget-container').find('[name="alertbox"]').click()
// alert will not appear in cypress window
// but an accept line with string will appear after test run
cy.on('window:alert',(str) =>{  // trigger event using cy.on
                                //make a variable
    expect(str).to.equal('I am an alert box!')  // verify the alert text
})

cy.get('.elementor-widget-container').find('[name="confirmalertbox"]').click()

})