import { test } from "@playwright/test";
import LoginPage from "../POM/login.page";
import fs from "fs";

let userdata = fs.readFileSync("C:/Users/acer/OneDrive/Desktop/Saucedemo/Ecommerce-Framework/Test-Data/LoginPageData.json");

userdata = JSON.parse(userdata);

let url = userdata.url;
let username = userdata.username;
let password = userdata.password;

test("login to sauce demo", async ({ page }) => {
    let login = new LoginPage(page);
    await login.Logintosaucedemo(url, username, password);
    await login.Logintosaucedemo(url, username, password);
});
