import { HomePage } from "../page-objects/home-page";

describe('Tests on Home Page', () => {
  const homePage = new HomePage()

  it('Can search for keyword and get related results', () => {
    homePage.navigate()
    homePage.acceptCookies()
    homePage.search()
    homePage.verifyResults()
    homePage.followLink()
  })
})
