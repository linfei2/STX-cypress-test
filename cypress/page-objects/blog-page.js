import { BasePage } from "./base-page";
import { PostPage } from "./post-page"

export class BlogPage extends BasePage{
    navigate() {
        cy.visit('/blog');
        cy.title().should('eq', 'Python, Software Development, UX and Product Design - Blog - STX Next');
    }

    // clickFirstPost() {
    //     cy.get('.blogFirstPost .blogPostTitle a').click();
    //     return new PostPage();
    // }

    clickFirstPost() {
        cy.get('.blogFirstPost .blogPostTitle a').then((blogPost) => {
            cy.wrap(blogPost).invoke('attr', 'href').then((href) => {
                cy.get(blogPost).click();
                cy.url().should('contain', href);
            })
        })
        return new PostPage();
    }

}