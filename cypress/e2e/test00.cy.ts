import cypress from "cypress"
describe("this is DemoQA",function(){
    it("google",function(){
        cy.visit("https://demoqa.com/")
        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg > path').click()
        //cy.get('#google_ads_iframe_\/21849154601\,22343295815\/Ad\.Plus-Anchor_0__container__').click()

        cy.get(':nth-child(2) > .group-header > .header-wrapper > .header-text').click()
        cy.get(':nth-child(2) > .group-header > .header-wrapper > .header-text').click()
    })
})
/*it("google",function(){
    cy.visit("https://www.google.com/")
*/

