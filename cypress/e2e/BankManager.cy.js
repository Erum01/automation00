/// <reference types="cypress" />


describe('BankManager',function(){
    this.beforeEach('Manager',function(){
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        cy.log('*****Manager*****')
        cy.get(':nth-child(3) > .btn').click()
      /*  cy.get('.borderM > :nth-child(1) > .btn').click()
        cy.get('.form-group').find('#userSelect')
        .select('Hermoine Granger')
        .should('have.value',1)
       // .should('have.value','Hermoine Granger')  err
        //.find('[name="userSelect"]')
        //.should('have.value','---Your Name---')
        cy.get('form.ng-valid > .btn').click()
        */
    })

    it('Add New customer',function(){
        
        cy.get('[ng-class="btnClass1"]').click()
        cy.get(':nth-child(1) > .form-control').type('Erum')
        cy.get(':nth-child(2) > .form-control').type('Naz')
        cy.get(':nth-child(3) > .form-control').type('Test')
        cy.get('form.ng-dirty > .btn').click()
       // cy.get('.btn btn-default').click()
       // verify form customer is available in Banking customer or not ???
       // verify customer id should be unique
       // verify same data is not accepted twice
       // verify the alert text
     //  cy.on('window:alert',function(str){ 
      //  expect(str).to.equal('Customer added successfully with customer ') 
        // customer id is changing each time a new customer is added
     }) 

     it.only('Open Account',function(){
        cy.get('[ng-class="btnClass2"]').click()
       // cy.get('.center')// .find('.btnClass2')
      //.find('.btn-primary')
      //.find('button[ng-class="btnClass2"]') .click()
      cy.get('#userSelect').select('Hermoine Granger')
      cy.get('#currency').select('Pound')
      cy.get('form.ng-dirty > button').click()
      //verify alert
      // A new account is created each time Account created successfully with account Number :1016
    }) 

     it('Customers',function(){
        cy.get('[ng-class="btnClass3"]').click()
        //search customer
        cy.get('.form-control').type('ron')
        .clear()
        //search record in table
        cy.get('table[class="table table-bordered table-striped"]') // table is the tag of attribute
        .contains('td','Harry')
        // delete record from table ???

     })
     //verify if tyhe custromers account is deleted it sbould be updated in the datatable

})
