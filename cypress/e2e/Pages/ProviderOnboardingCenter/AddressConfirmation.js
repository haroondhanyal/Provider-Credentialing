export class AddressConfirmation{
    PrimaryMailingAddress(){
        cy.xpath("//label[@for='Same as primary address-input']//span[@class='mat-radio-outer-circle']").click({ force: true })
        cy.wait(200)     
    }
    PrimaryBillingAddress(){
        
        cy.xpath("//label[@for='Same as mailing address-input']//span[@class='mat-radio-outer-circle']").click({ force: true })
        cy.wait(200)     
    }
    ContinueButton(){
        cy.xpath("//button[normalize-space()='Continue']").click()
        cy.wait(200)     
    }
    goBackButton(){
        cy.xpath("//button[normalize-space()='Go Back']").click()
        cy.wait(200)     
    }
    SaveAndContinue(){
        cy.xpath("//button[normalize-space()='Save & Exit']").click()
        cy.wait(200)     
    }




}