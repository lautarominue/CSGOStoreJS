let section = document.getElementById("inventory");
let inventario = JSON.parse(localStorage.getItem("carrito"));
console.log(inventario);

inventario.forEach((element, index) => {
    createInventory(element, index);
});

function createInventory(caja, indice) {
    let contenedor = document.createElement("article")
    contenedor.classList.add("store__container")
    contenedor.innerHTML = `<div>
                                <img src="${caja.url}" alt="">
                            </div>
                            <div>
                                <h2>${caja.nombre}</h2>
                                <button id="btn-open-box-${caja.id}">Open</button>
                            </div>`;
        document.body.appendChild(contenedor);
        let boton = document.getElementById(`btn-open-box-${caja.id}`);  
        // boton.onclick = () => {
        //     // openBox(caja); 
        //     deleteBox(indice)
        // }                 
  
}


