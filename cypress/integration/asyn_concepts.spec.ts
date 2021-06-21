import AsyncPage from "../Pages/async_concept_page";

const Page = new AsyncPage();
describe("Text Box actions", () => {
    before(() => {
       Page.login();
    })
    it('Book Store Flow',() => {
       Page.checkPromise();



    })
})