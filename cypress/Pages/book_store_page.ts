import BasePage from "./bage_page";
import bookStoreLocators from "..//fixtures/book_store_locators.json";

class BookStorePage extends BasePage {
   loginPage(){
       cy.visit('/login');
       cy.get(bookStoreLocators.userName).type(Cypress.env("USERNAME"));
      // this.typeTextonDom(bookStoreLocators.userName,bookStoreLocators.userNameText);
       this.typeTextonDom(bookStoreLocators.password, bookStoreLocators.passwordText);
       this.clickOnDomElement(bookStoreLocators.loginButton);
   }
   clickBookStoreCard(){
     this.clickOnDomElement(bookStoreLocators.bookStore);
     this.clickOnDomElementByXpath(bookStoreLocators.selectBook);
     cy.contains(bookStoreLocators.addBook).click();
     cy.on('window:alert',(String)=>{
      expect(String).to.equal(bookStoreLocators.popUpMsg);
  })
   }
   backtoProfile(){
     cy.visit('/profile');
   }
  checkIfBooksareAdded( ){
    cy.get(bookStoreLocators.bookTable).each(($e1) => {
      cy.wrap($e1).within(()=>{
        cy.get(".rt-tr").eq(1).should("contain", bookStoreLocators.author)
      });
    });

  }
}

export default BookStorePage;

function $e1($e1: any) {
  throw new Error("Function not implemented.");
}

