let nombreUsuario = prompt('¡Bienvenido! Ingresa tu nombre para continuar');
while (nombreUsuario === '') {
    alert('Nombre invalido');
    nombreUsuario = prompt('Ingresa tu nombre');
}

alert(nombreUsuario + ', gracias por elegirnos!');

let carrito = []; // 
let productos = [  
{ codigo: '1', nombre: 'Kanikama Roll', precio: 10990 },
{ codigo: '2', nombre: 'Caribean Roll', precio: 15990 },
{ codigo: '3', nombre: 'Maki Roll', precio: 12990 },
{ codigo: '4', nombre: 'Gyosas Pollo', precio: 7990 },
{ codigo: '5', nombre: 'Gyosas Carne', precio: 7990 },
{ codigo: '6', nombre: 'Gyosas Cerdo', precio: 8990 },
{ codigo: '7', nombre: 'Coca-Cola', precio: 2500 },
{ codigo: '8', nombre: 'Sprite', precio: 2500 }];

let Total = 0;

function buscarProducto(codigo) { 
  return productos.find(producto => producto.codigo === codigo);
}

function sumarTotal(precio) { 
  Total += precio;
}

function agregarProductoAlCarrito(codigo) { 
  let producto = buscarProducto(codigo);
  if (producto) {
    carrito.push(producto);
    sumarTotal(producto.precio);
    alert(`Agregaste ${producto.nombre}... ${producto.precio}$`);
  } else {
    alert('Codigo inexistente');
  }
}

let mensaje = prompt(nombreUsuario + ' quieres comprar un rico sushi?');
while (mensaje.toLowerCase() === 'si') {
    let producto = prompt('1-Kanikama Roll\n2-Caribean Roll\n3-Maki Roll\n4-Gyosas Pollo\n5-Gyosas Carne\n6-Gyosas Cerdo\n7-Coca-Cola\n8-Sprite');
    agregarProductoAlCarrito(producto); 
    mensaje = prompt('¿Deseas comprar algún otro producto?');
    if (mensaje.toLowerCase() === 'no') {
        break;
    }
}

alert('Productos en el carrito:');
carrito.forEach(producto => alert(`${producto.nombre}... ${producto.precio}$`));
alert(`Total en el carrito: $${Total}`);
alert('Muchas gracias ' + nombreUsuario + ' por tu compra. En instantes nos pondremos en contacto para finalizar tu pedido.');
