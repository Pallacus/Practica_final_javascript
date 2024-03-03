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

function pintarTarea(tarea, domElement) {
    const newArticle = document.createElement('article');
    newArticle.classList.add('flex3', tarea.prioridad);
    const p1 = document.createElement('p');
    p1.classList.add('ordinal');
    p1.textContent = ('#' + tarea.id);
    const p2 = document.createElement('p');
    p2.id = `${tarea.titulo}`;
    p2.textContent = tarea.titulo;
    const button = document.createElement('button');
    button.classList.add('rounded', 'btnQuitar');
    button.onclick = `terminarTarea(${tarea.id})`;
    button.value = 'Completada';
    button.textContent = 'Completada';

    newArticle.append(p1, p2, button);

    domElement.appendChild(newArticle);
}

function pintarTareas(lista, dom) {

    dom.innerHTML = [];
    if (lista === "") {
        dom.innerHTML = `<h2>No hay tareas que mostrar</h2>`
    } else {
        lista.forEach(tarea => pintarTarea(tarea, dom));
    }
}

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

pintarTareas(listaTareas, domTareas);