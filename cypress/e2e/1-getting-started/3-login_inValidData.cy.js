/// <reference types="cypress" />
//importing the data file that has all the locators and the required data for the test cases 
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
            cy.get('form[method="POST"][action="https://www.phptravels.net/login"]').should('contain','Please fill out this field')
          })

    })
    


})
