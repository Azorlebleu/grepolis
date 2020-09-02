
function getAmountOfRessources(wood, stone, iron) {
  //gets the amount of wood, stone and iron before adding ressources 
  cy.get('.wood > .wrapper > .amount').invoke('text').then((text) => {
    wood = text;
  });
  cy.get('.stone > .wrapper > .amount').invoke('text').then((text) => {
    stone = text;
  });
  cy.get('.iron > .wrapper > .amount').invoke('text').then((text) => {
    iron = text;
  });
}

context('processing...', () => {
  beforeEach(() => {
    cy.visit('https://fr.grepolis.com/#')
  })


  it('it', () => {
    /* CONNECTION */
    let wood, stone, iron;
    let wood2, stone2, iron2;
    let farm_successful = true;
    cy.get("#login_userid").type(Cypress.env('login'));
    cy.get("#login_password").type(Cypress.env('password'));
    cy.get("#login_Login").click();
    cy.contains("BASSAE").click();

    //wait for the page to fully load 
    cy.wait(5000)

    /* FARM */
    //open farm window
    cy.get('.toolbar_button.premium').trigger('mouseover')
    cy.wait(1000)
    cy.contains("Villages de paysans").click()
    cy.wait(1000)
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
  })
    //Verify we did indeed farm ressources
    //cy.get('#fto_claim_button').should('not.have.class', 'disabled')

    //Select all
    cy.get('.checkbox.select_all').click()
    cy.wait(1000)
    //Get ressources
    cy.get("#fto_claim_button").click()
    cy.wait(1000)
    //Confirm
    cy.contains('Oui').click()

    //Verify we did indeed farm ressources
    cy.get('#fto_claim_button').should('have.class', 'disabled')
  })
})
