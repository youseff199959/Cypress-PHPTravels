/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
const data = require('/home/user/IdeaProjects/Cypress-Project-PHPTraveller/cypress/data/data.js');

let first = faker.name.firstName();
let last = faker.name.lastName();
let phone = faker.phone.number();
let email = faker.internet.email();
let password = faker.random.alpha(15);
let accountType = "agent"


describe('Open the required website', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Check on some icons on the home page screen', () => {
    cy.get(data.elements.langButton).click()
    cy.get(data.elements.langList).find('li').should('have.length', 12)
    cy.get(data.elements.currencyButton).click()
    cy.get(data.elements.currencyList).find('li').should('have.length', 11)
    
  })

  it('Sign up for an account',   () => {
    cy.get(data.elements.signUp.signUpButton).should('be.visible').click();
    cy.title().should('eq','Signup - PHPTRAVELS')
    cy.get(data.elements.signUp.firstNameField).type(first,{force: true})
    cy.get(data.elements.signUp.lastNameField).type(last,{force: true})
    cy.get(data.elements.signUp.phoneField).type(phone,{force: true})
    cy.get(data.elements.signUp.emailField).type(email,{force: true})
    cy.get(data.elements.signUp.passwordField).type(password,{force: true})
    cy.get(data.elements.signUp.accountType).select(accountType,{force: true})
    cy.get(data.elements.signUp.signUpFormButton).click({force: true})
    cy.get(data.elements.signUp.signUpSuccessMessage).should('contain.text','Signup successfull please login.')

  })

  it('Login using a Fake data', () => {
    cy.get(data.elements.login.loginButton).should('be.visible').click();
    cy.title().should('eq','Login - PHPTRAVELS')
    cy.get(data.elements.login.emailField).type(email,{force: true})
    cy.get(data.elements.login.passwordField).type(password,{force: true})
    cy.get(data.elements.login.loginFormButton).click({force: true})
    cy.get(data.elements.login.firstNameStrong).should('contain.text',first)
    cy.get(data.elements.login.firstName).should('contain.text',first)
  })

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
