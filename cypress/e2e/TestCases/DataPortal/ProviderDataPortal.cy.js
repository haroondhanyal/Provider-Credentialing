/// <reference types="Cypress"/>

import { SignInCAQH } from "../../Pages/ProviderDataPortal/SignIn";

const SignInPortal=new SignInCAQH();
describe("Provider Data Portal",()=>{
    it("SignIn to The Portal",()=>{
        cy.visit(" https://proview.caqh.org/Login?Type=PR");
        cy.fixture('SignIn').then((data)=>{
            SignInPortal.UserName(data.UserName)
            SignInPortal.Password(data.Password)
            SignInPortal.RememberMeCheckBox()
            SignInPortal.SignInButton()
           

        })
    })
})