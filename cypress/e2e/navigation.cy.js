/// <reference types="cypress" />

import { addSyntheticLeadingComment } from "typescript"

describe('Navigation test suite',function(){

    it('navigation',function(){

       cy.visit('https://demo.nopcommerce.com/')
       cy.title().should('eq','nopCommerce demo store')

       // User is on Home Page
       cy.get('.ico-register') 
       .contains('Register')  // contain is always used to verify text
       .click()
       // user nevigateb to Register Page
       cy.title().should('eq','nopCommerce demo store. Register')
 
       cy.go('back') // from reg to home
       cy.title().should('eq','nopCommerce demo store') //home

       cy.go('forward') // from home to reg
       cy.title().should('eq','nopCommerce demo store. Register') // reg page

        cy.go(-1) // back one pagde
        cy.title().should('eq','nopCommerce demo store')
        cy.go(1) // forward one page
        cy.title().should('eq','nopCommerce demo store. Register') // reg page

        cy.reload()
       
       /* cy.get('#menu-item-4131 > [href="https://nxtgenaiacademy.com/menu/"] > .text-wrap')
        .click()
        cy.get('[class="nav-arrow fa fa-angle-right"]')
        .click()
       cy.get('[class="text-wrap"]')
       cy.get('[class="menu-link"]').should('be.visible')
       .should('have.id','#menu-item-4132')
      //.should('have.text','Demo Site – Alert and Popup)
        .click()
       /* .find('[class="text-wrap"]')
       .should('have.id','#menu-item-4132')
      .should('have.text','Demo Site – Alert and Popup')
      help from : cy.get('#menu_admin_viewAdminModule > b').should('be.visible').trigger('mouseover').click()
    cy.wait(5000)
    cy.get('#menu_admin_UserManagement').click({force: true})
        */
    })
})