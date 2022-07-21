/// <reference types="cypress" />
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

  //validateon some lists and buttons in the home screen
  it('Check on some icons on the home page screen', () => {
    cy.get(data.elements.langButton).click()
    cy.get(data.elements.langList).find('li').should('have.length', 12)
    cy.get(data.elements.currencyButton).click()
    cy.get(data.elements.currencyList).find('li').should('have.length', 11)
    
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
    cy.log((email + "/n" + password))
  })

  //Login with the contant data we saved at the beginning of the test case and validate that the user is able to login 
  it('Login using a valid data', () => {
    cy.get(data.elements.login.loginButton).should('be.visible').click();
    cy.title().should('eq','Login - PHPTRAVELS')
    cy.get(data.elements.login.emailField).type(email,{force: true})
    cy.get(data.elements.login.passwordField).type(password,{force: true})
    cy.get(data.elements.login.loginFormButton).click({force: true})
    cy.get(data.elements.login.firstNameStrong).should('contain.text',first)
    cy.get(data.elements.login.firstName).should('contain.text',first)
  })

  //Make a successful login then try to logout and make sure that the user is redirected to the login page again 
  it('Logout after successfull login', () => {
    cy.get(data.elements.login.loginButton).should('be.visible').click();
    cy.title().should('eq','Login - PHPTRAVELS')
    cy.get(data.elements.login.emailField).type(email,{force: true})
    cy.get(data.elements.login.passwordField).type(password,{force: true})
    cy.get(data.elements.login.loginFormButton).click({force: true})
    cy.get(data.elements.logoutButton).click()
    cy.title().should('eq','Login - PHPTRAVELS')
  })
  
})
