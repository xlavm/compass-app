/// <reference types="cypress" />
import PostsPage from "../page_objects/PostsPage"

const postsPage = new PostsPage

describe("Dado que quiero verificar la pagina de error 404", () => {
    it("Cuando me dirija a una URL incorrecta, Entonces debería obtener un página que diga: Missing page!", () => {
        postsPage.NotFoundResponse('Missing page!')
    })
})

describe("Dado que quiero ingresar a la pagina de inicio de la app", () => {
    it("Cuando me dirija a la URL principal del sitio, Entonces debería obtener un página que diga: Posts App", () => {
        postsPage.PostsPageResponse('Posts App')
    })
})

describe("Dado que quiero verificar que las imagenes cargan correctamente", () => {
    it("Cuando me dirija a la URL principal del sitio, Entonces debería ver una serie de imagenes cargadas", () => {
        postsPage.UploadImagesResponse()
    })
})

describe("Dado que quiero verificar que carga correctamente el contenido del texto", () => {
    it("Cuando me dirija a la URL principal del sitio, Entonces debería ver a menos 1 texto que diga: Hola mundo", () => {
        postsPage.UploadTextsResponse('Hola mundo')
    })
})

describe("Dado que quiero verificar la pagina de error 500", () => {
    it("Cuando haya un error en la API Back de la APP, Entonces debería obtener un página que diga: UPS! Internal Server Error", () => {
        postsPage.InternalErrorPage('UPS! Internal Server Error')
    })
})