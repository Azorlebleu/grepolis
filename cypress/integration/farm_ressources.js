let login = '';
let password = '';


context('context', () => {
    beforeEach(() => {
      cy.visit('https://fr.grepolis.com/#')
    })


    it('it', () => {
    /* CONNECTION */
        cy.get("#login_userid").type(login);
        cy.get("#login_password").type(password);
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
        //get ressources
        cy.get("#fto_claim_button").click()
       })
})
  