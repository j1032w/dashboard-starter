import Chainable = Cypress.Chainable;

export function dragTo (subject:any, targetEl:string):Chainable<JQuery<Element>>{
  /*
   * Currently realMouseDown etc. only works in browsers based on Chromium.
   * see https://github.com/dmtrKovalenko/cypress-real-events#requirements
   */
  if (Cypress.isBrowser('firefox'))  return cy.get(targetEl);


  /*
   * explicit scrollBehavior because default breaks some tests
   */
  cy.wrap(subject)
    .first()
    .realMouseDown({ button: 'left', position: 'center', scrollBehavior: 'nearest' })
    .realMouseMove(10, 0, { position: 'center', scrollBehavior: 'nearest' });

  cy.get(targetEl)
    .first()
    .realMouseMove(10, 0, { position: 'center', scrollBehavior: 'nearest' })
    .realMouseUp({ position: 'center', scrollBehavior: 'center' });
  /*
   * workaround for a problem where the original drag selector did work only once
   */
  cy.wait(1000);

  return cy.get(targetEl);
}


export function resize (subject:any, x:number, y:number):Chainable<JQuery<Element>>{
  /*
   * Currently realMouseDown etc. only works in browsers based on Chromium.
   * see https://github.com/dmtrKovalenko/cypress-real-events#requirements
   */
  if (Cypress.isBrowser('firefox'))  return cy.wrap(subject);


  /*
   * explicit scrollBehavior because default breaks some tests
   */
  cy.wrap(subject)
    .first()
    .realMouseDown({ button: 'left', position: 'center', scrollBehavior: 'nearest' })
    .realMouseMove(10, 0, { position: 'center', scrollBehavior: 'nearest' });


  cy.wrap(subject)
    .first()
    .realMouseDown({ button: 'left', position: 'bottomRight', scrollBehavior: 'nearest' })
    .realMouseMove(x, y, { position: 'bottomRight', scrollBehavior: 'nearest' })
    .realMouseUp({ button: 'left', position: 'bottomRight', scrollBehavior: 'nearest' });


  /*
   * workaround for a problem where the original drag selector did work only once
   */
  cy.wait(1000);

  return cy.wrap(subject);
}
