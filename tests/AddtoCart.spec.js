import { test } from "@playwright/test";
import ProductsPage from "../POM/product.page";
import LoginPage from "../POM/login.page";
import fs from "fs";

let userdata = JSON.parse(
    fs.readFileSync("C:/Users/acer/OneDrive/Desktop/Saucedemo/Ecommerce-Framework/Test-Data/LoginPageData.json")
);

let url = userdata.url;
let username = userdata.username;
let password = userdata.password;

test("add product to cart", async ({ page }) => {

    let login = new LoginPage(page);
    let product = new ProductsPage(page);

    await login.Logintosaucedemo(url, username, password);

    await product.clickonaddtocart();
    await product.Opencart();

});