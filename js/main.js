class Cajitas {
    constructor (imagen, descripcion, precio, cantidad, id) {
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
        this.id = id;
    }
}

const listaCajitas = [
    new Cajitas ("https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsXE1xNwVDv7WrFA5pnabNJGwSuN3gxtnawKOlMO6HzzhQucAm0uvFo4n2iw3h_UM-ZmilJNeLMlhpjfjxEoE/360fx360f",
    "Bravo Case", 500, 0, 1),
    new Cajitas ("https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYu0aKfJz8a793gxNLfzvOkMunUwWgH7JIjj-qW8d7x2VXt_UBuMT3zIpjVLFEGDSGUSQ/360fx360f",
    "Invernal Case", 400, 0, 2),
    new Cajitas ("https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUuh6qZJmlD7tiyl4OIlaGhYuLTzjhVupJ12urH89ii3lHlqEdoMDr2I5jVLFFSv_J2Rg/360fx360f",
    "Phoenix Case", 300, 0, 3),
    new Cajitas ("https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFEuh_KQJTtEuI63xIXbxqOtauyClTMEsJV1jruS89T3iQKx_BBqa2j3JpjVLFH1xpp0EQ/360fx360f",
    "Chroma Case", 100, 0, 4),
    new Cajitas ("https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFY1naTMdzwTtNrukteIkqT2MO_Uwz5Q6cYhibyXo4rw2ALsrkRoYjuncNCLMlhpEV4XDTk/360fx360f",
    "Gloves Case", 200, 0, 5),
    new Cajitas ("https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUxnaPLJz5H74y1xtTcz6etNumIx29U6Zd3j7yQoYih3lG1-UJqY27xJIeLMlhpaD9Aclo/360fx360f",
    "Danger Case", 70, 0 ,6),
    new Cajitas ("https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsRVx4MwFo5_T3eAQ3i6DMIW0X7ojiwoHax6egMOKGxj4G68Nz3-jCp4itjFWx-ktqfSmtcwqVx6sT/360fx360f",
    "CSGO Case 1", 600, 0, 7)
]

let section = document.getElementById("store");

function createStore() {
    listaCajitas.forEach(caja => {
        let contenedor = document.createElement("article");
    contenedor.classList.add("store__container")
    contenedor.innerHTML = `<div>
                                <img src="${caja.imagen}" alt="">
                
                            </div>
                            <div>
                                <h2>${caja.descripcion}</h2>
                                <ul>
                                    <li>
                                        skin
                                    </li>
                                    <li>
                                        skin
                                    </li>
                                    <li>
                                        skin
                                    </li>
                                    <li>
                                        skin
                                    </li>
                                    <li>
                                        skin
                                    </li>
                                </ul>
                            <button id="btn-box-${caja.id}">Buy</button>
                        </div>`;
    document.body.appendChild(contenedor);  
    let boton = document.getElementById(`btn-box-${caja.id}`);  
    boton.onclick = () => {
        saveCarrito(caja); 
    }                    
    });
}

createStore();


if ( !localStorage.getItem("inventario") ) {
    localStorage.setItem("inventario", JSON.stringify(listaCajitas))
}



function saveCarrito(box) {
    carrito.forEach(element => {
        if ( box.id == element.id ) {
            element.cantidad += 1;
            localStorage.setItem("inventario", JSON.stringify(carrito))
            //alert
            swal("Felicitaciones!", "Compraste una caja", "success");
        }
    });
}

let carrito = JSON.parse(localStorage.getItem("inventario"));