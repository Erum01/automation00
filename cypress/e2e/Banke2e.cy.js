/// <reference types="cypress" />


describe('Bank',function(){
    this.beforeEach('Manager',function(){
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        cy.log('***** Manager *****')
        cy.get(':nth-child(3) > .btn').click()
    })
    //verify the newly added customer by manager is available in the dropdown section of the customer
    it('Customer added by manager is available in customer portal ',function(){
        cy.log('*****verify the newly added customer by manager is available in the dropdown section of the customer*****')
        cy.get('[ng-class="btnClass1"]').click()
        it('return string',function(){ // define funcation to store value of newly created record

        cy.get(':nth-child(1) > .form-control').type('Draco')
        cy.get(':nth-child(2) > .form-control').type('Malfoye')
        cy.get(':nth-child(3) > .form-control').type('Test') // new customer has been created
        .then()
         })
        cy.log('*****Home button*****')
        cy.get('.home').click()
        cy.reload()
      // Now go to customers 
      cy.get('.borderM > :nth-child(1) > .btn').click()
      //cy.get('.center').find('button[class="btn btn-primary btn-lg"]').click()
      // select cuatomer to log in
     // cy.get('.form-group').find('#userSelect')
      //.select('Draco Malfoye')
       
    })
})