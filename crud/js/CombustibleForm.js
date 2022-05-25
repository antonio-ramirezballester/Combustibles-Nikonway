const dominioAPI = "http://localhost:5000/combustibles";

function getLista(){
    fetch(dominioAPI)
    .then(result => result.json())
    .then(data => {
        let content = document.querySelector('#contenido');
        content.innerHTML = "";
        data.forEach( (combustible)=>{
            content.innerHTML += `
                <tr>
                    <th scope="row">${combustible.id}</th>
                    <td>${combustible.nombre}</td>
                    <td>${combustible.descripcion}</td>
                    <td>${combustible.categoria}</td>
                    <td>${combustible.precio}</td>
                    <td>${combustible.preciou}</td>
                    <td>${combustible.stock}</td>
                    <td>${combustible.img}</td>
                    <td>
                        <span data-toggle="modal" data-target="#modal-edicion">
                            <button onclick="editarCombustible('${combustible._id}')" class="btn btn-dark btn-sm" role="button" title="Editar"><i class="fas fa-pencil-alt"></i></button>
                        </span>
                            <button onclick="eliminarCombustible('${combustible._id}')" class="btn btn-dark btn-sm" title="Eliminar"><i class="fas fa-trash" aria-hidden="true"></i></button>
                    </td>
                </tr>
            `;
        });
    });
}

function insertarCombustible() {
    let combustibleData = {
        "id": document.querySelector("#id").value,
        "nombre": document.querySelector("#nombre").value,
        "descripcion": document.querySelector("#descripcion").value,
        "categoria": document.querySelector("#categoria").value,
        "precio": document.querySelector("#precio").value,
        "preciou": document.querySelector("#preciou").value,
        "stock": document.querySelector("#stock").value,
        "img": document.querySelector("#img").value,
    };

    fetch(dominioAPI, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(combustibleData)
    })
        .then(response => {
            response.json();
            getLista();
        })
        .then(response => console.log(response))
        .catch(error => error);
}

function modificaCombustible(id) {
    let combustibleData = {
        "_id": document.querySelector("#_id").value,
        "id": document.querySelector("#id").value,
        "nombre": document.querySelector("#nombre").value,
        "descripcion": document.querySelector("#descripcion").value,
        "categoria": document.querySelector("#categoria").value,
        "precio": document.querySelector("#precio").value,
        "preciou": document.querySelector("#preciou").value,
        "stock": document.querySelector("#stock").value,
        "img": document.querySelector("#img").value,
    };

    fetch(`${dominioAPI}/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(combustibleData)
    })
        .then(response => {
            response.json();
            getLista();
        })
        .catch(error => {
            console.log(error);
        });
}

function editarCombustible(id) {
    fetch(`${dominioAPI}/${id}`, { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            document.querySelector("#_id").value = data._id;
            document.querySelector("#id").value = data.id;
            document.querySelector("#nombre").value = data.nombre;
            document.querySelector("#descripcion").value = data.descripcion;
            document.querySelector("#categoria").value = data.categoria;
            document.querySelector("#precio").value = data.precio;
            document.querySelector("#preciou").value = data.preciou;
            document.querySelector("#stock").value = data.stock;
            document.querySelector("#img").value = data.img;
            myModal.show();
        })
        .catch(error => {
            console.log(error);
        });
}

function eliminarCombustible(id) {
    fetch("http://localhost:5000/combustibles/" + id, { method: 'DELETE' })
        .then(response => {
            getLista();
        })
        .then(response => console.log(response))
        .catch(error => error);
}

function guardarCombustible() {
    const id = document.querySelector("#_id").value;
    if (id == "")
        insertarCombustible();
    else
        modificaCombustible(id);
    myModal.hide();
}

function nuevoCombustible() {
    document.querySelector("#_id").value = "";
    document.querySelector("#form-data-combustible").reset();
    myModal.show();
}