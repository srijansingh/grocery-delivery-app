class Product {
    constructor(key,_id, title,sellingprice,costprice,discount, imageurl, description, category, subcategory){
        this.key = key;
        this._id = _id;
        this.title = title;
        this.sellingprice = sellingprice;
        this.costprice=costprice;
        this.discount=discount;
        this.imageurl = imageurl;
        this.description = description;
        this.category=category;
        this.subcategory=subcategory;
    }
}

export default Product;