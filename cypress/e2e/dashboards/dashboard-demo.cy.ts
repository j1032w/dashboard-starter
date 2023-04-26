import '@4tw/cypress-drag-drop'

const timeout = 2000;
const actionWaitingTime = 1000;

describe('Dashboard demo', () => {
    before(() => {
      cy.visit('http://localhost:4200/dashboard')
    });



    it('displays default widgets', () => {
      cy.get('.gridster-item').should('have.length', 7)
      cy.wait(actionWaitingTime);

      // cy.get('#dashSettingRemoveAllBtn').click();
      // cy.wait(actionWaitingTime);
      //
      //
      // cy.get('p-confirmdialog button[ng-reflect-label="Yes"]', {timeout}).click();
      //
      // cy.get('.gridster-item').should('have.length', 0)
      // cy.wait(actionWaitingTime);
      //
      // cy.get('#dashSettingWidgetListBtn').click();
      // cy.wait(actionWaitingTime);
      //
      // cy.get('das-dashboard-widget-list .p-dialog-content', {timeout}).should('be.visible');
      // cy.wait(actionWaitingTime);

      //
      // cy.get('das-dashboard-widget-list .widget-item[id="housingMarket"]').trigger("dragstart");
      // cy.get('das-dashboard-view').trigger("drop");


      // cy.get('das-dashboard-widget-list .widget-item[id="housingMarket"]').drag(
      //   'gridster',
      //   {
      //
      //     source: { }, // applies to the element being dragged
      //      target: { x:300, y:300 }, // applies to the drop target
      //      force: true, // applied to both the source and target element
      //   }
      // )

       movePiece('das-dv-widget-sp500 .title.drag-handler', 400, 400);

      // const widgetSelector = 'das-dashboard-widget-list .widget-item[id="housingMarket"]';
      //
      // cy.get(widgetSelector).first()
      //   .trigger('dragstart')
      //
      // cy.get('gridster')
      //   .trigger('drop')
    })


  }
)


function movePiece (selector:string, x:number, y:number) {
  cy.get(selector)
    .trigger('mousedown', { which: 1 })
    .trigger('mousemove', { clientX: x, clientY: y })
    .trigger('mouseup', { force: true })
}
