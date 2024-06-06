/// <reference types="Cypress"/>

import { SignInCAQH } from "../../Pages/ProviderDataPortal/SignIn";
import { ViewDataSummary } from "../../Pages/ProviderDataPortal/ViewDataSummary";
import { DownloadStateApplication } from "../../Pages/ProviderDataPortal/DownloadStateApplication";

const SignInPortal = new SignInCAQH();
const ViewSummary = new ViewDataSummary();
const DownloadState = new DownloadStateApplication();

describe("Provider Data Portal", () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    try {
        cy.visit("https://proview.caqh.org/Login?Type=PR");
        cy.fixture('SignIn').then((data) => {
          SignInPortal.UserName(data.UserName);
          SignInPortal.Password(data.Password);
          SignInPortal.RememberMeCheckBox();
          SignInPortal.SignInButton();
        });
      } catch (error) {
        // Handle login error
        cy.log("Login failed: " + error.message);
      }
    });



  it("Download State Application", () => {
    DownloadState.SelectState();
    DownloadState.StateSelection();
    DownloadState.StateSelected();
    DownloadState.IncludeAllDocument();
    DownloadState.downloadButton();
  });
    it("View Data Summary Report", () => {
    ViewSummary.ViewData();
    ViewSummary.SaveButton();
    ViewSummary.ViewData();
    ViewSummary.SaveButton();
  });
});
