
var sizePrice = [800, 600, 400]
var deliverPrice = [0, 100]
$(document).ready(function () {
    $('form#formone').submit(function (event) {
        event.preventdefault();
        var pizzaCrust = $('#crust').val();
        var pizzaTopping = $('#topping').val();
        var pizzaSize = $('#size').val();
        var pizzaQuantity = parseInt($('#quantity').val());
        var pizzaDeliver = parseInt($('#deliver').val());

        var price = sizePrice[pizzaSize - 1];


        var deliveryCost = deliverPrice[pizzaDeliver - 1];

        newOrder = new Order(pizzaSize, pizzaCrust, pizzaTopping);
        newTotal = new Total(price, pizzaQuantity, deliveryCost);

        if (pizzaDeliver === 1) {
            alert("Your order is " + newOrder.fullOrder() + "continue to see your total bill");
            alert("Your bill is " + newTotal.finalTotal() + "you 'll receive your pizza in next few minutes");
        }

        else {
            if (pizzaDeliver === 2) {
                prompt("Enter your location");
                alert("Your order has been received and it will be delivered,cotinue to see your bill");
                alert("your order is " + newOrder.fullOrder() + "continue to see your total bill");
                alert("your bill is " + newTotal.finalTotal() + " your pizza will be delivered in shortly");

            }
        }
    });

});

function Order(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
Order.prototype.fullOrder = function () {
    return this.type + "with the topping of " + this.toppings + "and " + this.crust + " as crust.";
};

function Total(price, quantity, delivery) {
    this.price = price;
    this.quantity = quantity;
    this.delivery = delivery;
}
Total.prototype.finalTotal = function () {
    return this.price * this.quantity + this.delivery;
};
