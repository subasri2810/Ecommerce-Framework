import {test} from "@playwright/test"
import Login from "../POM/login.page.js"
import fs from 'fs'
let userData=fs.readFileSync("C:/Users/acer/OneDrive/Desktop/Saucedemo/Ecommerce-Framework/Test-Data/LoginPageData.json")
userData=JSON.parse(userData)
let url=userData.url
let username=userData.username
let password=userData.password
test("Login to Sauce Demo", async({page})=>{
    let login=new login(page)
    await login.goto()
    await login.LoginToSauceDemo(url,username,password)
})