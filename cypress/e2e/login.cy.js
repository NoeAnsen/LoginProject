import * as users from '../fixtures/login-users.json';
import LoginElements from '../support/pageObjects/login';
describe('Login spec', () => {
  beforeEach(() => {
 
  cy.visit('/')
  })
  const loginPage=new LoginElements();

  it('Login with a standard user', () => {
    cy.userLogin(users.correctStandardUsername, users.correctPassword)
    cy.url().should('include', '/inventory')
  })

  it('Login with a locked user', () => {
    cy.userLogin(users.lockedUsername, users.correctPassword)
    cy.url().should('not.include', '/inventory')
    loginPage.getErrorMessage().should('contains.text', users.errorLockedUsername)
  })

  it('Login with a performance glitch user', () => {
    const t0 = performance.now()
    cy.userLogin(users.performanceUsername, users.correctPassword)
    cy.wrap(performance.now()).then(t1 => { 
    // Since this user is designed to take more time, then the log is showing how long it is taking to load.
    cy.log(`Page load took ${t1 - t0} milliseconds.`);
})
  })
  it('Login with problem user', () => {
    cy.userLogin(users.problemUsername, users.correctPassword)
    cy.url().should('include', '/inventory')
  })

    let dataTable = [
      {
        scenario: "incorrect Password and User",
        username: "wrongUser",
        password: "wrongPassword"
      },
      {
        scenario: "incorrect Password",
        username: "standard_user",
        password: "wrongPassword"
      },
      {
        scenario: "incorrect User",
        username: "wrongUser",
        password: "secret_sauce"
      }
    ]
    // This for each is considering the 3 combinations for invalid user
    dataTable.forEach((value) => {
      it(`Login with invalid user ${value.scenario}`, () => {
      cy.userLogin(value.username, value.password)
      cy.url().should('not.include', '/inventory')
      loginPage.getErrorMessage().should('contains.text', users.errorIncorrectUserOrPassword)

    })
  })
  it('Login with an empty field', () => {
    cy.userLoginEmptyField(loginPage.getUsernameTextbox(), users.correctStandardUsername)
    cy.url().should('not.include', '/inventory')
    loginPage.getErrorMessage().should('contains.text', users.errorEmptyPassword)

    cy.userLoginEmptyField(loginPage.getPasswordTextbox(), users.correctPassword)
    cy.url().should('not.include', '/inventory')
    loginPage.getErrorMessage().should('contains.text', users.errorEmptyUsername)
  })










})



