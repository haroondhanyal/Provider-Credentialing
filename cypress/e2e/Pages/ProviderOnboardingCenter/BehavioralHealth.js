export class BehavioralHealth{
    
    // PopulationsYouWorkWith(){
    //     const multiCheckBoxes = [
    //         "//label[normalize-space()='Infants/Toddlers Ages: 5 and under']",
    //         "//label[normalize-space()='Elementary School Ages: 6-12']",
    //         "//label[normalize-space()='Adolescents Ages: 13-17']",
    //         "//label[normalize-space()='Seniors Ages: 65+']"
    //       ];
    //       multiCheckBoxes.forEach((xpath) => {
    //         cy.xpath(xpath).click();
    //         cy.wait(500); // Optional: Add a short wait between clicks
    //       });          
    // }
    infants(){
        cy.xpath("//label[normalize-space()='Infants/Toddlers Ages: 5 and under']").click()
        cy.wait(200)
    }
    elementary(){
        cy.xpath("//label[normalize-space()='Elementary School Ages: 6-12']").click()
        cy.wait(200)
    }
    Adolescents(){
        cy.xpath("//label[normalize-space()='Adolescents Ages: 13-17']").click()
        cy.wait(200)
    }
    Seniors(){
        cy.xpath("//label[normalize-space()='Seniors Ages: 65+']").click()
        cy.wait(200)
    }
    HaveAccommodations(){
        cy.xpath("//label[@for='accomodationDisabilitiesYes-input']//span[@class='margin_left_small paddingRight'][normalize-space()='Yes']").click({force:true}).click({ force: true })
        cy.wait(300)
    }
    MedicareCertified(){
        cy.xpath("//label[@for='medicareCertifiedNo-input']//span[@class='margin_left_small'][normalize-space()='No']").click({ force: true })
        cy.wait(300)
    }
    MedicadCertified(){
        cy.xpath("//label[@for='medicadCertifiedNo-input']//span[@class='margin_left_small'][normalize-space()='No']").click({ force: true })
        cy.wait(300)
    }
    AetnaProgram(){
        cy.xpath("//label[@for='aetnaEAPProgramNo-input']//span[@class='margin_left_small'][normalize-space()='No']").click({ force: true })
        cy.wait(300)
    }
    AmericanSignal(){
        cy.xpath("//label[@for='americanSignLangYes-input']//span[@class='margin_left_small paddingRight'][normalize-space()='Yes']").click({ force: true })
        cy.wait(300)
    }
    // AdditionalLanguages(){
    //     const multiLanguages = [
    //         "//label[normalize-space()='Arabic']",
    //         "//label[normalize-space()='German']",
    //         "//label[normalize-space()='Hindi']",
    //         "//label[normalize-space()='Russian']",
    //         "//label[normalize-space()='Urdu']",
    //         "//label[normalize-space()='Spanish']"
    //       ];
    //       multiLanguages.forEach((xpath) => {
    //         cy.xpath(xpath).click();
    //         cy.wait(500); // Optional: Add a short wait between clicks
    //       });          
    // }
    ArabicLanguage(){
        cy.xpath("//label[normalize-space()='Arabic']").click()
        cy.wait(100)
    }
    SpanishLanguage(){
        cy.xpath("//label[normalize-space()='Spanish']").click()
        cy.wait(100)
    }
    UrduLanguage(){
        cy.xpath("//label[normalize-space()='Urdu']").click()
        cy.wait(100)
    }
    GermanLanguage(){
        cy.xpath("//label[normalize-space()='German']").click()
        cy.wait(100)
    }
    ProviderPracticeFocus(){
        cy.xpath("//mat-select[@id='provideFocus']").click()
        cy.wait(200)
    }
    // multiSelectOptions(){
    //     const multiOptions = [
    //         "//span[normalize-space()='Addiction Specialist']",
    //         "//span[normalize-space()='Gender Identity']",
    //         "//span[normalize-space()='Life Management Counseling']",
    //         "//span[normalize-space()='HIV / AIDS']",
    //         "//span[normalize-space()='MAT (Medication assisted treatment)']"
    //       ];
    //       multiOptions.forEach((xpath) => {
    //         cy.xpath(xpath).click();
    //         cy.wait(500);
    //         cy.get('body').click(0, 0);
            
    //       });          
    // }
    AddictionSpecialist(){
        cy.xpath("//span[normalize-space()='Addiction Specialist']").click()
        cy.wait(300)
    }
    GenderIdentity(){
        cy.xpath("//span[normalize-space()='Gender Identity']").click()
        cy.wait(300)
    }
    LifeManagement(){
        cy.xpath("//span[normalize-space()='Life Management Counseling']").click()
        cy.wait(300)
    }
    HIV(){
        cy.xpath("//span[normalize-space()='HIV / AIDS']").click()
        cy.wait(300)
    }
    MedicationTreatment(){
        cy.xpath("//span[normalize-space()='MAT (Medication assisted treatment)']").click()
        cy.wait(300)
        cy.get('body').click(0, 0);
    }
    // ContinueButton(){
    //     cy.xpath("//button[normalize-space()='Continue']").click()
    //     cy.wait(300)
    // }


}