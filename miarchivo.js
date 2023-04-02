const productos = [
    { codigo: '1', nombre: 'Kanikama Roll', precio: 10990 },
    { codigo: '2', nombre: 'Caribean Roll', precio: 15990 },
    { codigo: '3', nombre: 'Maki Roll', precio: 12990 },
    { codigo: '4', nombre: 'Gyosas Pollo', precio: 7990 },
    { codigo: '5', nombre: 'Gyosas Carne', precio: 7990 },
    { codigo: '6', nombre: 'Gyosas Cerdo', precio: 8990 },
    { codigo: '7', nombre: 'Coca-Cola', precio: 2500 },
    { codigo: '8', nombre: 'Sprite', precio: 2500 }
];

const buscarProducto = (codigo) => productos.find((producto) => producto.codigo === codigo);

let nombreUsuario = prompt('¡Bienvenido! Ingresa tu nombre para continuar');

while (nombreUsuario.trim() === '') {
    alert('Nombre inválido');
    nombreUsuario = prompt('Ingresa tu nombre');
}

alert(`¡Hola ${nombreUsuario}! Gracias por elegirnos.`);

let total = 0;

const sumarTotal = (precio) => total += precio;

let respuesta = prompt(`${nombreUsuario}, ¿quieres comprar un rico sushi?`);

while (respuesta.toLowerCase() === 'si') {
    let codigoProducto = prompt('Por favor ingrese el código del producto que desea comprar: 1-Kanikama Roll\n2-Caribean Roll\n3-Maki Roll\n4-Gyosas Pollo\n5-Gyosas Carne\n6-Gyosas Cerdo\n7-Coca-Cola\n8-Sprite');
    let producto = buscarProducto(codigoProducto);

    if (producto) {
        alert(`Agregaste ${producto.nombre}... ${producto.precio}$`);
        sumarTotal(producto.precio);
    } else {
        alert('Código de producto inválido');
    }

    respuesta = prompt('¿Deseas comprar algún otro producto?');
}

alert(`Total en el carrito: $${total}`);
alert(`¡Muchas gracias ${nombreUsuario} por tu compra! En instantes nos pondremos en contacto para finalizar tu pedido.`);
