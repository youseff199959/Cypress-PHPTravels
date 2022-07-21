/// <reference types="cypress" />


/**
 * 
 * 
 * RUN THIS SCIPT ONLY IF THE LOGIN FAILED AND GET THE REQUIRED DATA AND COPY PASTE IT IN ../data/loginData.js
 * 
 * I know it may be automate but until this date I don't get an idea to automate it ,So if you get an idea please contact me ASAP to fix it and automate it 
 * 
 */


//importing the data file that has all the locators and the required data for the test cases 
const data = require('../data/data.js');

//getting the required constant data to prevent it's changing duirng the whole test case 
const email = data.data.email;
const password = data.data.password;
const first = data.data.first;

//open new window before each test case
describe('Open the required website', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  //Using faker we signed up and validate on the success on the test case 
  it('Sign up for an account',   () => {
    cy.get(data.elements.signUp.signUpButton).should('be.visible').click();
    cy.title().should('eq','Signup - PHPTRAVELS')
    cy.get(data.elements.signUp.firstNameField).type(data.data.first,{force: true})
    cy.get(data.elements.signUp.lastNameField).type(data.data.last,{force: true})
    cy.get(data.elements.signUp.phoneField).type(data.data.phone,{force: true})
    cy.get(data.elements.signUp.emailField).type(email,{force: true})
    cy.get(data.elements.signUp.passwordField).type(password,{force: true})
    cy.get(data.elements.signUp.accountType).select(data.data.accountType,{force: true})
    cy.get(data.elements.signUp.signUpFormButton).click({force: true})
    cy.get(data.elements.signUp.signUpSuccessMessage).should('contain.text',data.elements.signUp.signUpSuccessMessageText)
  })
})
