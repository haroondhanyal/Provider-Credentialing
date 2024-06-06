const SpecDetails=require("../../Locators/SpecialtyDetails.json")

export class SpecialtyDetails{

    DegreeType(DegreeTypeSelection){
        cy.xpath(SpecDetails.SpecialtyDetails.DegreeType).scrollIntoView().select(DegreeTypeSelection)
        cy.wait(500)     
    }
    PrimarySpecialty(PrimarySpecialtySelection){
        cy.xpath(SpecDetails.SpecialtyDetails.PrimarySpecialty).scrollIntoView().select(PrimarySpecialtySelection)
        cy.wait(500)     
    }
    BehavioralHEalth(){
        cy.xpath(SpecDetails.SpecialtyDetails.BehavioralHealthManual).click()
        cy.wait(900)     
    }
    Agree(){
        cy.get('#agreeBH > .mat-radio-label').click()
        // cy.xpath(SpecDetails.SpecialtyDetails.Agree).click()
        cy.wait(1000)     
    }
    agreeCheckbox(){
        cy.get('#checkboxSelect').click()
        // cy.xpath(SpecDetails.SpecialtyDetails.agreeCheckbox).click()
        cy.wait(1000)     
    }
    GoBack(){
        cy.xpath(SpecDetails.SpecialtyDetails.goBack).click()
        cy.wait(200)     
    }
    SaveAndExit(){
        cy.xpath(SpecDetails.SpecialtyDetails.SaveAndExit).click()
        cy.wait(200)     
    }
    Continue(){
        cy.xpath(SpecDetails.SpecialtyDetails.ContinueBtn).click()
        cy.wait(1000)     
    }
    AcknowledgeAndContinue(){
        cy.xpath(SpecDetails.SpecialtyDetails.AcknowledgeAndContinue).click()
        cy.wait(200)     
    }
    GoToPreview(){
        cy.xpath(SpecDetails.SpecialtyDetails.GoToProView).click()
        cy.wait(200)     
    }
    



}