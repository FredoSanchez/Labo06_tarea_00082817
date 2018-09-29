var Tienda = class {
    constructor(){
        this.productos = [];
    }

    agregarProducto(producto){
        this.productos.push(producto);
    }


} 
var LaJefecita = new Tienda();

function callMenu(){
     var optn = prompt('Ingrese una opcion:\n 1.Agregar Producto \n 2.Modificar stock \n 3.Registrar Venta \n 4.Mostrar Promedio de Ventas \n 5.Mostrar Productos con Stock 0 \n 6.Salir');
     if(optn==1){
        agregarATienda();
        console.log('Producto Agregado');
        callMenu();
     }
     else if(optn==2){
        cambiarStock();
        console.log('Stock cambiado');
        callMenu();
     }

     else if(optn==3){
        registrarVenta();
        console.log('Venta registrada');
        callMenu();
     }
     else if(optn==4){

        console.log('Como asi?');
        callMenu();
     }
     else if(optn==5){
        mostrarCero();
        callMenu();
     }
     else {
        console.log('Adios');
     }
}

function agregarATienda(){
    newcodigo = prompt('Ingrese el codigo: ');
    newdescripcion = prompt('La descripcion: ');
    newtipo = prompt('Ingrese el tipo: ');
    newcompra = prompt('Ingrese el precio de compra: ');
    newventa = prompt('Ingrese el precio de venta: ');
    newstock = prompt('Ingrese el stock: ');
    
    let nuevoProd = { 
    codigo: newcodigo,
    descripcion: newdescripcion,
    tipo: newtipo,
    compra: Number(newcompra),
    venta: Number(newventa),
    stock: Number(newstock)
          
        
    };
    LaJefecita.agregarProducto(nuevoProd);

}

function cambiarStock(){
    let contador = 1;
    let granCadena = 'De que producto desea cambiar su stock: \n';
    for(let e of LaJefecita.productos){
        granCadena = granCadena +contador + '. codigo: ' + e.codigo + ' descripcion: ' + e.descripcion + ' stock: ' + e.stock +'\n';
        contador +=1;
    }
    let opcion = prompt(granCadena);
    let cantidad = prompt('Cual sera el nuevo stock: ');

    LaJefecita.productos[opcion-1].stock = cantidad;
    

    
}

function registrarVenta(){
    let contador = 1;
    let granCadena = 'De que producto desea registrar venta: \n';
    for(let e of LaJefecita.productos){
        granCadena = granCadena +contador + '. codigo: ' + e.codigo + ' descripcion: ' + e.descripcion + ' stock: ' + e.stock +'\n';
        contador +=1;
    }
    let opcion = prompt(granCadena);

    LaJefecita.productos[opcion-1].stock -= 1;
}

function mostrarCero(){
    let contador = 1;
    let granCadena = 'Productos con stock iguales a 0. Ingrese cualquier valor para continuar: \n';
    for(let e of LaJefecita.productos){
        if(e.stock==0){
            granCadena = granCadena +contador + '. codigo: ' + e.codigo  + ' descripcion: ' + e.descripcion + ' tipo: ' + e.tipo + ' compra: ' + e.compra + ' venta: ' + e.venta+ ' stock: ' + e.stock +'\n';
            contador +=1;
        }
    }
    prompt(granCadena);
}


function iniciarTienda(){
    
    callMenu();
    
}