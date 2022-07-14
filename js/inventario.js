let section = document.getElementById("inventory");
let carrito = JSON.parse(localStorage.getItem("InventarioCajas"));
let llave = JSON.parse(localStorage.getItem("InventarioLlaves"))
console.log(carrito);
console.log(llave);

function start() {
    carrito.forEach((element) => {
        if ( element.cantidad > 0 ) {
            createInventory(element);
        }
    });
    
    llave.forEach(element => {
        if ( element.cantidad > 0 ) {
            createInventory(element);
        }
    });
}

start();

function createInventory(caja) {
    let contenedor = document.createElement("article")
    contenedor.classList.add("cajas__container__data")
    contenedor.innerHTML = `<div class="cajas__container__data__img">
                                <img src="${caja.imagen}" alt="">
                            </div>
                            <div class="cajas__container__data__info">
                                <h2>${caja.descripcion}</h2>
                                <div>Cantidad : ${caja.cantidad}</div>
                                <div class="inv__button">
                                    <button id="btn-sell-box-${caja.id}">Sell</button>
                                    <button  id="btn-open-box-${caja.id}">Open</button>
                                    
                                </div>    
                            </div>`;
        section.appendChild(contenedor);
        let boton = document.getElementById(`btn-open-box-${caja.id}`);
        boton.onclick = () => {
            openBox(caja);
        }
        let botonSell = document.getElementById(`btn-sell-box-${caja.id}`);
        botonSell.onclick = () => {
            sellBox(caja)
        }
                     
  
}

function openBox(caja) {
    let keyId = caja.id + 7;
    let key = 0;
    llave.forEach(element => {
        if ( element.id == keyId ) {
            key = element;

        }
    });
    if ( key.cantidad > 0 && caja.cantidad > 0 ) {
        swal("Felicitaciones!", "Abriste una caja", "success");
        key.cantidad -= 1;
        caja.cantidad -= 1;
        localStorage.setItem("InventarioLlaves", JSON.stringify(llave))
        localStorage.setItem("InventarioCajas", JSON.stringify(carrito))
        section.innerHTML = "";
        start();


        
    }
    
}

function sellBox(caja) {
    console.log(caja)
    
    swal({
        title: "¿Estas seguro?",
        text: "Una vez vendido, no podras recuperarlo",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Tu articulo se vendio con exito", {
            icon: "success",
          });
            caja.cantidad -= 1;
            localStorage.setItem("InventarioLlaves", JSON.stringify(llave))
            localStorage.setItem("InventarioCajas", JSON.stringify(carrito))
            section.innerHTML = "";
            start();
        }
      });
}

