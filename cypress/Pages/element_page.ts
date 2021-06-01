import BasePage from "./bage_page";
import LoginLocators from "../fixtures/text_box.json";
import textBoxData from "../fixtures/textbox_data.json";
import checkBoxLocators from "../fixtures/check_box.json";
import uploadFileLocators from "../fixtures/upload_file.json";
import alertLocators from "../fixtures/alerts.json";

class ElementPage extends BasePage {
    clickElementCard() {
        this.clickOnDomElementByXpath(LoginLocators.elementCard);
    }
    fillMandatoryFields() {
        this.clickOnDomElementByXpath(LoginLocators.textBox);
        this.typeTextonDom(LoginLocators.fullName, textBoxData.fullName);
        this.typeTextonDom(LoginLocators.email, textBoxData.email);
    }
    clickSubmit() {
        this.clickOnDomElement(LoginLocators.submitButton);
    }
    validateValues() {
        this.seesXpathContainText(LoginLocators.output, textBoxData.fullName);
    }
    clickCheckBoxCard(){
        this.clickOnDomElementByXpath(checkBoxLocators.checkBoxCard);
    }
    checkBoxClick(){
        this.clickOnDomElementByXpath(checkBoxLocators.expandIcon)
        this.clickOnCheckBox(checkBoxLocators.firstCheckBox)
    }
    unCheckbox(){
        this.deselectedCheckBox(checkBoxLocators.firstCheckBox)
    }
    clickUploadFileCard(){
        this.clickOnDomElementByXpath(uploadFileLocators.uploadFileCard)
    }
    uploadingFile(){
        this.uploadFile(uploadFileLocators.uploadButton, uploadFileLocators.doc1)
    }
    uploadSuccess(){
        this.seesDomContainText(uploadFileLocators.uploadedSuccess,uploadFileLocators.doc1 )
    }
    onClickAlert(){
        cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click();
        cy.get(':nth-child(3) > .element-list > .menu-list > #item-1').click();
        cy.get(alertLocators.alertButton).click();
        cy.on('window:alert',(String)=>{
            expect(String).to.equal(alertLocators.alertMsg);
        })
        
}
}


export default ElementPage;
