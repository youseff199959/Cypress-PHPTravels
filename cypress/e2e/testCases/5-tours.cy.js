/// <reference types="cypress" />
//importing the data file that has all the locators and the required data for the test cases 
const data = require('../data/data.js');
const loginData = require('../data/loginData.js')

describe('Open the required website', () => {
    beforeEach(() => {
      cy.visit('/')
    })


    it("Open and select one of the avilable tours in the page after a successful login",()=>{
        cy.get(data.elements.login.loginButton).should('be.visible').click();
        cy.title().should('eq','Login - PHPTRAVELS')
        cy.get(data.elements.login.emailField).type(loginData.email,{force: true})
        cy.get(data.elements.login.passwordField).type(loginData.password,{force: true})
        cy.get(data.elements.login.loginFormButton).click({force: true})
        cy.get(data.elements.tours.buttonTours).click({force:true})
        cy.title().should('eq','Search Tours - PHPTRAVELS')
        cy.contains(data.elements.tours.selectedTour).click({force:true})
        cy.get(data.elements.tours.adultsNumber).select(5)
        cy.get(data.elements.tours.childernNumber).select(3)
        cy.get(data.elements.tours.infantNumber).select(2)
        cy.get(data.elements.tours.confirmNumber).click({force:true})


    })

})