class Checkout{
    constructor(page){
        this.page=page;
        this.first_Name=page.getByPlaceholder("First Name")
        this.last_Name=page.getByPlaceholder("Last Name")
        this.Zip_code=page.getByPlaceholder("Zip/Postal Code")
        this.Cancel=page.getByRole('Button',{name:"Cancel"})
        this.Continue=page.getByRole('Button',{name:"Continue"})
        this.errorMessage=this.page.locator(".error-message-container.error")
    }
    async fillYourInfo(){
        await this.first_Name("Suba")
        await this.last_Name("Shree")
        await this.Zip_code(12345)

    }
    async ClickOnCancelButton(){
        await this.Cancel.click()
    }
    async ClickOnContinueButton(){
        await this.Continue.click()
    }
    async fillAndContinue(){
        await this.fillYourInfo()
        await this.ClickOnContinueButton.click()
    }
    async errorMessageOnCheckout(){
        return await this.errorMessage.textContent()
    }
}
export default Checkout;
//encapsulation in javascript can be achieved by using "#" ,
//  bcoz whenever we need to acces only the methods in the sccript will go
//  for encapsulation, otherwise all the locators will be accesed in the testscript
