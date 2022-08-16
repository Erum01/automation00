/// <reference types="cypress" />


describe('bankCustomer',function(){
        this.beforeEach('customer',function(){
            cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
            cy.get('.borderM > :nth-child(1) > .btn').click()
            cy.get('.form-group').find('#userSelect')
            .select('Hermoine Granger')
            .should('have.value',1)
           // .should('have.value','Hermoine Granger')  err
            //.find('[name="userSelect"]')
            //.should('have.value','---Your Name---')
            cy.get('form.ng-valid > .btn').click()
        })
    
    it('Verify customer Name',function(){
        cy.log('*****Verify customer Name*****')
        cy.get('.fontBig') //.contain('Hermoine Granger')
        .should('have.text', 'Hermoine Granger')
        //verify only selected customer is logged in ???

    })
    it('Verify Account Number 1001',function(){

            cy.log('*****Verify Account Number1001*****')
            cy.get('#accountSelect')
            .select('1001')
            //verify account no. balance and currency ??? 
    })
    it('View Transaction History',function(){

        cy.log('*****View Transaction History*****')
        cy.get('[ng-class="btnClass1"]').click()
        // reset history ??
        // view history for custom dates ??
    })
    it('Deposit',function(){

        cy.log('*****Deposit*****')
        cy.get('[ng-class="btnClass2"]').click()
        cy.get('.form-control').type('100')
        cy.get('form.ng-dirty > .btn').click()
        cy.get('.error').should('be.visible')
        .should('have.text','Deposit Successful')
        //verify balance amount after deposit 
    })
    it('Withdrawl',function(){

        cy.log('*****Withdrawl*****')
        cy.get('[ng-class="btnClass3"]').click()
        cy.get('.form-control').type('50')
        cy.get('.form-control').click()
                //verify balance amount after Widrawl 

    })
    it('Home button',function(){

        cy.log('*****Home button*****')
        cy.get('.home').click()
       // cy.title()
                //verify user is on home page to select customer and admin
    })
    it('Log out button',function(){

        cy.log('*****Log out button*****')
        cy.get('.logout').click()
       // cy.title()
                //verify user is on select customer page
    })

})