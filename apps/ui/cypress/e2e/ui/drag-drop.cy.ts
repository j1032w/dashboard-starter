import {TEST_SERVER_URL} from '../e2e.constant';


describe('UI drag drop', () => {
    before(() => {
      cy.visit(`${TEST_SERVER_URL}user-interface/drag-drop`);
    });


    it('drag first todo item to done list', () => {
      cy.get('#getToWork').dragTo('#doneList').should('contain', 'Get to work');

    })

  }
)




