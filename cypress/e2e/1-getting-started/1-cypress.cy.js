/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

let first = faker.name.firstName();
let last = faker.name.lastName();
let phone = faker.phone.number();
let email = faker.internet.email();
let password = faker.random.alpha(15);

describe('Open the required website', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Check on some icons on the home page screen', () => {
    cy.get('#languages').click()
    cy.get('ul[aria-labelledby="languages"]').find('li').should('have.length', 12)
    cy.get('#currency').click()
    cy.get('ul[aria-labelledby="currency"]').find('li').should('have.length', 12)
    
  })

  it('Sign up for an account',   () => {
    cy.get('a[href="https://www.phptravels.net/signup"][class="theme-btn theme-btn-small waves-effect"]').should('be.visible').click();
    cy.title().should('eq','Signup - PHPTRAVELS')
    cy.wait(1000)
    cy.get('[name=first_name]').type(first,{force: true})
    cy.get('[name=last_name]').type(last,{force: true})
    cy.get('[name=phone]').type(phone,{force: true})
    cy.get('[name=email]').type(email,{force: true})
    cy.get('[name=password]').type(password,{force: true})
    cy.scrollTo('center',{ easing: 'linear' })
    cy.get('#account_type').select('Agent',{force: true})
    cy.get('button[type="submit"]').click({force: true})

  })

  it('Login using a Fake data', () => {
    cy.get('a[href="https://www.phptravels.net/login"][class="theme-btn theme-btn-small theme-btn-transparent ml-1 waves-effect"]').should('be.visible').click();
    cy.title().should('eq','Login - PHPTRAVELS')
    cy.get('input[type="email"][class="form-control"]').type(email,{force: true})
    cy.get('input[name="password"]').type(password,{force: true})
    cy.get('button[type="submit"][class="btn btn-default btn-lg btn-block effect ladda-button waves-effect"]').click({force: true})
    cy.get('strong[style="text-transform:capitalize"]').should('contain.text',first)
    cy.get('span[style="text-transform:capitalize"]').should('contain.text',first)
  })

  it('Logout after successfull login', () => {
    cy.get('a[href="https://www.phptravels.net/login"][class="theme-btn theme-btn-small theme-btn-transparent ml-1 waves-effect"]').should('be.visible').click();
    cy.title().should('eq','Login - PHPTRAVELS')
    cy.get('input[type="email"][class="form-control"]').type(email,{force: true})
    cy.get('input[name="password"]').type(password,{force: true})
    cy.get('button[type="submit"][class="btn btn-default btn-lg btn-block effect ladda-button waves-effect"]').click({force: true})
    cy.get('[href="https://www.phptravels.net/account/logout"][class=" waves-effect"]').click()
    cy.title().should('eq','Login - PHPTRAVELS')
  })

  
  
})
