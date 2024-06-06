export class ContractingInformation{
    ChooseSubmitter(){
        cy.get('#Submitter > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({ force: true })
        cy.wait(200)     
    }
    EmailMethod(){
        cy.xpath("//input[@id='EmailSub']").click({ force: true })
        cy.wait(600)     
    }
    UseTheSubmitter(){
        cy.xpath("//label[@for='auth_Submitter-input']//span[@class='mat-radio-inner-circle']").click({ force: true })
        cy.wait(600)     
    }
    ContinueButton(){
        cy.xpath("//button[normalize-space()='Continue']").click()
        cy.wait(500)     
    }


}