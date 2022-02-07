

 let cart = localStorage.getItem("cart");
 
 if (!cart) {
   cart = [];
   localStorage.setItem("cart", JSON.stringify(cart));
 } else {
   cart = JSON.parse(cart);
 }