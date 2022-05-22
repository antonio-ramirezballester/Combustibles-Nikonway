const dominioAPI = "http://localhost:5000/combustibles";
const combustiblesTag = document.querySelector('#combustible');
const searchTextTag = document.querySelector('#buscador');
const submitButtonTag = document.querySelector('#submit-buscador');
const ordenarTag = document.querySelector('#ordenar');
const carritoCombustiblesTag = document.querySelector('#carritoCombustibles');
let combustiblesJSON = [];
let combustiblesFavoritos = [];
let carrito = [];

window.onload = async () => {
    const respuesta = await fetch(dominioAPI);
    combustiblesJSON = await respuesta.json();
    pintarCombustibles(combustiblesJSON);
    marcarFavoritos();
    cargarFavoritos();
    seleccionarCombustible();

    ordenarTag.addEventListener("change", function(){
        ordenarCombustibles();
        cargarFavoritos();
        marcarFavoritos();
    });

    submitButtonTag.addEventListener("click", function (event) {
        event.preventDefault();
        filtrarCombustible();
    });
};

const pintarCombustibles = (combustibles) => {
    combustiblesTag.innerHTML = "";
    combustibles.forEach(combustible => {
        let template = `    
            <div class="card">
                <div class="favorito">
                    <i class="fas fa-heart" data-id="${combustible._id}"></i>
                </div>
                <h1>${combustible.nombre}</h1>
                <img src="./img/${combustible.img}" alt="">
                <p>DESCRIPCIÓN DEL COMBUSTIBLE</p>
                <p>Precio: ${combustible.preciou}</p>
                <p>Stock: ${combustible.stock}</p>
                <p><a href="#" class="btnCombustibles agregar-carrito" data-id="${combustible._id}">Añadir al carrito &raquo;</a></p>
            </div>`;
        combustiblesTag.innerHTML += template;  
    });
};

function filtrarCombustible() {
    const text = searchTextTag.value;
    let nuevaLista = combustiblesJSON.filter(combustible => {
        return combustible.nombre.toUpperCase().includes(text.toUpperCase()) // ||
        // combustible.categoria.toUpperCase().includes(text.toUpperCase())
        ;
    });
    pintarCombustibles(nuevaLista);
}

const cambiarVista = (number) =>{
    if (number===4){
        combustiblesTag.classList.replace("cards-6", "cards-4");
    } else if (number===6){
        combustiblesTag.classList.replace("cards-4", "cards-6");
    }
};

const ordenarCombustibles = () => {
    let index = ordenarTag.selectedIndex;
    let option = ordenarTag.options[index];
    let nuevaLista = [];
    if (option.value === 'P') {
        nuevaLista = combustiblesJSON.sort((a, b) => a.precio - b.precio);
    } else if (option.value === 'D') {
        nuevaLista = combustiblesJSON.sort((a, b) => a.precio - b.precio);
        nuevaLista.reverse();
    } else if (option.value === 'N') {
        nuevaLista = combustiblesJSON.sort((a, b) => {
          if (a.nombre > b.nombre) return 1;
          else if (a.nombre < b.nombre) return -1;
          else return 0;
        });
    } else if (option.value === 'M') {
        nuevaLista = combustiblesJSON.sort((a, b) => {
          if (a.nombre > b.nombre) return -1;
          else if (a.nombre < b.nombre) return 1;
          else return 0;
        });
    } else {
        return;
    }
    pintarCombustibles(nuevaLista);
};

const marcarFavoritos = ()=>{
    const listaFavoritos = document.querySelectorAll(".fa-heart");
    listaFavoritos.forEach(fav => {
        fav.addEventListener("click", function(){
            this.classList.toggle("on");
            guardarFavoritos(this);
        });
    });
};

const guardarFavoritos =(favObj)=>{
    let idFavorito = favObj.dataset.id;
    if(favObj.classList.contains("on")){
        // Añade a favoritos
        combustiblesFavoritos.push({"id":idFavorito});
    }else{
        // Borrar de favoritos
        combustiblesFavoritos = combustiblesFavoritos.filter(combustible=>combustible.id != idFavorito);
    }
    // Guardar favoritos
    localStorage.setItem("combustiblesFavoritos", JSON.stringify(combustiblesFavoritos));
};

const cargarFavoritos =()=>{
    if (localStorage.getItem("combustiblesFavoritos")){
       combustiblesFavoritos = JSON.parse(localStorage.getItem("combustiblesFavoritos"));
    }else{
       combustiblesFavoritos=[];
    }
  
   combustiblesFavoritos.forEach(fav => {
       document.querySelector(`.fa-heart[data-id="${fav.id}"]`).classList.add("on");
   });
};

function seleccionarCombustible() {
    const listButtons = document.querySelectorAll(".agregar-carrito");
    listButtons.forEach(button => {
        button.addEventListener("click", function () {
            const idCombustible = this.dataset.id;
            const combustible = combustiblesJSON.find(combustible => combustible._id == idCombustible);
            
            añadirCombustibleCarrito(combustible);
            calculateTotal();
        });
    });
}

function añadirCombustibleCarrito(combustible){
    carrito.push(combustible);
    carritoCombustiblesTag.innerHTML ="";
    carrito.forEach(combustible => {
        carritoCombustiblesTag.innerHTML += `
        <tr>
            <td>${combustible.nombre}</td>
            <td>${combustible.precio}€</td>
            <td>1</td>
            <td>
                <a href="#" class="borrar-combustible" data-id="${combustible._id}" onclick="borrarCombustible(${combustible._id})">X</a>
            </td>
        </tr>
        `;
    });
}

function calculateTotal(){
    let total = carrito.reduce((total, Combustible) => total + Combustible.precio, 0);
    carritoCombustiblesTag.innerHTML += `
        <tr>
            <td colspan="3">Total</td>
            <td>${total} €</td>
        </tr>
    `;
}