/// <reference types="cypress" />
//importing the data file that has all the locators and the required data for the test cases 
import { faker } from '@faker-js/faker';
const data = require('../data/data.js');
const loginData = require('../data/loginData.js')

describe('Open the required website', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it("Login with invalid Email and Password",()=>{
  
        cy.get(data.elements.login.loginButton).should('be.visible').click();
        cy.title().should('eq','Login - PHPTRAVELS')
        cy.get(data.elements.login.emailField).type(loginData.email,{force: true})
        cy.get(data.elements.login.passwordField).type(loginData.password,{force: true})
        cy.get(data.elements.login.loginFormButton).click({force: true})
        cy.title().should('eq','Dashboard - PHPTRAVELS')
        cy.get(data.elements.hotel.hotelsButton).click({force: true})
        cy.title().should('eq','Search Hotels - PHPTRAVELS')
        for (let i = 0; i < 4; i++) {
            cy.get(data.elements.hotel.nextScrollHotels).click({force:true})
        }
        cy.get('div[class="owl-stage"]>div:nth-child(11)>div').click()
       

    })
    


})
