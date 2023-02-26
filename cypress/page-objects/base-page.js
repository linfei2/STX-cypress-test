export class BasePage {
    verifyTitle(title) {
        cy.url().should('eq', title)
    }
    acceptCookies() {
        cy.get('#hs-eu-confirmation-button').click()
    }
}