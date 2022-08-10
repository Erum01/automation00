/// <reference types="cypress" />
describe('Test suite for table',function(){
    it('Table Test',function()
    {
        //check certen value in table
        cy.visit('https://testautomationpractice.blogspot.com/')
        // 1. check value present anywhere in yhe table
        cy.get('table[name="BookTable"]') // table is the tag of attribute
        .contains('td','Learn Selenium')
       // .should('be.visible')

        //2. check the value present in specific row or column
      //  #HTML1 > div.widget-content >  use locator for row and column location
        cy.get('table[name="BookTable"] > tbody > tr:nth-child(2) > td:nth-child(3)')
        //#HTML1 > div.widget-content > table > 
        .contains('Selenium')
        .should('be.visible')

        // check value based on condition by iterating value
        // e.g. verify book name whose author is ...
        //#HTML1 > div.widget-content > table > tbody > tr:nth-child(4) > td:nth-child(2)
        cy.get('table[name="BookTable"] >tbody > tr > td:nth-child(2)')
        .each(($e,index,$list)=> {
        const text=$e.text()
        if(text.includes("Amod"))
        {
            cy.get('table[name="BookTable"] >tbody > tr > td:nth-child(1)')
            .eq(index)
            .then(function(bname)
            {
                const bookName= bname.text()
                expect(bookName).to.equal("Master In Java")
            })
        }
    
        })
   
   
    })
})