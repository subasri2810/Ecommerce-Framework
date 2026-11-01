class Login{
    constructor(page){
        this.page=page;
        this.usernameField=page.getByPlaceholder("Username")
        this.passwordField=page.getByPlaceholder("Password")
        this.loginButton=page.getByRole('button',{name:"Login"})
        this.errorMsg=page.locator(".error-message-container.error")
    }
    async goto(){
        await this.page.goto("https://www.saucedemo.com/")
    }
    async LoginToSauceDemo(){
         await this.page.goto("https://www.saucedemo.com/")
        await this.usernameField.fill("standard_user")
        await this.passwordField.fill("secret_sauce")
        await this.loginButton.click()
    }
    async ClickOnLoginBtn(){
        await this.loginButton.click()
    }
    async geterrorMsg(){
        return await this.errorMsg.textContent()
    }

}
export default Login;