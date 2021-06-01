import ElementPage from "../Pages/element_page";

const Page = new ElementPage();

describe("Text Box actions", () => {
    before(() => {
        Page.login();
    })
    it('Text box actions', () => {

        Page.clickElementCard();
        Page.fillMandatoryFields();
        Page.clickSubmit();
        Page.validateValues();
    })
    it('Check Box actions', () => {
        Page.clickCheckBoxCard();
        Page.checkBoxClick();
        Page.unCheckbox();
    })
    it('Upload file', () => {
        Page.clickUploadFileCard();
        Page.uploadingFile();
        Page.uploadSuccess();
    })
    it('manage alerts and pop ups', () =>{
        Page.onClickAlert();
    })

})