class LoginPage{
      constructor(page){
               this.page=page;
               this.username=page.getByPlaceholder("Username")
                this.password=page.getByPlaceholder("Password")
                this.loginbtn = page.getByRole('button',{name:"Login"})
                this.errorMessage=page.locator(".error-message-container.error")

      }
      
      async Logintosaucedemo(url,username,passwrod){
               await this.page.goto(url)
               await this.username.fill(username)
               await this.password.fill(passwrod)
               await this.loginbtn.click()

      }
       async clickonloginbtn(){
            await this.loginbtn.click()
        }

      async errorOnlogin(){
             return await this.errorMessage.textContent();


        } 





}
export default LoginPage;