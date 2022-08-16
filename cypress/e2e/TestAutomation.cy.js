/// <reference types="cypress" />

// the next comment line loads the custom commands from the plugin
// so that our editor understands "cy.frameLoaded" and "cy.iframe"
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('AutomationSite',function(){
    //this.beforeEach('before each',function(){
        
    it('Form',function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
        //hit the XHR in i frame
       // .contains('https://fs2.formsite.com/include/form/embedManager.js?1434677811')
   // .contains('a[id="formAnchor1434677811"]')
    //cy.get('iframe')

        //Form
        cy.wait(10000)
        cy.frameLoaded('#frame-one1434677811')
       // cy.wait(10000)
        cy.iframe()
        .find('input[id="RESULT_TextField-1"]') 
        .eq(0).type('Erum')

    })
})