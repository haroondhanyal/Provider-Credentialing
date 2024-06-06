
export class AddressInformation{
    Street1(Street1){
        cy.xpath("//input[@id='street']").type(Street1)
        cy.wait(500)     
    }
    Street2(Street2){
        cy.xpath("//input[@id='street2']").type(Street2)
        cy.wait(500)     
    }
    City(City){
        cy.xpath("//input[@id='city']").type(City)
        cy.wait(500)     
    }
    PhoneNumber(PhoneNumber){
        cy.xpath("//input[@id='phoneNumber']").type(PhoneNumber)
        cy.wait(500)     
    }
    EXTNumber(ExtNumber){
        cy.xpath("//input[@id='phoneExt']").type(ExtNumber)
        cy.wait(500)     
    }
    FaxNumber(FaxNumber){
        cy.xpath("//input[@id='faxNumber']").type(FaxNumber)
        cy.wait(500)     
    }
    TeleHEalthDropDown(){
        cy.xpath("//mat-select[@id='telehealthMethodsDropdown']").click()
        cy.wait(500)
    }
    OptionSelections1(){
        cy.xpath("//span[normalize-space()='Select all']").click()
        cy.wait(500)
        cy.get('body').click(0, 0);
        cy.wait(300)

    }
    TypesTeleHealth(){
        cy.xpath("//mat-select[@id='telehealthServices']").click()
        cy.wait(500)

    }
    OptionSelections2(){
        cy.xpath("//span[normalize-space()='Select all']").click()
        cy.wait(500)
        cy.get('body').click(0, 0);

    }
    TeleHealthServices(TeleHealth){
        cy.xpath("//input[@id='otherTelehealth']").type(TeleHealth)
        cy.wait(500)     
    }
    Checkbox(){
        cy.get('.checkboxes-text').click()
        cy.wait(500)
    }
    ContinueButton(){
        cy.xpath("//button[normalize-space()='Continue']").click()
        cy.wait(800)     
    }

}