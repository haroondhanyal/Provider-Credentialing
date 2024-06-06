const ProviderDataPortal=require("../../Locators/SignIn.json")

export class DownloadStateApplication{
    SelectState(){

        //cy.get('#DAMenu tr td:nth-child(3) a').click()
        cy.get('.form-main').click()
        cy.wait(300)
    }
    StateSelection(){
        cy.xpath("//b[@role='presentation']").click()
        cy.wait(300)
    }
    StateSelected(){
        const el=cy.get('#select2-StateReplica_ProviderStateReplica-results').children().not(':contains("(Select)")').each(el => {
            const id = el.attr('id');
            cy.get(`#${id}`).click()
            cy.wait(300);
        })
        
    }
    
    IncludeAllDocument(){
        cy.xpath("//input[@id='StateReplica_IncludeSupportingDocumentation']").click()
        cy.wait(300)
    }
    
    downloadButton(){
        cy.xpath("//button[@id='ProviderStateReplicaImage']").click()
        cy.wait(300)
        return
    }
}