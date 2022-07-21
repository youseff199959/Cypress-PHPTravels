/// <reference types="cypress" />
//importing the data file that has all the locators and the required data for the test cases 
const data = require('../data/data.js');
const loginData = require('../data/loginData.js')

describe('Open the required website', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it("Book an hotel after successful login",()=>{
  
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
        cy.get(data.elements.hotel.hotelPrice).click()
        cy.get(data.elements.hotel.bookButton).click({force:true})
        cy.title().should('eq','Hotel Booking - PHPTRAVELS')
        cy.get(data.elements.book.userTitle_1).select("MISS",{force:true})
        cy.get(data.elements.book.userFirstName_1).type(data.data.first,{force: true})
        cy.get(data.elements.book.userLastName_1).type(data.data.last,{force: true})
        cy.get(data.elements.book.userTitle_2).select("MRS",{force:true})
        cy.get(data.elements.book.userFirstName_2).type(data.data.first,{force: true})
        cy.get(data.elements.book.userLastName_2).type(data.data.last,{force: true})
        cy.get(data.elements.book.childAge_1).select(13,{force:true})
        cy.get(data.elements.book.childFirstName_1).type(data.data.first,{force: true})
        cy.get(data.elements.book.childLastName_1).type(data.data.last,{force: true})
        cy.get(data.elements.book.childAge_2).select(5,{force:true})
        cy.get(data.elements.book.childFirstName_2).type(data.data.first,{force: true})
        cy.get(data.elements.book.childLastName_2).type(data.data.last,{force: true})
        cy.get(data.elements.book.agreeCheckbox).check({force:true})
        // cy.get(data.elements.book.confirmBooking).click({force:true}) //if you want to confirm the booking unhased this command

    })
    


})
