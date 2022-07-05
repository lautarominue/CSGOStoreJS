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
    contenedor.classList.add("store__container")
    contenedor.innerHTML = `<div>
                                <img src="${caja.imagen}" alt="">
                            </div>
                            <div>
                                <h2>${caja.descripcion}</h2>
                                <div>Cantidad : ${caja.cantidad}</div>
                                <button id="btn-open-box-${caja.id}">Open</button>
                            </div>`;
        section.appendChild(contenedor);
        let boton = document.getElementById(`btn-open-box-${caja.id}`);
        boton.onclick = () => {
            openBox(caja);
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

