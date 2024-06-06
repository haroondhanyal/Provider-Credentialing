const PractInfo= require("../../Locators/PractitionerInformation.json")

export class PractitionerInformation{
    MiddleInitial(Middle){
        cy.xpath(PractInfo.PractitionerInformation.MiddleInitial).type(Middle)
        cy.wait(400)     
    }
    DateOfBirth(dobPractitioner){
        cy.xpath(PractInfo.PractitionerInformation.dob).type(dobPractitioner)
        cy.wait(400)     
    }
    MedicalLicenseState(MLicenseState){
        cy.xpath(PractInfo.PractitionerInformation.selectState).select(MLicenseState)
        cy.wait(400)     
    }
    medicalLicenseNumber(MLicenseNumber){
        cy.xpath(PractInfo.PractitionerInformation.medicalLicenseNumber).type(MLicenseNumber)
        cy.wait(300)     
    }
    medicalLicenseExpiryDate(MLicenseExpiry){
        cy.xpath(PractInfo.PractitionerInformation.medicalLicenseExpiry).type(MLicenseExpiry)
        cy.wait(200)     
    }
    CAQH(Caqh){
        cy.get('#caqhID').type(Caqh)
        cy.wait(300)     
    }
    
    WebsiteURL(WebURL){
        cy.get('#providerURL').type(WebURL)
        cy.wait(200)     
    }
    YesSelect(){
        cy.get(PractInfo.PractitionerInformation.Yes).click({force:true});
        cy.wait(500)     
    }
    ContinueButton(){
        // cy.get('.primary-button').click()
        cy.xpath(PractInfo.PractitionerInformation.ContinueButton).click();
        cy.wait(800)     
    }
}