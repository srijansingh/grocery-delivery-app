class Order{
    constructor(id,orderid, items, totalamount, totalitems, address, status, date, update){
        this.id = id;
        this.orderid = orderid;
        this.items = items;
        this.totalamount = totalamount;
        this.totalitems = totalitems;
        this.address = address;
        this.status = status;
        this.date = date;
        this.update = update
    }
}

export default Order;