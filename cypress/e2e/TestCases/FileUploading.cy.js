describe("File upload demo ",()=>{
    it("Demo website",()=>{
        cy.visit("https://tus.io/demo")
        cy.wait(1000)
        cy.xpath("//input[@id='P0-0']").selectFile({
            contents:'C:/Insight-Technology-Projects/Provider-Credentialing/cypress/e2e/fixtures/TCS.pdf',
            mimeType:'application/pdf',
        })
    })


})