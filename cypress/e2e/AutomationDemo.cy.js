/// <reference types="cypress" />
describe('Test Suite',function(){
 beforeEach('code for every test',function(){
         //repatative code
     cy.visit('https://demo.automationtesting.in/Register.html')
         })

         it('Register',function(){
            // first name
            cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('Erum')
            // Last name
            cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('Naz')
            //Address
            cy.get('.col-md-8 > .form-control').type('Sample address')
            //email
            cy.get('#eid > .form-control').type('test@test.test')
            //phone number
            cy.get('.col-md-8 > .form-control').type('0123456789')
            //Gender radio button
            cy.get(':nth-child(5) > .col-md-4 > :nth-child(2) > input')
           // cy.get('.col-md-4 col-xs-4 col-sm-4') //class
            //cy.get('.ng-touched')
            //contain()
           .click()
           
           //Hobies check box

           cy.get('#checkbox1')  // get element
           .check()      // opetation       
           .should('be.checked') //is checked or not
           .and('have.value','Cricket') // check value
           cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
           cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')
           //the above code will check all three check boxes
                // if it is checked
                cy.get('#checkbox1').uncheck().should('not.be.checked').and('have.value','Cricket')
                cy.get('#checkbox2').uncheck().should('not.be.checked').and('have.value','Movies')
                cy.get('#checkbox3').uncheck().should('not.be.checked').and('have.value','Hockey')
     // issue: we are checking them one by one
     cy.get('input[type="checkbox"]')  // now this locator is pointing to all checkboxes
        // checkbok attribute is same it is attribute so keep it in squar bracket
        // input is tag name it is optional
        // now we can pass array of values
            .check(['Cricket','Movies'])        
          
              / //Language  
               // multiple selection

             // cy.get('.ui-autocomplete-multiselect').click()
              // cy.get('.ui-autocomplete').find('.ng-scope').contains('Arabic').click()
               
              // cy.get('[style="display: block;"]').find('.ui-autocomplete').find('.ng-scope').contains('Arabic').click()
               
             // cy.get('.ui-autocomplete.ui-front.ui-menu ui-widget.ui-widget-content.ui-corner-all')
             //cy.get('[class="col-md-4 col-xs-4 col-sm-4"]').find('[style="display: block;"]').find('.ui-autocomplete').find('.ng-scope').contains('Arabic').click()
             //   cy.get('#msdd').click() // opens the dropdown  
    // issue : couldn't open the dropdown
            // now find a common locator i.e list item tag
          //  cy.get('[style="display: block;"]').find('.ui-corner-all').contains('Bulgarian').click()
           
          //  cy.wait(5000)
           // cy.get('.ui-corner-all').find('.ng-scope')//.should('be.visible') //class in anchor tag
            //.find('Arabic').click()
          //  cy.get('.ui-corner-all').contains('Bulgarian').click()
           // cy.get('.ui-corner-all').contains('German').click()  
            

                //Skills dropdown  (static - can see the tah in DOM)
                // single selection dropdown can't type input
                cy.get('#Skills') // get element id
                .select('Documentation')   // select option
                .should('have.value','Documentation') // verify its value
               
                // Country
                // cy.get('#countries').click()

                //select country  
                // single selection search
              //  cy.get('.select2-selection').click().type('Jap') // no effect 
              cy.get('[role="combobox"]').click()  // opens drop dowm
              // now ther is input field an scroll option
              cy.get('[class="select2-search__field"]').type('jap') // get class type some text
              cy.get('[class="select2-search__field"]').type('{enter}') // key board action command

              // year
             // cy.get('#yearbox').click() // by id
             // cy.get('#yearbox').type('z1998')
            //  cy.get('.ng-valid-required').click()
              // month
             // cy.get(':nth-child(11) > :nth-child(3) > .form-control').click()

                //day
               // cy.get('#daybox').click()


                
           



        })

    
})
