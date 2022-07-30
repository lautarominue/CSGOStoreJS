const API = "./js/data.json";
let section = document.getElementById("inventory");
let carrito = JSON.parse(localStorage.getItem("box"));
let llave = JSON.parse(localStorage.getItem("key"))
let items = JSON.parse(localStorage.getItem("items"))


function start() {
    carrito.forEach((element) => {
        if ( element.cantidad > 0 ) {
            createInventory(element);
            
        }
    });
    
    llave.forEach(element => {
        
        if ( element.cantidad > 0 ) {
            createInventory2(element);
        }
    });
    
}

start();

function start2() {
    items = JSON.parse(localStorage.getItem("items"))
    items.forEach(element => {
        if ( element.cantidad > 0 ) {
            createInventory3(element);
        }
    });
}

start2();

function createInventory(caja) {
    let contenedor = document.createElement("article")
    contenedor.classList.add("cajas__container__data")
    contenedor.innerHTML = `<div class="cajas__container__data__img">
                                <img src="${caja.image}" alt="">
                            </div>
                            <div class="cajas__container__data__info">
                                <h2>${caja.name}</h2>
                                <div>Cantidad : ${caja.cantidad}</div>
                                <div class="inv__button">
                                    <button id="btn-sell-box-${caja.id}">Sell</button>
                                    <button id="btn-open-box-${caja.id}">Open</button> 


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

function createInventory2(caja) {
    let contenedor = document.createElement("article")
    contenedor.classList.add("cajas__container__data")
    contenedor.innerHTML = `<div class="cajas__container__data__img">
                                <img src="${caja.image}" alt="">
                            </div>
                            <div class="cajas__container__data__info">
                                <h2>${caja.name}</h2>
                                <div>Cantidad : ${caja.cantidad}</div>
                                <div class="inv__button">
                                    <button id="btn-sell-box-${caja.id}">Sell</button>


                                </div>    
                            </div>`;
        section.appendChild(contenedor);
        let botonSell = document.getElementById(`btn-sell-box-${caja.id}`);
        botonSell.onclick = () => {
            sellBox(caja)
        }
}

function createInventory3(caja) {
    let contenedor = document.createElement("article")
    contenedor.classList.add("cajas__container__data")
    contenedor.innerHTML = `<div class="cajas__container__data__img">
                                <img src="${caja.image}" alt="">
                            </div>
                            <div class="cajas__container__data__info">
                                <h2>${caja.name}</h2>
                                <div>Cantidad : ${caja.cantidad}</div>
                                <div class="inv__button">
                                    <button id="btn-sell-box-${caja.id}">Sell</button>


                                </div>  
                                 
                            </div>`;
        section.appendChild(contenedor);
        let botonSell = document.getElementById(`btn-sell-box-${caja.id}`);
        botonSell.onclick = () => {
            sellBox(caja)
        }
}


// funcion para abrir caja
function openBox(caja) {
    let keyId = caja.id + 7;
    let key = 0;
    llave.forEach(element => {
        if ( element.id == keyId ) {
            key = element;

        }
    });
    if ( key.cantidad > 0 && caja.cantidad > 0 ) {
        prueba();
        swal("Felicitaciones!", "Abriste una caja", "success");
        key.cantidad -= 1;
        caja.cantidad -= 1;
        localStorage.setItem("box", JSON.stringify(carrito))
        localStorage.setItem("key", JSON.stringify(llave))

        section.innerHTML = "";
        start();


        
    }else {
        // alert para cuando se intenta abrir una caja sin llave de la misma
        swal("Cuidado", "No tienes una llave de la caja", "warning")
    }
    
}

function prueba() {
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
    randomNumber(data.items)    
    
        
    })
}

// al abrir una caja te da un item random de la misma
function randomNumber(data) {
    let number = Math.floor(Math.random() * (18 - 15)) + 15;
    data.forEach(element => {
        if ( element.id == number ) {
            saveCarrito(element)
        }
    });
}

function saveCarrito(data) {
    let item = JSON.parse(localStorage.getItem("items"));
    item.forEach(element => {
        if ( data.id == element.id ) {
            element.cantidad += 1;

            localStorage.setItem("items", JSON.stringify(item))

                        
        }
    });
    start2();
}



// funcion para vender items del inventario
function sellBox(caja) {
    
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
            localStorage.setItem("box", JSON.stringify(carrito))
            localStorage.setItem("key", JSON.stringify(llave))
            localStorage.setItem("items", JSON.stringify(items))
            section.innerHTML = "";
            start();
            start2();
        }
      });
}

