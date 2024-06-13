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
    Attachments() {
        // i used this , as OS by default dialog box appears but here i am not opening that .
        cy.get('input[type="file"]').then($input => {
            const stub = cy.stub($input[0], 'click').as('fileInputClick');
        });
        // here it i am attached the file  the file .
        cy.get('.paper_clip_style').click();
    
        cy.get('input[type="file"]').selectFile('C:/Insight-Technology-Projects/Provider-Credentialing/cypress/e2e/fixtures/TCS.pdf', {
          action: 'select'
        });
        cy.log('File attached successfully.');
    
        return this;
      }
    
    ContinueButton(){
        cy.xpath("//button[normalize-space()='Continue']").click()
        cy.wait(800)
        return
    }


}