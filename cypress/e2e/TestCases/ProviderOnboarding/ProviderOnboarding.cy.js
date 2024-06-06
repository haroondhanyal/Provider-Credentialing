/// <reference types="Cypress"/>

import { RequestParticipation } from "../../Pages/ProviderOnboardingCenter/RequestParticipation"; 
import { ReqParticipationForm } from "../../Pages/ProviderOnboardingCenter/RequestParticipationForm";
import { NetworkParticipationCheck } from "../../Pages/ProviderOnboardingCenter/NetworkParticipationCheck";
import { SpecialtyDetails } from "../../Pages/ProviderOnboardingCenter/SpecialtyDetails";
import { PractitionerInformation } from "../../Pages/ProviderOnboardingCenter/PractitionerInformation";
import { ContractingInformation } from "../../Pages/ProviderOnboardingCenter/ContractingInformation";
import { AddressInformation } from "../../Pages/ProviderOnboardingCenter/AddressInformation";
import { AddressConfirmation } from "../../Pages/ProviderOnboardingCenter/AddressConfirmation";
import { OtherInformation } from "../../Pages/ProviderOnboardingCenter/OtherInformation";
import { BehavioralHealth } from "../../Pages/ProviderOnboardingCenter/BehavioralHealth";



const Aetna = new RequestParticipation();
const SubmitterInformationForm = new ReqParticipationForm();
const ParticipationCheck= new NetworkParticipationCheck();
const SpecialDetail= new SpecialtyDetails();
const InfoPract= new PractitionerInformation();
const ContractInfo =new ContractingInformation();
const AddressInfo =new AddressInformation();
const AddressConfirm=new AddressConfirmation();
const OtherInfo=new OtherInformation();
const BehaviorHealth= new BehavioralHealth();


describe('Request Aetna Website visit', () => {
    

    it('Visit the Aetna website and perform actions', () => {
        cy.visit('https://extaz-oci.aetna.com/pocui/');
        cy.fixture('StartParticipation').then((data)=>{
        Aetna.JoinNetwork();
        Aetna.Interested(data.IAmInterested);
        Aetna.Applying(data.ApplyingFor);
        Aetna.Joining(data.Joining);
        Aetna.Continue();

        })
        cy.fixture('Request').then((data) => {
            SubmitterInformationForm.LastName(data.LastName);
            SubmitterInformationForm.FirstName(data.FirstName);
            SubmitterInformationForm.Role(data.roleSelection);
            SubmitterInformationForm.SubmitterEmail(data.SubmitterEmail);
            SubmitterInformationForm.VerifyEmail(data.VerifyEmail);
            SubmitterInformationForm.phoneNumber(data.PhoneNumber);
            SubmitterInformationForm.ext(data.EXT);
            SubmitterInformationForm.faxNumber(data.FaxNumber);
            SubmitterInformationForm.providerNPINumber(data.IndividualNPI);
            // in this it will just click on that Email acknowledge then it will not any new tab
            cy.xpath("//a[normalize-space()='EMAIL ACKNOWLEDGEMENT']").then(($el) => {
                $el.on('click', (event) => {
                    event.preventDefault();
                });
            }).click();
            SubmitterInformationForm.Agree()  
            SubmitterInformationForm.agreeCheckbox()
            SubmitterInformationForm.Continue()
        });
        cy.fixture('NetworkCheck').then((data)=>{
            ParticipationCheck.Yes()
            ParticipationCheck.ProvideVirtual()
            ParticipationCheck.IamJoining(data.IAmJoin)
            ParticipationCheck.SelectSituation(data.Situation)
            ParticipationCheck.SelectState(data.State)
            ParticipationCheck.PrimaryZipCode(data.PZipCode)
            ParticipationCheck.EXT(data.EXT)
            ParticipationCheck.TaxIdAndType(data.TaxIDSelection)
            ParticipationCheck.TaxIDName(data.TIDName)
            ParticipationCheck.TaxID(data.TaxID)
            ParticipationCheck.VerifyTaxID(data.VerifyTaxID)
            ParticipationCheck.PLastName(data.PLastName)
            ParticipationCheck.PFirstName(data.PFirstName)
            ParticipationCheck.IndividualNPI(data.IndividualNPI)
            ParticipationCheck.AgreeCheckbox()
            ParticipationCheck.ContinueButton()
            ParticipationCheck.ContinueSession()
        })
        cy.fixture('SpecialtyDetails').then((data)=>{
            SpecialDetail.DegreeType(data.DegreeTypeSelection)
            SpecialDetail.PrimarySpecialty(data.PrimarySpecialtySelection)
            cy.xpath("//a[normalize-space()='Behavioral Health Provider Manual']").then(($el) => {
            $el.on('click', (event) => {
                event.preventDefault();
            });
        }).click();
             SpecialDetail.Agree()
            SpecialDetail.agreeCheckbox()
            SpecialDetail.Continue()
            SpecialDetail.AcknowledgeAndContinue()

        })
        cy.fixture('PractionerInformation').then((data)=>{
            InfoPract.MiddleInitial(data.Middle)
            InfoPract.DateOfBirth(data.dobPractitioner)
            InfoPract.MedicalLicenseState(data.MLicenseState)
            InfoPract.medicalLicenseNumber(data.MLicenseNumber)
            InfoPract.medicalLicenseExpiryDate(data.MLicenseExpiry)
            InfoPract.CAQH(data.Caqh)
            InfoPract.WebsiteURL(data.WebURL)
            InfoPract.YesSelect()
            InfoPract.ContinueButton()

        })
        ContractInfo.ChooseSubmitter()
        ContractInfo.EmailMethod()
        ContractInfo.UseTheSubmitter()
        ContractInfo.ContinueButton()
        cy.fixture('AddressInfo').then((data)=>{
            AddressInfo.Street1(data.Street1)
            AddressInfo.Street2(data.Street2)
            AddressInfo.City(data.City)
            AddressInfo.PhoneNumber(data.PhoneNumber)
            AddressInfo.EXTNumber(data.ExtNumber)
            AddressInfo.FaxNumber(data.FaxNumber)
            AddressInfo.TeleHEalthDropDown()
            AddressInfo.OptionSelections1()
            AddressInfo.TypesTeleHealth()
            AddressInfo.OptionSelections2()
            AddressInfo.TeleHealthServices(data.TeleHealth)
            AddressInfo.Checkbox()
            AddressInfo.ContinueButton()
            
        })
        
        AddressConfirm.PrimaryMailingAddress()
        AddressConfirm.PrimaryBillingAddress()
        AddressConfirm.ContinueButton()
        cy.fixture('OtherInfo').then((data)=>{
            OtherInfo.HospitalAdmittingPrivileges()
            OtherInfo.FacilityAdmittingPrivileges()
            OtherInfo.FacilityLocation1(data.FacilityLocation1)
            OtherInfo.StateSelection1(data.SelectState1)
            OtherInfo.AddFacility()
            OtherInfo.FacilityLocation2(data.FacilityLocation2)
            OtherInfo.StateSelection2(data.SelectState2)
            OtherInfo.Attachments()
        // OtherInfo.ContinueButton()

        })
        
        // const filePath='C:/Users/Thinkpad/Downloads/Downloads/Student.pdf';
        // const filePath='C:/Insight-Technology-Projects/Provider-Credentialing/cypress/e2e/fixtures/TCS.pdf';
        // const cssSelector='.paper_clip_style';
        // OtherInfo.Attachments(cssSelector,filePath)
        // cy.fixture('cypress/e2e/fixtures/pic.png', 'base64').then((fileContent) => {
           
        //     OtherInfo.Attachments({
        //       force: true
        //     });
          
        //  cy.get("img[alt='Attachments icon Required']").invoke('attr', 'src', 'data:image/png;base64,' + fileContent);
        //   });
        
        
        // BehaviorHealth.infants()
        // BehaviorHealth.elementary()
        // BehaviorHealth.Adolescents()
        // BehaviorHealth.Seniors()
        // BehaviorHealth.HaveAccommodations()
        // BehaviorHealth.MedicareCertified()
        // BehaviorHealth.MedicadCertified()
        // BehaviorHealth.AetnaProgram()
        // BehaviorHealth.AmericanSignal()
        // BehaviorHealth.ArabicLanguage()
        // BehaviorHealth.SpanishLanguage()
        // BehaviorHealth.UrduLanguage()
        // BehaviorHealth.ProviderPracticeFocus()
        // BehaviorHealth.AddictionSpecialist()
        // BehaviorHealth.GenderIdentity()
        // BehaviorHealth.LifeManagement()
        // BehaviorHealth.HIV()
        // BehaviorHealth.MedicationTreatment()
        


        

        
        
    });
    // it('Submitter Information with first fixture', function() {
    //     // Access the state from the previous test
    //     cy.fixture('Request').then((data) => {
    //         SubmitterInformationForm.LastName(data.LastName);
    //         SubmitterInformationForm.FirstName(data.FirstName);
    //         SubmitterInformationForm.Role();
    //         SubmitterInformationForm.SubmitterEmail(data.SubmitterEmail);
    //         SubmitterInformationForm.VerifyEmail(data.VerifyEmail);
    //         SubmitterInformationForm.phoneNumber(data.PhoneNumber);
    //         SubmitterInformationForm.ext(data.EXT);
    //         SubmitterInformationForm.faxNumber(data.FaxNumber);
    //         SubmitterInformationForm.providerNPINumber(data.IndividualNPI);
    //     });
    // });
    
});
9