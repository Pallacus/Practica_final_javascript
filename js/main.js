//  listaTareas = [
const formNuevaTarea = document.querySelector('#formNuevaTarea');
const formFiltroNombre = document.querySelector('#filtroNombre');
const formFiltroPrioridad = document.querySelector('#filtroPrioridad');
const domTareas = document.querySelector('#tareas');

function pintarTarea(tarea, domElement) {
    let newArticle = "";
                // En el botón, dentro de cada artículo(tarea), se declara el evento que llamarà la función de eliminarTarea junto el id que la identifica.
    newArticle = `<article class="flex3 ${tarea.prioridad}">
    <p class="ordinal">#${tarea.id}</p>
    <p>${tarea.titulo}</p>
    <button class="rounded btnQuitar" onclick="terminarTarea(${tarea.id})" value="Completada">Completada</button></article>`;
    console.log(newArticle);

    domElement.innerHTML += newArticle;
}

function pintarTareas(lista, dom) {

    dom.innerHTML = [];
    if (lista.length === 0) {
        dom.innerHTML = `<h2>No hay tareas que mostrar</h2>`
    } else {
        lista.forEach(tarea => pintarTarea(tarea, dom));
    }
}

function crearTarea(lista, nuevoTitulo, prioridad) {
    let duplicada = false;
                        
    lista.forEach(tarea => (duplicada = (tarea.titulo === nuevoTitulo) ? true:false));  // Se comprueba que no haya una tarea activa con el mismo nombre.

    if (duplicada) {
        alert('Esta tarea ya existe.');
    } else {
        let ultimoId = 0
        lista.forEach(tarea => ultimoId = (tarea.id > ultimoId? tarea.id : ultimoId));  // Se busca el id activo mas alto
        const nuevaTarea = {};
        nuevaTarea.id = ultimoId + 1;   // Se asigna un id posterior al mas alto. Con este método cada tarea tiene un id diferente, evitando confusiones en el momento de la eliminación.
        nuevaTarea.titulo = nuevoTitulo;
        nuevaTarea.prioridad = prioridad;
        lista.push(nuevaTarea);
        pintarTarea(nuevaTarea, domTareas);
    }
}

function capturarTarea(event) {
    event.preventDefault();
    let nuevoTitulo = event.target.nuevoTitulo.value;
    let prioridad = event.target.prioridad.value;
    if (nuevoTitulo === "" || prioridad === "") {
        alert('Deben rellenarse ambos campos');
    } else {
        crearTarea(listaTareas, nuevoTitulo, prioridad);
    }
}

formNuevaTarea.addEventListener('submit', capturarTarea);

function filtroPorNombre(lista, titulo) {
    let longitud = 0;
    longitud = titulo.length;   // Capturamos la longitud de la consulta
    const respuesta = [];       // Preparamos un array para listar las tareas coincidentes
    for (let tarea of lista) {
        let comparador = tarea.titulo;  // Preparamos los datos para la comprobación
        if (comparador.slice(0, longitud).toLowerCase() === titulo.toLowerCase()) { // Comparamos la consulta con el nombre de cada tarea con la misma longitud y en minusculas.
            respuesta.push(tarea);
        }
    }
    return respuesta;
}

function filtroNombre(event) {
    if (event.target.value === "") {
        pintarTareas(listaTareas, domTareas);
    } else {
        const listaFiltradaNombre = filtroPorNombre(listaTareas, event.target.value);
        pintarTareas(listaFiltradaNombre, domTareas);
    }
}

formFiltroNombre.addEventListener('input', filtroNombre);

function filtroPrioridad(event) {
    if (event.target.value !== "") {
        let listaFiltradaPrioridad = [];
        listaFiltradaPrioridad = listaTareas.filter(tarea => tarea.prioridad === event.target.value);
        pintarTareas(listaFiltradaPrioridad, domTareas);
    } else {
        pintarTareas(listaTareas, domTareas);
    }
}

formFiltroPrioridad.addEventListener('change', filtroPrioridad);

function terminarTarea(killId) {    // Al llamar la función terminarTarea recibimos el id que la identifica
    let objetivo = listaTareas.findIndex(tarea => tarea.id === killId); // Buscamos la posición de la tarea a partir del id
    listaTareas.splice(objetivo, 1)
    pintarTareas(listaTareas, domTareas);

    alert('Tarea eliminada.');
}

pintarTareas(listaTareas, domTareas);