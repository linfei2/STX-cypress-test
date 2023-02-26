export class PostPage {
    getTimeToRead() {
        return cy.contains('Time to read');
    }
    getPostCategory() {
        return cy.contains('Category');
    }
    getPostTitle() {
        return cy.get('.innerBlogTitle');
    }
    getPostContent() {
        return cy.get('.simpleContent');
    }
    getSharingIcons() {
        return cy.get('.rightSideSharing li');
    }

}