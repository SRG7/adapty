context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://dev.adapty.io/registration')
  })

  // https://on.cypress.io/interacting-with-elements

  it('Сheck empty form', () => {
    // https://on.cypress.io/type
    cy.get('div:nth-child(7) > div > div > span > button')
    .click({ multiple: true });
    cy.get('div:nth-child(4) > div.ant-col.ant-form-item-control-wrapper > div > div')
    .should('have.text','Required field');
    cy.get('div:nth-child(5) > div.ant-col.ant-form-item-control-wrapper > div > div')
    .should('have.text','Required field');
    cy.get('div:nth-child(6) > div.ant-col.ant-form-item-control-wrapper > div > div')
    .should('have.text','Required field');
  })

 it('Сheck input only email form', () => {
     // https://on.cypress.io/type
     cy.get('div:nth-child(4) > div.ant-col.ant-form-item-control-wrapper > div > span > input')
       .type('fake@email.com')
       .should('have.value', 'fake@email.com')
       .and('not.have.text','Required field');
     cy.get('div:nth-child(5) > div.ant-col.ant-form-item-control-wrapper > div > div')
     .should('not.have.text','Required field');
     cy.get('div:nth-child(6) > div.ant-col.ant-form-item-control-wrapper > div > div')
     .should('not.have.text','Required field');
      cy.get('div:nth-child(7) > div > div > span > button')
          .click({ multiple: true });
   })
})