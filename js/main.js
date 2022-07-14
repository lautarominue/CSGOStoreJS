class Cajitas {
    constructor (imagen, descripcion, precio, cantidad, id) {
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
        this.id = id;
    }
}

class Keys {
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
    "CSGO Case 1", 600, 0, 7),
]

const listKeys = [
    new Keys ("https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUlrBpNQ0LvROW-0vDYVkRLKQVFsb_rcgNhivDMcGwTu4nix9HalKelZeuIz28BvcYiju2SptysjlKw_BA4ZXezetG2F82ptg/360fx360f",
    "Key Bravo", 100, 0, 8),
    new Keys ("https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUxuxpJSXPbQv2S1MDeXkh6LBBOievrLVY2i6ebKDsbv47hw4TTlaSsZeKIxztQu8B03L2Y8Imh2Aftrhc-Z3ezetFDsuzS1g/360fx360f",
    "Key Invernal", 90, 0, 9),
    new Keys ("https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUxuxpJSXPbQv2S1MDeXkh6LBBOiejrL1Zi0aaRd25E6IXgktTYxKWtZOKHzztSuJ11ibqQoYqi3FDg80c4NnezetGrA31LSA/360fx360f",
    "Key Phoenix", 80, 0, 10),
    new Keys ("https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUxuxpJSXPbQv2S1MDeXkh6LBBOiezrLVYygaCYdDlB79_mwdKIlq-tY-LUlzgB6sYm27-W8dvx0Vey_0ZrY3ezetEQGWlygA/360fx360f",
    "Key Chroma", 70, 0, 11),
    new Keys ("https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUxuxpJSXPbQv2S1MDeXkh6LBBOievwZVQ51qSfd2pButjnxdTbkaD2YbjTwD4BuZR32uzF9t3w0ALl-kRqN2jtZNjCOd6cueQ/360fx360f",
    "Key Gloves", 50, 0, 12),
    new Keys ("https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUxuxpJSXPbQv2S1MDeXkh6LBBOiej0ZVM21aKfdGlB6Y3izdTSzqCmY-_TlT4Cu5B13riWoIn30FG2-xc6MTztZNjCZG4fUlY/360fx360f",
    "Key Danger", 55, 0, 13),
    new Keys ("https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXX7gNTPcUxuxpJSXPbQv2S1MDeXkh6LBBOiev2ZVBkgafOdW9Hu9jgwYXbxKP2Z7mCw28HucZ1j7mR9tvxjlfk-UY9ZW_tZNjClU49oyY/360fx360f",
    "Key CSGO 1", 200, 0, 14)
]

let section = document.getElementById("store");

function createStore(list, name) {
    list.forEach(data => {
        let contenedor = document.createElement("article");
    contenedor.classList.add("cajas__container__data")
        contenedor.innerHTML = `
                                    
                                        <div class="cajas__container__data__img">
                                        <img src="${data.imagen}" alt=""> 
                                        </div>
                                        <div class="cajas__container__data__info">
                                        <h2>${data.descripcion} $${data.precio}</h2>
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

createStore(listaCajitas, "InventarioCajas");
createStore(listKeys, "InventarioLlaves");
createLocal(listaCajitas, "InventarioCajas");
createLocal(listKeys, "InventarioLlaves");

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
            if ( name == "InventarioCajas" ) {
                swal("Felicitaciones!", "Compraste una caja", "success");
            }else {
                swal("Felicitaciones!", "Compraste una llave", "success");
            }            
        }
    });
    
}
