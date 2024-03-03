//  listaTareas = [
const formNuevaTarea = document.querySelector('#formNuevaTarea');
const formFiltroNombre = document.querySelector('#filtroNombre');
const formFiltroPrioridad = document.querySelector('#filtroPrioridad');
const domTareas = document.querySelector('#tareas');

/*  <article class="flex3 urgente">
        <p class="ordinal">#1</p>
        <p id="nombreTarea">Nombre tarea 1</p>
        <button class="rounded btnQuitar" onclick="terminarTarea()" value="Completada">Completada</button>
    </article> */


function crearTarea(nuevaTarea, prioridad) {
    // esta tarea ya existe
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

function filtroNombre(event) {
    console.log(event.target.value);
}

formFiltroNombre.addEventListener('input', filtroNombre);

function filtroPrioridad(event) {
    if (event.target.value !== "") {
        console.log(event.target.value);
    } else {
        // printAllTasks
    }
}

formFiltroPrioridad.addEventListener('change', filtroPrioridad);

function terminarTarea(event) {
    // A ver como completamos esta...
    console.log(event);
}

