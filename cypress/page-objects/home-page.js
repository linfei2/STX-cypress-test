export class HomePage {

    searchKeyword = 'Test';

    navigate() {
        cy.visit('/')
        cy.title().should('eq', 'Python Development Company - Software House - Poland - STX Next')
    }

    acceptCookies() {
        cy.get('#hs-eu-confirmation-button').click()
    }

    search() {
        cy.get('.searchBar').click()
        cy.get('input.searchInput').type(this.searchKeyword)
        cy.get('.searchButton input[value=Search]').click()
        cy.url().should('include', `hs-search-results?term=${this.searchKeyword}`)
    }

    verifyResults() {
        const expectedElements = [
            'a.hs-search-results__link',
            'h3.hs-search-results__title',
            'p.hs-search-results__description',
        ]

        cy.get('ul.hs-search-results__listing li')
          .each(($li) => {
            cy.wrap($li).contains(`${this.searchKeyword}`, { matchCase: false })

            for(let el of expectedElements) {
                cy.wrap($li).find(el)          
             }
          })
    }

    followLink() {
        cy.get('a.hs-search-results__link')
          .first()
          .as('firstLink')
          .invoke('attr', 'href')
          .then((href) => {
            cy.get('@firstLink').click()
            cy.url().should('contain', href)
          })
    }
}