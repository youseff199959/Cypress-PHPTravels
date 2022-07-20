/// <reference types="cypress" />
const data = require('../data/data.js');
const signUpData = require('../data/inValidSignUpData.js');

describe('Open the required website', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    signUpData.forEach(({email,firstName,lastName,password,phone,testCase,accountType})=>{

    
    it(testCase, () => {
        cy.get(data.elements.signUp.signUpButton).should('be.visible').click();
        cy.title().should('eq','Signup - PHPTRAVELS')
        cy.get(data.elements.signUp.firstNameField).type(firstName,{force: true})
        cy.get(data.elements.signUp.lastNameField).type(lastName,{force: true})
        cy.get(data.elements.signUp.phoneField).type(phone,{force: true})
        cy.get(data.elements.signUp.emailField).type(email,{force: true})
        cy.get(data.elements.signUp.passwordField).type(password,{force: true})
        cy.get(data.elements.signUp.accountType).select(accountType,{force: true})
        cy.get(data.elements.signUp.signUpFormButton).click({force: true})
        cy.title().should('eq','Signup - PHPTRAVELS')
      })
    });

})