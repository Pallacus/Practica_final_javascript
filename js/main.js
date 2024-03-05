//  listaTareas = [
const formNuevaTarea = document.querySelector('#formNuevaTarea');
const formFiltroNombre = document.querySelector('#filtroNombre');
const formFiltroPrioridad = document.querySelector('#filtroPrioridad');
const domTareas = document.querySelector('#tareas');

function pintarTarea(tarea, domElement) {
    // const newArticle = document.createElement('article');
    // newArticle.classList.add('flex3', tarea.prioridad);
    // const p1 = document.createElement('p');
    // p1.classList.add('ordinal');
    // p1.textContent = ('#' + tarea.id);
    // const p2 = document.createElement('p');
    // p2.id = `${tarea.titulo}`;
    // p2.textContent = tarea.titulo;
    // const button = document.createElement('button');
    // button.classList.add('rounded', 'btnQuitar');
    // button.onclick = 'terminarTarea()';  // Seguramente no se asigna de esta manera
    // button.value = 'Completada';
    // button.textContent = 'Completada';
    // const button = `<button class="rounded btnQuitar" onclick="terminarTarea(${tarea.id})" value="Completada">Completada</button>`;

    //newArticle.append(p1, p2, button);
    let newArticle = "";
    newArticle = `<article class="flex3 ${tarea.prioridad}"><p class="ordinal">#${tarea.id}</p><p>${tarea.titulo}</p><button class="rounded btnQuitar" onclick="terminarTarea(${tarea.id})" value="Completada">Completada</button></article>`;
    console.log(newArticle);

    domElement.innerHTML += newArticle;
}

function pintarTareas(lista, dom) {

    dom.innerHTML = [];
    if (lista === "") {
        dom.innerHTML = `<h2>No hay tareas que mostrar</h2>`
    } else {
        lista.forEach(tarea => pintarTarea(tarea, dom));
    }

}

function crearTarea(lista, nuevoTitulo, prioridad) {
    let duplicada = false;
    lista.forEach(tarea => {
        if (tarea.titulo === nuevoTitulo) {
            duplicada = true;

        }
    });
    if (duplicada) {
        alert('Esta tarea ya existe.');
    } else {
        const nuevaTarea = {};
        nuevaTarea.id = lista.length;
        nuevaTarea.titulo = nuevoTitulo;
        nuevaTarea.prioridad = prioridad;
        lista.push(nuevaTarea);
        pintarTareas(listaTareas, domTareas);
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
    longitud = titulo.length;
    const respuesta = [];
    for (let tarea of lista) {
        let comparador = tarea.titulo;
        if (comparador.slice(0, longitud).toLowerCase() === titulo.toLowerCase()) {
            respuesta.push(tarea);
        }
    }
    return respuesta;
    /* console.log(lista, titulo);
    //lista.forEach(element => console.log(lista.element.titulo));
    lista.forEach(tarea => console.log(tarea.titulo));

    console.log(lista.filter(tarea => tarea.titulo == titulo));
    return lista.filter(tarea => tarea.titulo === titulo); */
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
        console.log(event.target.value);
        /* listaTareas.forEach(tarea => {
            if (tarea.prioridad === event.target.value) {
                console.log(tarea);
            }
        }); */
        listaFiltradaPrioridad = listaTareas.filter(tarea => tarea.prioridad === event.target.value);
        //listaFiltradaPrioridad = (listaTareas, event) => lista.filter(tarea => tarea.prioridad === event.target.value);
        console.log(listaFiltradaPrioridad);
        pintarTareas(listaFiltradaPrioridad, domTareas);
    } else {
        pintarTareas(listaTareas, domTareas);
    }
}

formFiltroPrioridad.addEventListener('change', filtroPrioridad);

//  terminarTarea(${tarea.id})
function terminarTarea(killId) {
    // console.log(killId);
    let objetivo = listaTareas.findIndex(tarea => tarea.id === killId);
    listaTareas.splice(objetivo, 1)
    pintarTareas(listaTareas, domTareas);
}

pintarTareas(listaTareas, domTareas);