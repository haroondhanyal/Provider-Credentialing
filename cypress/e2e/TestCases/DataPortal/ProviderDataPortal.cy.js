// /// <reference types="Cypress"/>

// import { SignInCAQH } from "../../Pages/ProviderDataPortal/SignIn";
// import { ViewDataSummary } from "../../Pages/ProviderDataPortal/ViewDataSummary";
// import { DownloadStateApplication } from "../../Pages/ProviderDataPortal/DownloadStateApplication";

// const SignInPortal = new SignInCAQH();
// const ViewSummary = new ViewDataSummary();
// const DownloadState = new DownloadStateApplication();

// describe("Provider Data Portal", () => {
//   Cypress.on('uncaught:exception', (err, runnable) => {
//     return false;
//   });

//   beforeEach(() => {
//     cy.visit("https://proview.caqh.org/Login?Type=PR");
//   });
//   afterEach(() => {
//     // Stop the test run if any test case fails
//     cy.on('fail', (error, runnable) => {
//       throw error;
//     });
//   });

//   // it("Invalid Login", () => {
//   //   cy.fixture('InValidLogin').then((data) => {
//   //     SignInPortal.UserName(data.UserName);
//   //     SignInPortal.Password(data.Password);
//   //     SignInPortal.RememberMeCheckBox();
//   //     SignInPortal.SignInButton();
//   //   });

//   //   // Verify that an error message is displayed
//   //   cy.get('.error-message-selector').should('be.visible').and('contain', 'Invalid username or password');
//   // });

//   context("Valid Login Actions", () => {
//     beforeEach(() => {
//       cy.fixture('SignIn').then((data) => {
//         SignInPortal.UserName(data.UserName);
//         SignInPortal.Password(data.Password);
//         SignInPortal.RememberMeCheckBox();
//         // SignInPortal.SignInButton();
//       });
//     });
//     it("View Data Summary Report", () => {
//       ViewSummary.ViewData();
//       ViewSummary.SaveButton();
//       ViewSummary.ViewData();
//       ViewSummary.SaveButton();
//       cy.go('back');
//       cy.url().should('include', 'https://proview.caqh.org/PR'); 
//     });

//     it("Download State Application", () => {
//       DownloadState.SelectState();
//       DownloadState.StateSelection();
//       DownloadState.StateSelected();
//       DownloadState.IncludeAllDocument();
//       DownloadState.downloadButton();
//       // cy.go('back');
//       // cy.url().should('include', 'https://proview.caqh.org/PR'); 
//     });

//     // it("View Data Summary Report", () => {
//     //   ViewSummary.ViewData();
//     //   ViewSummary.SaveButton();
//     //   ViewSummary.ViewData();
//     //   ViewSummary.SaveButton();
//     // });
//   });
// });


/////// method 2

// /// <reference types="Cypress"/>

// import { SignInCAQH } from "../../Pages/ProviderDataPortal/SignIn";
// import { ViewDataSummary } from "../../Pages/ProviderDataPortal/ViewDataSummary";
// import { DownloadStateApplication } from "../../Pages/ProviderDataPortal/DownloadStateApplication";

// const SignInPortal = new SignInCAQH();
// const ViewSummary = new ViewDataSummary();
// const DownloadState = new DownloadStateApplication();

// describe("Provider Data Portal", () => {
//   Cypress.on('uncaught:exception', (err, runnable) => {
//     return false;
//   });

//   beforeEach(() => {
//     // Visit the login page
//     cy.visit("https://proview.caqh.org/Login?Type=PR");
    
//     // Perform login before each test
//     cy.fixture('SignIn').then((data) => {
//       SignInPortal.UserName(data.UserName);
//       SignInPortal.Password(data.Password);
//       SignInPortal.RememberMeCheckBox();
//       SignInPortal.SignInButton();
//     });
//   });

//   afterEach(() => {
//     // Stop the test run if any test case fails
//     cy.on('fail', (error, runnable) => {
//       throw error;
//     });
//   });

//   context("Valid Login Actions", () => {
//     it("View Data Summary Report", () => {
//       ViewSummary.ViewData();
//       ViewSummary.SaveButton();
//       ViewSummary.ViewData();
//       ViewSummary.SaveButton();

//       // Navigate back to the previous page
//       cy.go('back');
//       cy.url().should('include', 'https://proview.caqh.org/PR'); 
//     });

//     it("Download State Application", () => {
//       DownloadState.SelectState();
//       DownloadState.StateSelection();
//       DownloadState.StateSelected();
//       DownloadState.IncludeAllDocument();
//       DownloadState.downloadButton();

//       // Uncomment if you want to go back after download
//       // cy.go('back');
//       // cy.url().should('include', 'https://proview.caqh.org/PR'); 
//     });
//   });
// });


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
  afterEach(() => {
    cy.on('fail', (error, runnable) => {
      throw error;
    });
  });


  it("Login", () => {
    cy.visit("https://proview.caqh.org/Login?Type=PR");
    
    // Perform login
    cy.fixture('SignIn').then((data) => {
      SignInPortal.UserName(data.UserName);
      SignInPortal.Password(data.Password);
      SignInPortal.RememberMeCheckBox();
      SignInPortal.SignInButton();
      DownloadState.SelectState();
      DownloadState.StateSelection();
      DownloadState.StateSelected();
      DownloadState.IncludeAllDocument();
      DownloadState.downloadButton();
      cy.go('back');
      cy.url().should('include', 'https://proview.caqh.org/PR'); 
      cy.wait(8000)
    
     ViewSummary.ViewData();
     ViewSummary.SaveButton();
     ViewSummary.ViewData();
     ViewSummary.SaveButton();
    });
  });
  it("Invalid Credentials ",()=>{
    cy.visit("https://proview.caqh.org/Login?Type=PR");
    cy.fixture('InvalidLogin').then((data)=>{
      SignInPortal.UserName(data.UserName)
      SignInPortal.Password(data.Password);
      SignInPortal.SignInButton();
    })
    cy.url().should('include', 'SignIn'); 
  cy.get('.error-message-selector').should('be.visible').and('contain', 'Invalid username or password');
  })
  
  
});
