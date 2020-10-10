
var sizePrice=[800,600,400]
var deliverPrice=[0,100]
$(document).ready(function(){
$('form#formone').submit(function(event){
    event.preventdefault();
    var pizzaCrust=$('#crust').val();
    var pizzaTopping=$('#topping').val();
    var pizzaSize=$('#size').val();
    var pizzaQuantity=parseInt($('#quantity').val());
    var pizzaDeliver=parseInt($('#deliver').val());
})
});