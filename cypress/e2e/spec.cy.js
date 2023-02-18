describe('Test search functionality on home page', () => {
  it('Can search for a keyword and get related results', () => {
    cy.visit('/')
    cy.title().should('eq', 'Python Development Company - Software House - Poland - STX Next')
    cy.get('#hs-eu-confirmation-button').click()

    // Perform search
    cy.get('.searchBar').click()
    cy.get('input.searchInput')
      .then((searchInput) => {
        let keyword = 'Test';

        cy.wrap(searchInput).type(`${keyword}`)
        cy.get('.searchButton input[value=Search]').click()
        cy.url().should('include', `hs-search-results?term=${keyword}`)

        // Verify results list
        cy.get('ul.hs-search-results__listing li')
          .as('results')
          .each(($li) => {
            cy.wrap($li).find('a.hs-search-results__link')
            cy.wrap($li).find('h3.hs-search-results__title')
            cy.wrap($li).find('p.hs-search-results__description')
            cy.wrap($li).contains(`${keyword}`, { matchCase: false })
          })
        
        // Follow the first link and verify corresponding page
        cy.get('@results')
        .find('a.hs-search-results__link')
        .first()
        .as('firstLink')
        .invoke('attr', 'href')
        .then((href) => {
          cy.get('@firstLink').click()
          cy.url().should('contain', href)
        })
    })
  })
})
