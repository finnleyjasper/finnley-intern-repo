var cart = [
    { name: "apple", price: 1, qty: 3 },
    { name: "banana", price: 2, qty: 2 }
]

function calculateTotal(items){
    var total = 0
    for(var i=0;i<items.length;i++){
        total = total + items[i]["price"]*items[i]["qty"]
    }
    return total
}

var x = 1

var unused = 5

function hello() {
  console.log("Hello world")
}

hello()

let totalPrice = calculateTotal( cart )
console.log( "Total Price:",totalPrice )
