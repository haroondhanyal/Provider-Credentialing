import 'cypress-file-upload';
export class OtherInformation{
    HospitalAdmittingPrivileges(){
        cy.xpath("//label[@for='privilegeNo-input']//span[@class='mat-radio-outer-circle']").click({ force: true })
        cy.wait(1000)     
    }
    FacilityAdmittingPrivileges(){
        cy.xpath("//label[@for='facilityYes-input']//span[@class='mat-radio-outer-circle']").click({ force: true })
        cy.wait(1000)     
    }
    FacilityLocation1(FacilityLocation1){
        cy.xpath("//input[@id='facility_0']").type(FacilityLocation1)
        cy.wait(200) 

    }
    StateSelection1(SelectState1){
        cy.xpath("//select[@id='facility_state0']").select(SelectState1)
        cy.wait(400) 

    }
    AddFacility(){
        cy.xpath("//img[@id='addFacility']").click({ force: true })
        cy.wait(400) 

    }
    
    
    FacilityLocation2(FacilityLocation2){
        cy.xpath("//input[@id='facility_1']").type(FacilityLocation2)
        cy.wait(200) 

    }
    StateSelection2(SelectState2){
        cy.xpath("//select[@id='facility_state1']").select(SelectState2)
        cy.wait(200) 

    }
//  Attachments(){
//         const filePath = 'cypress/e2e/fixtures/pic.png';
//     cy.get('.paper_clip_style')
//         .attachFile(filePath) // Attach the file
//         .click() // Click the element
//         .wait(800); // Wait for 800 milliseconds
//     return;
//     }
    Attachments() {
    // const filePath = 'C:/Insight-Technology-Projects/Provider-Credentialing/cypress/e2e/fixtures/TCS.pdf'; 
    //cy.xpath("//img[@alt='Attachments icon Required']")
    cy.get('.paper_clip_style').selectFile({
        contents:'C:/Insight-Technology-Projects/Provider-Credentialing/cypress/e2e/fixtures/TCS.pdf',
        mimeType:'application/pdf',
    
    })
    return this; 
    }

    ContinueButton(){
        cy.xpath("//button[normalize-space()='Continue']").click()
        cy.wait(800)
        return
    }


}