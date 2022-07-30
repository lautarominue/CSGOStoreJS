const API = "./js/data.json";
function fetchStore() {
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
        createStore(data)
        createLocal(data.box, "box")
        createLocal(data.key, "key")
        createLocal(data.items, "items")
        
    })
}
fetchStore();

let section = document.getElementById("store");

function createStore(data) {
    const {box, key, items} = data 
    ola(box, "box");
    ola(key, "key");
    
    
}
// Funcion para mostrar todos los productos
function ola(list, name) {
    list.forEach(data => {
        let contenedor = document.createElement("article");
    contenedor.classList.add("cajas__container__data")
        contenedor.innerHTML = `
                                    
                                        <div class="cajas__container__data__img">
                                        <img src="${data.image}" alt=""> 
                                        </div>
                                        <div class="cajas__container__data__info">
                                        <h2>${data.name} $${data.price}</h2>
                                        </div>
                                        <div class="cajas__container__data__button">
                                            <button id="btn-box-${data.id}">Buy</button>
                                        </div>
                                    
                                `;
    section.appendChild(contenedor);  
    let boton = document.getElementById(`btn-box-${data.id}`);  
    boton.onclick = () => {
        saveCarrito(data, name); 
    }                    
    });
}


function createLocal(data, name) {
    if ( !localStorage.getItem(name) ) {
        localStorage.setItem(name, JSON.stringify(data))
    }
    
}


function saveCarrito(data, name) {
    let carrito = JSON.parse(localStorage.getItem(name));
    carrito.forEach(element => {
        if ( data.id == element.id ) {
            element.cantidad += 1;

            localStorage.setItem(name, JSON.stringify(carrito))
            //alert
            if ( name == "box" ) {
                swal("Felicitaciones!", "Compraste una caja", "success");
                
            }else {
                
                swal("Felicitaciones!", "Compraste una llave", "success");
            }            
        }
    });
    
}
