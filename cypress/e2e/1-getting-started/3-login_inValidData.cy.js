/// <reference types="cypress" />
//importing the data file that has all the locators and the required data for the test cases 
import { faker } from '@faker-js/faker';
const data = require('../data/data.js');
const loginData = require('../data/inValidLoginData')

describe('Open the required website', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    loginData.forEach(({email,password,testCase})=>{
        it(testCase, () => {
            cy.get(data.elements.login.loginButton).should('be.visible').click();
            cy.title().should('eq','Login - PHPTRAVELS')
            cy.get(data.elements.login.emailField).type(email,{force: true})
            cy.get(data.elements.login.passwordField).type(password,{force: true})
            cy.get(data.elements.login.loginFormButton).click({force: true})
            cy.title().should('eq','Login - PHPTRAVELS')
          })

    })

    it("Login with invalid Email and Password",()=>{
  
        cy.get(data.elements.login.loginButton).should('be.visible').click();
        cy.title().should('eq','Login - PHPTRAVELS')
        cy.get(data.elements.login.emailField).type(faker.internet.email(),{force: true})
        cy.get(data.elements.login.passwordField).type(faker.random.alpha(15),{force: true})
        cy.get(data.elements.login.loginFormButton).click({force: true})
        cy.get(data.elements.login.loginFailed).should('contain.text',' Wrong credentials. try again')
        cy.title().should('eq','Login - PHPTRAVELS')

    })
    


})
