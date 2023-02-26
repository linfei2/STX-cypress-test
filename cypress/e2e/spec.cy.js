import { HomePage } from "../page-objects/home-page";
import { BlogPage } from "../page-objects/blog-page";
import { PostPage } from "../page-objects/post-page";


describe('Home Page tests', () => {
  const homePage = new HomePage()

  it('Can search for keyword and get related results', () => {
    homePage.navigate()
    homePage.acceptCookies()
    homePage.search('Test')
    homePage.verifyResults('Test')
    homePage.followLink()
  })
})

// describe('Blog tests', () => {
//   const blogPage = new BlogPage()

//   it('Can see blog post with relevant info', () => {
//     blogPage.navigate()
//     blogPage.acceptCookies()

//     const postPage = blogPage.clickFirstPost()
//     postPage.getTimeToRead()
//     postPage.getPostCategory()
//     postPage.getPostTitle()
//     postPage.getSharingIcons().should('have.length', 3)
//   })
// })
