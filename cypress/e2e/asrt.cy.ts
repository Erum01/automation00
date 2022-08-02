// practice here using TS files 
it('learning assertions',function(){
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()

 //implicit assertion
//If an assertion is applicable to the object obtained from the parent command
// in a chain, it is known as the implicit assertion.
cy.get('#query-btn',{timeout:8000})
.should('contain','Button')
.should('have.class','query-btn btn btn-primary')
.should('be.visible')
.should('be.enabled')

cy.get('#query-btn').invoke('attr','id')
.should('equal','query-btn')

cy.get('#query-btn',{timeout:8000})
.should('contain','Button')
.and('have.class','query-btn btn btn-primary')

//Explicit assertion
//If an assertion is applicable to an object directly,
// it is known as the explicit assertion.
// The popular explicit assertions include assert/expect.

// expect ...BDD
expect(true).to.be.true
let name = 'erum' //explicitly added this in real code
expect(name).to.be.equal('erum') //no error means assertion has passed
// assert... TDD

cy.get('.first')

 assert.isString('apple', 'val is string')

//  assert.isOk('', 'everything is ok')
assert.equal(3, 3, 'Equal')

// assert.deepEqual(4,4,'not equal')

})