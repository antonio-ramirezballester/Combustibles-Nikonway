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
            <div class="card">
                <h1>${combustible.nombre}</h1>
                <p>${combustible.descripcion}</p>
                <p><a class="btncombustibles" href="${combustible.link}" role="button">Mirar precios &raquo;</a></p>
            </div>
        `;
    });
}