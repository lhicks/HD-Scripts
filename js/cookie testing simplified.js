if(console.clear){
	console.clear();
}
else if(clear){
	clear();
}
console.log("------Shipping Address------");
console.log("cookie  ", Cookies.CheckoutData().ShippingContactId);
console.log("checkout", Checkout.Models.OrderSummary.get("ShippingAddress").id);
console.log("------Billing Address---------");
console.log("cookie  ", Cookies.CheckoutData().BillingContactId);
console.log("checkout", Checkout.Models.OrderSummary.get("BillingAddress").id);
console.log("------Shipping Option---------");
console.log("cookie  ", Cookies.CheckoutData().ShippingOptionId);
var shippingOption = Checkout.Models.OrderSummary.get("ShippingOption");
console.log("checkout", shippingOption ? shippingOption.get("CarrierShippingMethodId") : "");
console.log("------Payment Method---------");
console.log("cookie  ", Cookies.CheckoutData().CreditCardId);
var creditCard = Checkout.Models.OrderSummary.get("CreditCard");
console.log("checkout", creditCard ? creditCard.id : "");
console.log("cookie   > PayPal", Cookies.CheckoutData().PayPalPayerId && Cookies.CheckoutData().PayPalToken ? "has value" : "empty");
var payPal = Checkout.Models.OrderSummary.get("PayPalPayment");
console.log("checkout > PayPal", payPal ? "has value" : "empty");