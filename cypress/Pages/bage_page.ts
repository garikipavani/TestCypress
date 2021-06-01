/// <reference types="cypress" />

import { should } from "chai";

// @ts-check

export default abstract class BasePage {
    login() {
        cy.visit("/");
        cy.scrollTo(0, 500);
    }
    clickOnDomElement(dom: string) {
        cy.get(dom).click();
        return this;
    }
    clickOnDomElementByXpath(dom: string) {
        cy.xpath(dom).click();
        return this;
    }
    typeTextonDomWithXpath(dom: string, text: string) {
        cy.xpath(dom).type(text, { force: true });
        return this;
    }
    typeTextonDom(dom: string, text: string) {
        cy.get(dom).type(text, { force: true });
        return this;
    }
    seesXpathContainText(xpath: string, text: string) {
        cy.xpath(xpath).contains(text);
        return this;
    }
    seesDomContainText(dom: string, text: string) {
        cy.get(dom).should("contain", text);
        return this;
      }
    clickOnCheckBox(dom: string) {
        cy.xpath(dom).check({ force: true })
        return this;
    }
    deselectedCheckBox(dom: string) {
        cy.xpath(dom).uncheck({ force: true })
        return this;
    }
    uploadFile(filepath: string, file: string) {
        cy.get(filepath).attachFile(file, { force: true });
      }
      seesDomAlert(dom: string, text: string){
          cy.get(dom).click().on('window:alert',(String)=>{
              expect(String).to.equal(text);
            return this;
          })
      }

}
