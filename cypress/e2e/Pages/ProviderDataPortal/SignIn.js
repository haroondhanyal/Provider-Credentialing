const ProviderDataPortal=require("../../Locators/SignIn.json")

export class SignInCAQH{
    UserName(UserName){
        cy.xpath(ProviderDataPortal.SignIn.UserName).type(UserName)
        cy.wait(300)
    }
    Password(Password){
        cy.xpath(ProviderDataPortal.SignIn.Password).type(Password)
        cy.wait(300)
    }
    RememberMeCheckBox(){
        cy.xpath(ProviderDataPortal.SignIn.RememberMe).click()
        cy.wait(300)
    }
    SignInButton(){
        cy.xpath(ProviderDataPortal.SignIn.SignButton).click()
        cy.wait(300)
    }


}