export class BasePage {
    acceptCookies() {
        cy.get('#hs-eu-confirmation-button').click()
    }
}