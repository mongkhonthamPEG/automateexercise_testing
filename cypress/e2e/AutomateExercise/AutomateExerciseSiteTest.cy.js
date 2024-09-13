/// <reference types="cypress" />


describe('Automate Exercise Site Testing',() => {
    beforeEach(()=>{
        cy.visit('https://www.automationexercise.com/')
    })

    it('Create and Delete account',() => {
        // Select for Login Button
        cy.get('[class="fa fa-lock"]').click()
        // Select Name input class="signup-form"
        cy.get('[data-qa="signup-name"').type('P Automate')
        // Select for email input 
        cy.get('[data-qa="signup-email"]').type('p_automate@gmail.com')
        // Select for Signup Button
        cy.get('[data-qa="signup-button"]').click()
        // Create Account page is here
        cy.get('[id="id_gender1"]').click()
        // Input password
        cy.get('[data-qa="password"]').type('1234567')
        // Click dropdown and select day 
        cy.get('[data-qa="days"]').select('10')
        cy.get('[data-qa="months"]').select('May')
        cy.get('[data-qa="years"]').select('1999')
        // Email noti option
        cy.get('[name="newsletter"]').click()
        // Information input
        cy.get('[data-qa="first_name"]').type('Autotest')
        cy.get('[data-qa="last_name"]').type('Account')
        cy.get('[data-qa="company"]').type('Exercisetest')
        cy.get('[data-qa="address"]').type('111 Alabama 44444')
        cy.get('[data-qa="country"]').select('United States')
        cy.get('[data-qa="state"]').type('Alabama')
        cy.get('[data-qa="city"]').type('Birmingham')
        cy.get('[data-qa="zipcode"]').type('4444')
        cy.get('[data-qa="mobile_number"]').type('0999999999')
        // click create account 
        cy.get('[data-qa="create-account"]').click()
        // check for success account created
        cy.get('[data-qa="account-created"]').should('exist')
        cy.get('[data-qa="continue-button"]').click()
        // Verify logged in as user **pending**
        // delete account
        cy.get('[class="fa fa-trash-o"]').click()
        // verify 
        cy.get('[data-qa="account-deleted"]').should('exist')
        cy.get('[data-qa="continue-button"]').click()
    }) 
}
)