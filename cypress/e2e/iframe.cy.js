/// <reference types="cypress" />
//help site
//https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/
//install npm install -D cypress-iframe

// the next comment line loads the custom commands from the plugin
// so that our editor understands "cy.frameLoaded" and "cy.iframe"

/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Test Suite',function(){
    it('iframe',function(){
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="learning-path"]') 
        .eq(0).click()  //eq is jQuerry funcation which returns value of index

    })

    it('verify webtable',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('tr td:nth-child(2)').each(($e1,index,$list) =>{
        
        //Iterate through an array like structure (arrays or objects with a length property).
            const tabledata = $e1.text();
            if(tabledata.includes("webServices"))
            {
                cy.get("tr td:nth-child(2)").eq(index).next()
                .then(function(predicate){
                 expect(pricedate).to.equal('35');
                })
            }  
        })  
            
    })
})
