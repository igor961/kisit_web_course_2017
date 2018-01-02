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
    }

    get inventory() {
        return this.product.inventory;
    }

    set inventory(quan) {
        this.product.inventory = quan;
    }

    get price() {
        return this.product.price;
    }
}


var basket = (function () {
    return {
        myBasket: new Array(),
        addProduct: function (productID) {
            let prod = new ProductLineItem(Object.assign({}, products[productID]));
            prod.inventory = 1;
            return this.myBasket.push(prod);
        },
        removeProduct: function (productID) {
            return this.myBasket.splice(productID, 1);
        },

        updateProductQuantity: function (productID, quantity) {
            let o = this.myBasket[productID];
            o.inventory = quantity;
        },
        getTotalPrice: function () {
            let totalPrice = 0;
            this.myBasket.forEach(function (cur, i, arr) {
                totalPrice += cur.price * cur.inventory;
            });
            return totalPrice;
        }
    }
})();