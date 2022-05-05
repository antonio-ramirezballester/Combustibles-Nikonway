const combustiblesTag = document.querySelector('#combustibles');

window.onload=init;

function init(){
    obtenerCombustibles();
}

function obtenerCombustibles(){
    fetch('./data/combustibles.json')
    .then(response => response.json())
    .then(data =>{
        mostrarCombustibles(data);
    });
}

function mostrarCombustibles(listaJSON){
    combustiblesTag.innerHTML="";
    listaJSON.forEach(combustible => {
        combustiblesTag.innerHTML+=`
            <div class="combustible">
                <h1>${combustible.nombre}</h1>
                <p>${combustible.descripcion}</p>
                <div class="leñas"></div>
                <div class="carbones"></div>
                <div class="liquidos"></div>
                <div class="gases"></div>
            </div>
        `;
    });
}