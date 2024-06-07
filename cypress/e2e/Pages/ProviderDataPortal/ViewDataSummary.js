const ProviderDataPortal=require("../../Locators/SignIn.json")

export class ViewDataSummary{
    ViewData(){

        cy.get('#DAMenu tr td:nth-child(2) a').invoke('removeAttr', 'target').click()
        cy.wait(300)
    }
    SaveButton(){
        // cy.xpath("//button[@value='Save']").click({ timeout: 800000 })
        //cy.xpath("//button[@value='Save']").click()
        cy.get('[onclick="return OnSave();"]').click()
        cy.wait(50000)
        return
    }
}