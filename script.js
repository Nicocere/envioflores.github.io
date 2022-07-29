import{stockProductos} from './datos/data.js'

//ARRAY CARRITO VACIO

let carrito = []

JSON.stringify(stockProductos)

//inicio del DOM cuando se actualiza la pagina, queda guardado el carrito actualizar
document.addEventListener('DOMContentLoaded', () => {

// FETCH

   fetch('datos/data.js')
   .then( (resp) => resp.text())
   .then( (data) => {      

       if (localStorage.getItem('carrito')){
           carrito = JSON.parse(localStorage.getItem('carrito'))
           actualizarCarrito()
        }
        //Funcion que carga los productos, le paso param array de productos
        loadProducts(stockProductos)
    })
})


//CONSTANTES  del carrito

const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
let precioTotal = document.getElementById('preciototal')


//Variable  DEL MAIN CONTENEDOR PRODUCTOS 
let contenedorProducto = document.getElementById("productos");
const contenedorCarrito = document.getElementById('carrito-contenedor')


//CONSTANTES PARA ABRIR Y CERRAR CARRITO
const comprar = document.getElementsByClassName('comprar')[0]
const botonAbrir = document.getElementById('boton-abrircarrito')
const botonCerrar = document.getElementById('carritoCerrar')
const carritoDeCompra = document.getElementsByClassName('carritodecompra')[0]


botonAbrir.addEventListener('click', ()=>{
    comprar.classList.toggle('comprar-active')
})
botonCerrar.addEventListener('click', ()=>{
    comprar.classList.toggle('comprar-active')
})

botonVaciar.addEventListener('click', () => {
   
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Estas seguro de que queres vaciar el Carrito?',
        text: "Eliminaras todos los productos!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '  Vaciar carrito!',
        cancelButtonText: 'No, cancelar!  ',
        reverseButtons: true,
        width: 600,
      }).then((result) => {
        if (result.isConfirmed) {
           
            
            swalWithBootstrapButtons.fire(
                'Carrito Vaciado!',
                'Eliminaste todos los productos del carrito',
                'success'
                )
                carrito.length = 0
                actualizarCarrito()
        } else if (
       
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado!',
            'Tu Carrito sigue intacto:)',
            'error'
          )
        }
      })  
})

comprar.addEventListener('click', (event) =>{
    comprar.classList.toggle('comprar-active')

})
carritoDeCompra.addEventListener('click', (event) => {
    event.stopPropagation() 
})


        
        //DECLARACION DE LA FUNCION LOADPRODCUT QUE TIENE EL FOREACHFOREACH QUE LEE EL ARRAY QUE RECIBE POR PARAMETRO
        
        let loadProducts = (arrayData) => {
            


                

                contenedorProducto.innerHTML="" 

        arrayData.forEach(producto => {
            
            const div = document.createElement('div')
            div.classList.add('product-item')
        div.innerHTML = `
        <img src=${producto.img} alt="">
        <h4 class="tituloProducto">${producto.nombre}</h4>
        
        <h6 class="elijaTamaño">Elija un Tamaño</h6>
        
        <select  id="select${producto.id}" class="opcionTam"  > 

<option value="${producto.opciones[0].tamaño}">${producto.opciones[0].tamaño}</option>
<option value="${producto.opciones[1].tamaño}">${producto.opciones[1].tamaño}</option>
<option value="${producto.opciones[2].tamaño}">${producto.opciones[2].tamaño}</option>
</select>    

<p id="precioProd${producto.id}" class="precioProd"> </p>

<button id="agregar${producto.id}" class="button-add" onclick="agregar()" >Agregar producto <i class='fas fa-shopping-cart'></i></button>
        
<div id="btn-prod">    
        
</div>

`
contenedorProducto.appendChild(div)

const item2 = stockProductos.find((prod) => prod.id === producto.id)

let mostrarPrecio = document.getElementById(`precioProd${producto.id}`);
mostrarPrecio.innerHTML = `Precio: $ ${producto.opciones[0].precio}`


// Evento que escucha el cambio de producto 
let selectTag = document.getElementById(`select${producto.id}`)
selectTag.addEventListener("change", function(){
    
    
    //Opcion ya predeterminada en la opcion
    let optionSelect = document.getElementById(`select${producto.id}`).value
    
    // obtengo el precio de la opcion seleccionada haciendo un filter en el array opciones
    let precio = item2.opciones.filter(obj => obj.tamaño == optionSelect)[0].precio
    
    // creo la propiedad opcion seleccionada // el valor del tamaño (12, standar, deluxe, etc)
    item2.selectValue = optionSelect; 
    
    // creo la propiedad precio seleccionado
    producto.precioSeleccionado = precio
    
    //Muestro el precio del producto
    mostrarPrecio.innerHTML = `Precio: $ ${producto.precioSeleccionado}`
    
})


//Buscador de productos
let buscador = document.getElementById('buscarProducto')

buscador.addEventListener('keyup', e =>{
    
    if(e.target.matches('#buscarProducto')){
        
        document.querySelectorAll('.product-item').forEach(prodBuscado => {
            
            prodBuscado.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?prodBuscado.classList.remove('buscadorFiltrado')
            :prodBuscado.classList.add('buscadorFiltrado')
        })
    }
})



//BOTONES ACCIONES
const botonesProducto = document.getElementById ('btn-prod')
let agregar = document.getElementById(`agregar${producto.id}`)


//BOTON AGREGAR AL CARRITO
agregar.onclick = () => {
    
    Swal.fire({
        title: 'Agregaste un Producto!',
        text: `${producto.nombre}`,
        position: 'center',
        icon: 'success',
        iconColor: 'rgb(216, 8, 216)',
        showConfirmButton: false,
        timer: 1500,
        width: 505,
        
    })
    
    
    agregarAlCarrito(producto.id)
    actualizarCarrito()
}

});

//fin cierre load product
}



//AGREGAR PROD. AL CARRITO

        let agregarAlCarrito = (prodId) => {
            
        //constante si existe ya el item en el carrito
            const existe = carrito.some (prod => prod.id === prodId) 

            const item = stockProductos.find((prod) => prod.id === prodId)
            
            //Selecciono la opcion que eligio el usuario
            let opcionSeleccionada = document.getElementById(`select${item.id}`).value 

            
            // obtengo el precio de la opcion seleccionada haciendo un filter en el array opciones
            let precio = item.opciones.filter(obj => obj.tamaño == opcionSeleccionada)[0].precio

            
    // creo la propiedad opcion seleccionada
    item.selectValue = opcionSeleccionada;
    // creo la propiedad precio seleccionado
    item.precioSeleccionado = precio
  
    if (existe){ 
        const prod = carrito.map (prod => { 

            if (prod.id === prodId){
                prod.stock++
                // sumo los precios correspondientes de los tamaños seleccionados
                item.sumaPrecioProductos = item.sumaPrecioProductos+item.precioSeleccionado
            }
        })
    }  
    else { 
        const item = stockProductos.find((prod) => prod.id === prodId)
        item.sumaPrecioProductos = precio
        carrito.push(item)
    }
   
    actualizarCarrito() 
}

//ELIMINAR OBJETOS DE CARRITO

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
   
    const indice = carrito.indexOf(item)
    
    carrito.splice(indice, 1)
    actualizarCarrito()
    
}

//FOREACH DEL CARRITO
 
let actualizarCarrito = () => {
    
    contenedorCarrito.innerHTML ="" 


 
    
    carrito.forEach((prod) => {
       
            
     if (prod.producto) {

            const div = document.createElement('div')
            div.className = ('productoEnCarrito')
            div.innerHTML = `
            <img src=${prod.img} alt="">
            <p id="nombre-producto">${prod.nombre}</p>
            <p>Tamaño: ${prod.selectValue}</p>
            <p>Precio : $${prod.sumaPrecioProductos}</p>
            <p>stock: <span id="stock"> ${prod.stock}</span></p>
            
            `
    
            contenedorCarrito.appendChild(div)
        }


        localStorage.setItem('carrito', JSON.stringify(carrito))
        
    })

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.sumaPrecioProductos, 0)

    if(carrito == 0){
        localStorage.removeItem('carrito', JSON.stringify(carrito))
    }
    
};


//FINALIZAR COMPRA 

    //variables fuera de los eventos


let finalizarCompra = document.getElementById('finalizarcompra') 
 
let sectionEntrega = document.getElementById('entrega')


//CAMBIO DE PANTALLA CUANDO TOCO BOTON FINALIZAR COMPRA

finalizarCompra.addEventListener('click',(event) =>{
    
    contenedorProducto.innerHTML = ""


        carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.classList.add('productoSeleccionado')
        div.innerHTML = `
            
        <img src=${prod.img} alt="">
        <h5 class="tituloProducto"> ${prod.nombre} </h5>
        <p class="descripcion">${prod.descr}</p>
        <p class="descripcion">Veces que lo pidió: ${prod.stock}</p>
        <p class="precioProducto">Precio: $${prod.sumaPrecioProductos}</p>

     `

    contenedorProducto.appendChild(div)


})


// DATOS DE ENTREGA     

const entrega = document.createElement('div')
document.getElementById('entrega').classList.add('entrega-active')
  sectionEntrega.innerHTML= `

  <h2>Datos de Entrega</h2>
      
  <form id="formulario-envio">

  <label for="nombreRecibe">First name:</label>
  <input type="text" id="nombreRecibe" name="nRecibe" placeholder="Nombre de quien recibe" >
  <br>

  <label for="apellidoRecibe">Last name:</label>
  <input type="text" id="apellidoRecibe" name="arecibe" placeholder="Apellido de quien recibe">
  <br>

  <label for="calleRecibe">Direccion entrega: </label>
  <input type="text" id="calleRecibe" name="crecibe" placeholder="Direccion de entrega">
    <br>

  <label for="telefonoRecibe">Telefono de quien RECIBE </label>
  <input type="text" id="telefonoRecibe" name="trecibe" placeholder="Telefono de quien recibe">
  <br>
  <br>

  <h3> Datos de Tarjeta de Credito</h3>

  <label for="nombreTarjeta">Nombre Titular de la Tarjeta </label>
  <input type="text" id="nombreTarjeta" name="nombreTarjeta" placeholder="Titular Tarjeta">
  <br>

  <label for="numeroTarjeta"> Numero Tarjeta </label>
  <input type="text" id="numeroTarjeta" name="numeroTarjeta" placeholder="Numero Tarjeta">
  <br>
  <br>

  <button id="botonEnviarDatos"> Enviar Datos </button>
  

  <br>
  
  </form>


  <h3 id="respuesta" > </h3>
`

//constante formulario datos de entrega
const formulario = document.querySelector('#formulario-envio')

//Evento formualrio

formulario.addEventListener('submit', validarFormulario)


//funciones

function validarFormulario(e){
    e.preventDefault();
    const nombreRecibe = document.getElementById ('nombreRecibe').value
    const apellidoRecibe = document.getElementById ('apellidoRecibe').value
    const calleRecibe = document.getElementById ('calleRecibe').value
    const telefonoRecibe = document.getElementById ('telefonoRecibe').value
    const nombreTarjeta = document.getElementById ('nombreTarjeta').value
    const numeroTarjeta = document.getElementById ('numeroTarjeta').value


    //pintar los datos obtenidos en la respuesta
    const respuesta = document.getElementById('respuesta');

    //condicional cuando no se escribio correctamente el formulario.

    let warning = ""
    let advertencia = true
    let datosValidos = true
    

    if(nombreRecibe.length <2){
        warning += `El nombre no es valido <br>`
        advertencia = true
        datosValidos = false
        
    }
    if(apellidoRecibe.length <2){
        warning += `El apellido no es valido <br>`
        advertencia = true
        datosValidos = false
    }    
    if(calleRecibe.length <2){
        warning += `La calle que ingresó no es valida <br>`
        advertencia = true
        datosValidos = false
    }    
    if(telefonoRecibe.length <2){
        warning += `El telefono no es valido <br>`
        advertencia = true
        datosValidos = false
    }    
    if(nombreTarjeta.length <2){
        warning += `El nombre del titular de la tarjeta no es valido <br>`
        advertencia = true
        datosValidos = false
    }    
    if(numeroTarjeta.length <2){
        warning += `El numero de la tarjeta no es valido <br>`
        advertencia = true
        datosValidos = false
    }

    if(advertencia){
        respuesta.innerHTML = warning
    } 
    
    if(datosValidos){  
    
    datosValidos = true

    respuesta.innerText = `¡¡Muchas gracias, los datos fueron enviados!!
    Los datos que ingresaste fueron:

    La persona que lo recibe es: ${nombreRecibe} ${apellidoRecibe}
    Lo enviamos a la calle: ${calleRecibe},
    Su telefono es: ${telefonoRecibe},
    
    Tu nombre y numero de tarjeta es: 
    Nombre: ${nombreTarjeta}
    N°: ${numeroTarjeta}

 
   `
}

}


sectionEntrega.appendChild(entrega)



})
//A partir de aca no hay mas nada




