



import { getData } from "./getData.js";

export const mostrarProductos = async () => {
    const contenedorProductos = document.getElementById("store");
    const productos = await getData();

    productos.forEach(producto => {
        const div = document.createElement('article');
        div.classList.add('cajas__container__data');
        div.innerHTML += `<div class="cajas__container__data__img">
                            <img src="${producto.imagen}" class="cajas__container__data__img__coleccion" alt=""> 
                          </div>
                          <div class="cajas__container__data__info">
                            <h2>${producto.description}</h2>
                          </div>
                          
        
        
        
        
                        `
        contenedorProductos.appendChild(div);
                 
    }

    )
}



