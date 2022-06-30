let section = document.getElementById("inventory");
let carrito = JSON.parse(localStorage.getItem("inventario"));
console.log(carrito);

carrito.forEach((element) => {
    if ( element.cantidad > 0 ) {
        createInventory(element);
    }
});

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
        document.body.appendChild(contenedor);
        let boton = document.getElementById(`btn-open-box-${caja.id}`);  
                     
  
}


