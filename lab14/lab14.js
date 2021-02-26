// available items - item: price
var items = {
  coke: 1.5,
  water: 1,
  gatorade: 2.25,
  tea: 1.25,
  coffee: 2.75
};

// shopping cart - item: qty
var cart = {
  coke: 0,
  water: 0,
  gatorade: 0,
  tea: 0,
  coffee: 0
};

// add items to cart
function addItems(){
  var add = prompt("What item would you like to add? (Coke/Water/Vitamin Water/Tea/Coffee)");
  var qty = prompt("Qty:");
  if(add.toLowerCase() == "coke"){
    cart.coke += Number(qty);
    var text = "You have added " + qty + " " + add.toLowerCase() + " to your cart. <br>";
    document.getElementById("cart").innerHTML += text;
  }
  else if(add.toLowerCase() == "water"){
    cart.water += Number(qty);
    var text = "You have added " + qty + " " + add.toLowerCase() + " to your cart. <br>";
    document.getElementById("cart").innerHTML += text;
  }
  else if(add.toLowerCase() == "gatorade"){
    cart.gatorade += Number(qty);
    var text = "You have added " + qty + " " + add.toLowerCase() + " to your cart. <br>";
    document.getElementById("cart").innerHTML += text;
  }
  else if(add.toLowerCase() == "tea"){
    cart.tea += Number(qty);
    var text = "You have added " + qty + " " + add.toLowerCase() + " to your cart. <br>";
    document.getElementById("cart").innerHTML += text;
  }
  else if(add.toLowerCase() == "coffee"){
    cart.coffee += Number(qty);
    var text = "You have added " + qty + " " + add.toLowerCase() + " to your cart. <br>";
    document.getElementById("cart").innerHTML += text;
  }
  else{
    alert("The item you entered does not exist in the available items. Please try again");
  }
}

// empties shopping cart
function emptyCart(){
  document.getElementById("cart").innerHTML = "";
  cart.coke = 0;
  cart.water = 0;
  cart.gatorade = 0;
  cart.tea = 0;
  cart.coffee = 0;
}

// calculates/prints receipt for cart
function cashRegister(){
  document.getElementById("receipt").innerHTML = "";
  var text = "";
  var total = 0;
  for (property in cart){
    item = `${property}`;
    qty = `${cart[property]}`;
    subtotal = (`${cart[property]}` * `${items[property]}`);
    total += subtotal;
    text += "Item: " + item + " -- Qty: " + qty + " -- Subtotal: $"  + subtotal + "<br>";
  }
  text += "<br> Total: $" + total;
  document.getElementById("receipt").innerHTML += text;
}
