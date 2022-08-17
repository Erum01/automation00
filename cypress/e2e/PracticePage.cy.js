/// <reference types="cypress" />

describe('Practicepage',function(){
    this.beforeEach('Page',function(){
        cy.log('*****Practice Page*****')
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.reload()
    })

    it('Radio button',function(){
        cy.log('*****Radio buttons*****')
        cy.get('#radio-btn-example > fieldset > legend').contains('Radio Button Example')
        cy.get('[for="radio1"] > .radioButton')//.find('input[type="radio"]')
        .check().should('be.checked')
        //.and('have.value', radio1)
        cy.get('[for="radio2"] > .radioButton').click()
        cy.get('input[type="radio"]').check(['radio2'])
        cy.get('[for="radio3"] > .radioButton')//.contains('Radio3')
        .click()
    })
    it('select country from suggestion',function(){
        cy.log('*****select country from dropdown sugessaion*****')
        cy.get('#autocomplete').type('Pakistan').select('Pakistan')
        // issue : its not selecting the selected sugession with {enter} 
        //.contains('Pakistan').type('{enter}')

    })
    it('select from dromdown option',function(){

        cy.get('#dropdown-class-example').select('Option1')

    })
    it('check boxs',function(){
        cy.get('#checkBoxOption1').check().should('be.checked')
        cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
        cy.get('#checkBoxOption3').uncheck().should('not.be.checked')

    })
    it('switch window',function(){
        cy.get('#openwindow').click()
    })
    it('switch tab',function(){
        cy.get('#opentab').invoke('removeAttr','target')
    })
    it('switch to alert',function(){
        cy.get('#name').type('Erum')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
    })
    
})