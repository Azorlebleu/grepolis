context('Waiting', () => {
    beforeEach(() => {
      cy.visit('https://fr.grepolis.com/#')
    })
    // BE CAREFUL of adding unnecessary wait times.
    // https://on.cypress.io/best-practices#Unnecessary-Waiting
  
    // https://on.cypress.io/wait
    it('connects', () => {
        cy.get("#login_userid").type("Azorlebleu");
        cy.get("#login_password").type("Rhty9zk7Z!wKD3G");
        cy.get("#login_Login").click();

        cy.contains("BASSAE").click();

        //farm 
        //open farm window
        cy.wait(5000)
        //cy.window().then(win => win.GPWindowMgr.Create(GPWindowMgr.TYPE_FARM_TOWN_OVERVIEWS, _('Farming villages'), {}))
        cy.get('.toolbar_button.premium').trigger('mouseover')
        cy.wait(1000)
        cy.contains("Villages de paysans").click()
        cy.wait(1000)
        cy.get("#fto_claim_button").click()
       })
})
  