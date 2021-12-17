/// <reference types="cypress" />

class PostsPage {
  LaunchNotFoundPage() {
    cy.visit("http://localhost:3000/api/posts/nacho")
  }
  LaunchPostsPage() {
    cy.visit("http://localhost:3000/")
  }
  NotFoundResponse(text) {
    this.LaunchNotFoundPage()
    cy.contains(text)
  }
  PostsPageResponse(text) {
    this.LaunchPostsPage()
    cy.contains(text)
  }
  UploadImagesResponse() {
    this.LaunchPostsPage()
    cy.get('#root > section > main > article:nth-child(1) > a:nth-child(1) > img').should('be.visible')
  }
  UploadTextsResponse(text) {
    this.LaunchPostsPage()
    cy.contains(text)
  }
  InternalErrorPage(text) {
    this.LaunchPostsPage()
   cy.contains('Posts App')
  }

}

export default PostsPage