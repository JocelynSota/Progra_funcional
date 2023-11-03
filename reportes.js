const fs = require('fs');

function cargarProductos () {
  try {
    const data = fs.readFileSync('productos.JSON', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error al cargar el archivo JSON:', error);
    return [];
  }
};

function existenciaMayor20 (productos) {
    return productos.productos.filter(producto => producto.cantidad_existencia > 20).length;}

function existenciaMenos15 (productos) {
    return productos.productos.filter(producto => producto.cantidad_existencia < 15).length;}

function clasificacionPrecio(productos) {
    const productosAgrupados = {};
  
    productos.productos.forEach(producto => {
      const clasificación = producto.clasificación;
      const precio = producto.precio;
  
      if (!productosAgrupados[clasificación]) {
        productosAgrupados[clasificación] = [];
      }
  
      if (precio > 15.50) {
        productosAgrupados[clasificación].push(producto);
      }
    });
  
    return productosAgrupados;
  };

function precioEntre20y45 (productos) {
    return productos.productos.filter(producto => producto.precio > 20.30 && producto.precio < 45.00);}


function contarProductosClasi (productos) {
  const contador = {};
  productos.productos.forEach(productos => {
    const clasificación = productos.clasificación;
    contador[clasificación] = (contador[clasificación] || 0) + 1;
  });
  return contador;
};

let productos = cargarProductos();

// Ejecutar los ejercicios
console.log('Número de productos con existencia mayor a 20:', existenciaMayor20(productos));
console.log('Número de productos con existencia menor a 15:', existenciaMenos15(productos));
console.log('Lista de productos con la misma clasificación y precio mayor 15.50:', clasificacionPrecio(productos));
console.log('Lista de productos con precio mayor a 20.30 y menor a 45.00:', precioEntre20y45(productos));
console.log('Número de productos agrupados por su clasificación:', contarProductosClasi(productos));
