const NetworkInformationCheck= require('../../Locators/NetworkParticipationCheck.json')
export class NetworkParticipationCheck{
   Yes(){
        // cy.xpath(NetworkInformationCheck.NetworkParticipation.yes).click()
        cy.get('#Yes > .mat-radio-label > .mat-radio-container').click()
        cy.wait(200)     
    }
    No(){
        cy.xpath(NetworkInformationCheck.NetworkParticipation.no).click()
        cy.wait(200)      
    }
    ProvideVirtual(){
        // cy.xpath(NetworkInformationCheck.NetworkParticipation.VirtualCare).click()
        cy.get('#Virtual > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click({ force: true })
        cy.wait(200)     
    }
    ProvideHybrid(){
        cy.xpath(NetworkInformationCheck.NetworkParticipation.HybridServices).click()
        cy.wait(200)     
    }
    IamJoining(IAmJoin){
        // cy.xpath(NetworkInformationCheck.NetworkParticipation.networkJoining).select('A provider applying under a SSN or TaxID/EIN that is currently participating with Aetna')
        cy.xpath(NetworkInformationCheck.NetworkParticipation.networkJoining).select(IAmJoin)
        cy.wait(200) 

    }
    SelectSituation(Situation){
        cy.get('#applicableSituation').select(Situation)
        // cy.get('#applicableSituation').select('I want to be contracted in the state selected below')
        cy.wait(200) 

    }
    SelectState(State){
        // cy.xpath(NetworkInformationCheck.NetworkParticipation.state).select('Alaska')
        cy.get('#state').select(State)
        cy.wait(200) 
    }
    PrimaryZipCode(PZipCode){
        cy.xpath(NetworkInformationCheck.NetworkParticipation.zipCode).type(PZipCode)
        cy.wait(200)  
    }
    EXT(EXT){
        // cy.xpath(NetworkInformationCheck.NetworkParticipation.ext).type(EXT)
        cy.get('#ext').type(EXT)
        cy.wait(200)  
    }
    TaxIdAndType(TaxIDSelection){
        cy.get('#taxIdType').select(TaxIDSelection)
        cy.wait(200) 
    }
    TaxIDName(TIDName){
        cy.get('#taxIDName').type(TIDName)
        cy.wait(200)  
    }
    TaxID(TaxID){
        cy.get('#taxId').type(TaxID)
        cy.wait(200) 
    }

    VerifyTaxID(VerifyTaxID){
        cy.get('#verifyTaxID').type(VerifyTaxID)
        cy.wait(200) 
    }
    PLastName(PLastName){
        cy.xpath(NetworkInformationCheck.NetworkParticipation.practLastName).type(PLastName)
        cy.wait(100) 
    }
    PFirstName(PFirstName){
        cy.xpath(NetworkInformationCheck.NetworkParticipation.practFirstName).type(PFirstName)
        cy.wait(300) 
    }
    IndividualNPI(IndividualNPI){
        cy.xpath(NetworkInformationCheck.NetworkParticipation.npi).type(IndividualNPI)
        cy.wait(300) 
    }
    AgreeCheckbox(){
        cy.xpath(NetworkInformationCheck.NetworkParticipation.checkboxIAgree).click()
        cy.wait(200) 
    }
    ContinueButton(){
        cy.xpath(NetworkInformationCheck.NetworkParticipation.continueButton).click({ force: true })
        cy.wait(300) 
    }
    GoBackButton(){
        cy.xpath(NetworkInformationCheck.NetworkParticipation.goBack).click()
        cy.wait(200) 
    }
    ExitButton(){
        cy.xpath(NetworkInformationCheck.NetworkParticipation.exitButton).click()
        cy.wait(200) 
    }
    ContinueSession(){
        cy.xpath(NetworkInformationCheck.NetworkParticipation.continueSession).click({ force: true })
        cy.wait(200) 
    }
    ExitSession(){
        cy.xpath(NetworkInformationCheck.NetworkParticipation.exitSession).click()
        cy.wait(200) 
    }




   
    
}