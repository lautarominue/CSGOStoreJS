let cajas = [
        { id:1, nombre: "Bravo case", precio: 300, url:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsXE1xNwVDv7WrFA5pnabNJGwSuN3gxtnawKOlMO6HzzhQucAm0uvFo4n2iw3h_UM-ZmilJNeLMlhpjfjxEoE/360fx360f" },
        { id:2, nombre: "Invernal case", precio: 180, url:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYu0aKfJz8a793gxNLfzvOkMunUwWgH7JIjj-qW8d7x2VXt_UBuMT3zIpjVLFEGDSGUSQ/360fx360f"},
        { id:3, nombre: "Phoenix case", precio: 170, url:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUuh6qZJmlD7tiyl4OIlaGhYuLTzjhVupJ12urH89ii3lHlqEdoMDr2I5jVLFFSv_J2Rg/360fx360f"},
        { id:4, nombre: "Chroma case", precio: 150, url:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFEuh_KQJTtEuI63xIXbxqOtauyClTMEsJV1jruS89T3iQKx_BBqa2j3JpjVLFH1xpp0EQ/360fx360f"},
        { id:5, nombre: "Gloves case", precio: 160, url:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFY1naTMdzwTtNrukteIkqT2MO_Uwz5Q6cYhibyXo4rw2ALsrkRoYjuncNCLMlhpEV4XDTk/360fx360f"},
        { id:6, nombre: "Danger case", precio: 80, url:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFUxnaPLJz5H74y1xtTcz6etNumIx29U6Zd3j7yQoYih3lG1-UJqY27xJIeLMlhpaD9Aclo/360fx360f"},
        { id:7, nombre: "case csgo 1", precio: 250, url:"https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsRVx4MwFo5_T3eAQ3i6DMIW0X7ojiwoHax6egMOKGxj4G68Nz3-jCp4itjFWx-ktqfSmtcwqVx6sT/360fx360f"},
];
    
let section = document.getElementById("store");
    
    
function createMenu() {
    for (const caja of cajas) {
        let contenedor = document.createElement("article");
        contenedor.classList.add("store__container")
        contenedor.innerHTML = `<div>
                                    <img src="${caja.url}" alt="">
                    
                                </div>
                                <div>
                                    <h2>${caja.nombre}</h2>
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
    };
}

createMenu();

function saveCarrito(box) {
    let inventario = JSON.parse(localStorage.getItem("carrito")) || [];
    inventario.push(box);
    localStorage.setItem("carrito",JSON.stringify(inventario))

    //alert
    swal("Felicitaciones!", "Compraste una caja", "success");
}
