const cart = []

function addItem() {
let choice = prompt("Aggiungi un item", 'TV, Samsung Mobile, Dyson Hoover, Vintage Radio, Lenovon Computer'); 

if (cart.includes(choice) == false) {
    cart.push(choice);
    console.log(cart);
}
else {
    console.log ('Item già presente nella lista');
}
}

