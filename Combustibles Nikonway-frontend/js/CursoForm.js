

const dominioAPI = "http://localhost:5000/combustibles";

function getLista() {
    fetch(dominioAPI)
        .then(result => result.json())
        .then(data => {
            let content = document.querySelector('#contenido');
            content.innerHTML = "";

            data.forEach( (curso, index)=>{
                content.innerHTML += `
                    <tr>
                        <th scope="row">${(index+1)}</th>
                        <td>${curso.nombre}</td>
                        <td>${curso.descripcion}</td>
                        <td>
                            <span data-toggle="modal" data-target="#modal-edicion">
                                <button onclick="editarCurso('${curso._id}')" class="btn btn-success btn-sm" role="button" title="Editar"><i class="fas fa-pencil-alt"></i></button>
                            </span>
                            <button onclick="eliminarCurso('${curso._id}')" class="btn btn-success btn-sm" title="Eliminar"><i class="fas fa-trash" aria-hidden="true"></i></button>
                        </td>
                    </tr>
                    `;
            });
        });
}

function insertarCurso() {
    let cursoData = {
        "nombre": document.querySelector("#nombre").value,
        "descripcion": document.querySelector("#descripcion").value,
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

function modificaCurso() {
    let cursoData = {
        id: document.querySelector("#id").value,
        nombre: document.querySelector("#nombre").value,
        descripcion: document.querySelector("#descripcion").value,
    };
    console.log("Datos a modificar", cursoData);

    fetch(dominioAPI, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cursoData)
    })
        .then(response => {
            alert("Curso modificado");
            response.json();
            getLista();
        })
        .catch(error => {
            console.log(error);
        });

}

function editarCurso(id) {
    // Recuperamos datos del curso y configuramos los datos en el formulario
    fetch(`${dominioAPI}/${id}`, { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            document.querySelector("#id").value = data._id;
            document.querySelector("#nombre").value = data.nombre;
            document.querySelector("#descripcion").value = data.descripcion;
            myModal.show();
        })
        .catch(error => {
            console.log(error);
        });
}

function eliminarCurso(id) {
    fetch("http://localhost:5000/cursos/" + id, { method: 'DELETE' })
        .then(response => {
            //response.json();
            getLista();
            alert("Curso eliminado con éxito");
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