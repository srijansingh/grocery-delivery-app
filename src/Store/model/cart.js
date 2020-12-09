class CartItem{
    constructor(userid, productid,imageurl, title, quantity, costprice, sellingprice, total){
        this.userid = userid;
        this.productid = productid;
        this.imageurl= imageurl;
        this.title = title;
        this.quantity = quantity;
        this.costprice = costprice;
        this.sellingprice = sellingprice;
        this.total = total;
    }
}

export default CartItem 