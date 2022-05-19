const dominioAPI = "http://localhost:5000/combustibles";

function getLista() {
    fetch(dominioAPI)
        .then(result => result.json())
        .then(data => {
            let content = document.querySelector('#contenido');
            content.innerHTML = "";

            data.forEach( (combustible, index)=>{
                content.innerHTML += `
                    <tr>
                        <th scope="row">${(index+1)}</th>
                        <td>${combustible.nombre}</td>
                        <td>${combustible.precio}</td>
                        <td>${combustible.preciou}</td>
                        <td>${combustible.stock}</td>
                        <td>
                            <span data-toggle="modal" data-target="#modal-edicion">
                                <button onclick="editarCurso('${combustible._id}')" class="btn btn-dark btn-sm" role="button" title="Editar"><i class="fas fa-pencil-alt"></i></button>
                            </span>
                                <button onclick="eliminarCurso('${combustible._id}')" class="btn btn-dark btn-sm" title="Eliminar"><i class="fas fa-trash" aria-hidden="true"></i></button>
                        </td>
                    </tr>
                    `;
            });
        });
}

function insertarCurso() {
    let cursoData = {
        "nombre": document.querySelector("#nombre").value,
        "precio": document.querySelector("#precio").value,
        "preciou": document.querySelector("#preciou").value,
        "stock": document.querySelector("#stock").value,
    };

    fetch(dominioAPI, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cursoData)
    })
        .then(response => {
            response.json();
            getLista();
        })
        .then(response => console.log(response))
        .catch(error => error);

}

function modificaCurso(id) {
    // alert(id);
    let cursoData = {
        "_id": document.querySelector("#id").value,
        "nombre": document.querySelector("#nombre").value,
        "precio": document.querySelector("#precio").value,
        "preciou": document.querySelector("#preciou").value,
        "stock": document.querySelector("#stock").value,
    };
    console.log("Datos a modificar", cursoData);

    fetch(`${dominioAPI}/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cursoData)
    })
        .then(response => {
            alert("Combustible modificado");
            response.json();
            getLista();
        })
        .catch(error => {
            console.log(error);
        });

}

function editarCurso(id) {
    fetch(`${dominioAPI}/${id}`, { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            document.querySelector("#id").value = data._id;
            document.querySelector("#nombre").value = data.nombre;
            document.querySelector("#precio").value = data.precio;
            document.querySelector("#preciou").value = data.preciou;
            document.querySelector("#stock").value = data.stock;
            myModal.show();
        })
        .catch(error => {
            console.log(error);
        });
}

function eliminarCurso(id) {
    fetch("http://localhost:5000/combustibles/" + id, { method: 'DELETE' })
        .then(response => {
            getLista();
            alert("Combustible eliminado con éxito");
        })
        .then(response => console.log(response))
        .catch(error => error);
}

function guardarCurso() {
    const id = document.querySelector("#id").value;
    if (id == "")
        insertarCurso();
    else
        modificaCurso(id);

    myModal.hide();
}

function nuevoCurso() {
    document.querySelector("#id").value = "";
    document.querySelector("#form-data-curso").reset();
    myModal.show();
}