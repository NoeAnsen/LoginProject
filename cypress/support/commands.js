import LoginElements from '../support/pageObjects/login';


Cypress.Commands.add('userLogin', (username, password) => { 
    const loginPage=new LoginElements();
    loginPage.getUsernameTextbox().type(username);
    loginPage.getPasswordTextbox().type(password);
    loginPage.getLoginSubmitButton().click();
        
     })
Cypress.Commands.add('userLoginEmptyField', (field, content) => { 
    const loginPage=new LoginElements();
    field.type(content);
    loginPage.getLoginSubmitButton().click();
    field.clear()
     })