if(console.clear){
	console.clear();
}
else if(clear){
	clear();
}
console.log("----------Cookie values-------");
console.log("CustomerId", Cookies.CustomerId());
console.log("ShoppingCartId", Cookies.ShoppingCartId());
console.log("RegionId", Cookies.RegionId());
console.log("RegionTax", Cookies.RegionTax());
console.log("OrderTotals TaxRate", Checkout.Models.OrderSummary.get("OrderTotals").get("TaxRate"));
console.log("CurrencyCode", Cookies.CurrencyCode());
var cd = Cookies.CheckoutData();
for(var key in cd){
	console.log(key, cd[key] ? cd[key] : '----'); 
}
console.log("----------Order summary values-------");
for(var key in Checkout.Models.OrderSummary.attributes){ 
	if(Checkout.Models.OrderSummary.get(key)){
		console.log("-----------" + key + "------------");
		for(var modelKey in Checkout.Models.OrderSummary.get(key).attributes){
			console.log(modelKey, Checkout.Models.OrderSummary.get(key).get(modelKey));
		}
	}
}
