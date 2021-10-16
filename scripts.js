let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

function pay() {
    window.alert("Los productos: " + products.join(", \n") + " \nseran enviados en cuanto se complete el pago");
}

function send() {
    window.alert("Se ha completado el registro, los productos se enviarán pronto");
}
