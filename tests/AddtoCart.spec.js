import {test} from "@playwright/test"
import Product from "../POM/product.page.js"

test("Add product to cart", async({page})=>{
    let products=new products(page)
    let login=new login(page)
    await login.loginToSauceDemo()
    await products.AddtoCart()
    await products.OpenCart()


})