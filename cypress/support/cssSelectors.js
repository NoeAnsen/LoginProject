export const getDataTestSelector = (dataTest) =>{
return cy.get(`[data-test="${dataTest}"]`)}
  