

const shortWaitingTime = 1000;
const longWaitingTime = 2000;

describe('Dashboard demo', () => {
    before(() => {
      cy.visit('http://localhost:4200/dashboard');
      cy.wait(longWaitingTime);
    });



    it('displays default widgets', () => {
      cy.get('.gridster-item').should('have.length', 7)
      cy.wait(shortWaitingTime);

      // toggle menu
      cy.get('.header .menu.toolbar-button').click();
      cy.wait(longWaitingTime);
      cy.get('.header .menu.toolbar-button').click();
      cy.wait(longWaitingTime);

      // remove all widgets
      cy.get('#dashSettingRemoveAllBtn').click();
      cy.wait(shortWaitingTime);

      cy.get('p-confirmdialog button[ng-reflect-label="Yes"]').click();
      cy.wait(shortWaitingTime);
      cy.get('.gridster-item').should('have.length', 0)
      cy.wait(shortWaitingTime);



      // save layout
      cy.get('#dashSettingSaveBtn').click();
      cy.wait(shortWaitingTime);
      cy.reload();



      // reset
      cy.get('#dashSettingResetBtn').click();
      cy.wait(shortWaitingTime);
      cy.get('p-confirmdialog button[ng-reflect-label="Yes"]', {timeout: shortWaitingTime}).click();
      cy.get('.gridster-item').should('have.length', 7)

    })


  }
)

