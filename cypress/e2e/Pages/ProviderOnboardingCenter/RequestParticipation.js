const requestPArticipationForm = require('../../Locators/ProviderOnboarding.json')
export class RequestParticipation{
   JoinNetwork(){
        cy.xpath(requestPArticipationForm.ProviderOnboarding.JoinNetwork).scrollIntoView().click({force:true})
        cy.wait(300)     
    }
    Interested(IAmInterested){  
        cy.xpath(requestPArticipationForm.ProviderOnboarding.IamInterested).scrollIntoView().select(IAmInterested);
        cy.wait(300)     
    }
    
    Applying(ApplyingFor){
        cy.xpath(requestPArticipationForm.ProviderOnboarding.IamApplying).scrollIntoView().select(ApplyingFor);
        cy.wait(300)     
    }
    Joining(Joining){
        cy.xpath(requestPArticipationForm.ProviderOnboarding.IamJoining).scrollIntoView().select(Joining);
        cy.wait(300)     
    }
    Continue(){
        cy.xpath(requestPArticipationForm.ProviderOnboarding.ContinueBtn).scrollIntoView().click({force:true})
        cy.wait(300)     
    }
}