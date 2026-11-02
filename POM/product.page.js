class ProductsPage{
       constructor(page){
          this.page=page;
          this.menubar=page.locator(".bm-burger-button")
          this.allitems = page.getByRole('link',{name:"All Items"})
          this.dynamiccatlog=page.locator("#dynamic_catalog_sidebar_link")
          this.about=page.locator("#inventory_sidebar_link")
           this.logout=page.locator("#logout_sidebar_link")
           this.carticon=page.locator(".shopping_cart_link")
           this.cartbadge=page.locator(".shopping_cart_badge")
           this.title=page.locator(".title")
           this.sortdropdown=page.locator(".product_sort_container")
           this.removebtn=page.getByRole('button',{name:"Remove"})
           this.addtocartbtn=page.getByRole('button',{name:"Add to cart"})
           this.inventoryitem=page.locator(".inventory_item")
           this.inventoryitemname=page.locator(".inventory_item_name ")
           this.inventoryitemprice=page.locator(".inventory_item_price")

       }
       async clickonaddtocart(){

        await this.addtocartbtn.first().click()
    //   let productarr=  await this.inventoryitemname.all()
    //     for (product of productarr){
    //         let p = product.textContent()
    //         p.includes("Sauce Labs Bike Light")
            
    //     }
       }
       async removeproduct(){
           const item = await this.inventoryitem.filter({hasname:"Sauce Labs Backpack"}) 
           await item.locator('button:has-Text("Remove")').click()
       }
       async sortitem(){

        await this.sortdropdown.selectOption('Name (Z to A)')
       }
       async Opencart(){

        await this.carticon.click()
       }



}
export default ProductsPage;