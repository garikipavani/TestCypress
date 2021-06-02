import BookStorePage from "../Pages/book_store_page";
const BookStore = new BookStorePage();
describe("Text Box actions", () => {
    before(() => {
       BookStore.loginPage();
    })
    it('Book Store Flow',() => {
        BookStore.clickBookStoreCard();
        BookStore.backtoProfile();
        BookStore.checkIfBooksareAdded();



    })
})
