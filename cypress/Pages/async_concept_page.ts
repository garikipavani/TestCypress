 import BasePage from "./bage_page";
 import bookStoreLocators from "..//fixtures/book_store_locators.json";

 class AsyncPage extends BasePage {

    checkPromise(){
        let arr = [];
        cy.get("a").each((e1) =>{
          arr.push(e1.text());
         }).then(()=>{
           console.log('Anchor Tag count  - ${arr.length}');
           cy.log('Anchor tag text string  - ${arr.join(",")}');
         });
      }
   
 }
 export default AsyncPage;


