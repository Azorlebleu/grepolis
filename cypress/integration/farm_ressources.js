
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

    //check if the button is disabled or not 
    cy.get('#fto_claim_button').should('not.have.class', 'disabled')

    //get ressources
    cy.get("#fto_claim_button").click()
    cy.wait(1000)

    //Verify we did indeed farm ressources
    cy.get('#fto_claim_button').should('have.class', 'disabled')
  })
})
