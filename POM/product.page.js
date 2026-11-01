class Product{
    constructor(page){
        this.page=page;
        this.menubar=page.locator("#react-burger-menu-btn")
        this.cartIcon=page.locator(".shopping_cart_link")
        this.CartBadge=page.locator(".shopping_cart_badge")
        this.LogoutButton=page.locator("#logout_sidebar_link")
        this.title=page.locator(".title")
        this.sortDropDown=page.locator(".product_sort_container")
        this.removeBtn=page.getByRole('button',{name:"Remove"})
        this.AddtoCartBtn=page.getByRole('button',{name:"Add to cart"})
        this.priceOfProduct=page.locator(".inventory_item_price")
        this.ProductItem=page.locator(".inventory_item")
        this.ProductItemName=page.locator(".inventory_item_name")
        this.ProductItemPrice=page.locator(".inventory_item_price")
    }
    async AddtoCart(){
    await this.AddtoCartBtn().first.click();
    }
    async RemoveProduct(){
        const item=await this.ProductItem.filter({hasName:"Sauce Labs Backpack"})
        await item.locator('button:has-Text("Remove")').click()
    }
    async SortItem(){
        await this.sortDropDown.selectOption('Name (Z to A)')
    }
    async OpenCart(){
        await  this.cartIcon.click()
    }
}
export default Product;