var products = [{
    name: "test",
    price: 12.9,
    inventory: 20
}, {
    name: "test2",
    price: 30,
    inventory: 80
}];

class ProductLineItem {
    constructor(product) {
        this.product = product;
        this.name = product.name;
        this.quantity = 1;
        this.price = product.price;
        product.inventory -= 1;
    }
    delete() {
        this.product.inventory += this.quantity;
    }
    updateQuan(quan) {
        this.product.inventory -= quan - this.quantity;
        this.quantity = quan;
    }
}


var basket = (() => {
    let myBasket = [];
    return {
        addProduct: productID => {
            const index = myBasket.findIndex((element, index, array) => element.name===products[productID].name);
            if (index > -1) {
                const quan = myBasket[index].quantity+1;
                myBasket[index].updateQuan(quan);
            } else {
                const prod = new ProductLineItem(products[productID]);
                return myBasket.push(prod);
            }
        },
        removeProduct: productID => {
            myBasket[productID].delete();
            return myBasket.splice(productID, 1);
        },
        updateProductQuantity: (productID, quantity) => {
            myBasket[productID].updateQuan(quantity);
        },
        getTotalPrice: () => {
            let totalPrice = 0;
            myBasket.forEach((cur, i, arr) => totalPrice += cur.price * cur.quantity);
            return totalPrice;
        }
    };
})();
