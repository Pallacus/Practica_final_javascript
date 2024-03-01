const formNuevaTarea = document.querySelector('#formNuevaTarea');

function crearTarea(nuevaTarea, prioridad) {
    // añadir al array de tareas
}

function capturarTarea(event) {
    event.preventDefault();
    let nuevaTarea = event.target.nuevaTarea.value;
    let prioridad = event.target.prioridad.value;
    if (nuevaTarea === "" || prioridad === "") {
        alert('Deben rellenarse ambos campos');
    } else {
        crearTarea(nuevaTarea, prioridad);
    }
}

formNuevaTarea.addEventListener('submit', capturarTarea);   