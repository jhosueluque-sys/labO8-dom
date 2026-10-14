class Tarea {
    constructor(nombre) {
        this.nombre = nombre;
        this.completada = false;
    }

    completar() {
        this.completada = !this.completada;
    }
}

const formulario = document.getElementById("formTarea");
const entrada = document.getElementById("nuevaTarea");
const lista = document.getElementById("listaTareas");
const mensaje = document.getElementById("mensaje");

const tareas = [];

function mostrarTareas() {
    lista.replaceChildren();

    tareas.forEach(function (tarea, indice) {
        const elemento = document.createElement("li");
        const nombre = document.createElement("span");
        const botonCompletar = document.createElement("button");
        const botonEliminar = document.createElement("button");

        nombre.textContent = tarea.nombre;

        if (tarea.completada) {
            nombre.style.textDecoration = "line-through";
        }

        botonCompletar.textContent = tarea.completada
            ? "Desmarcar"
            : "Completar";

        botonCompletar.type = "button";
        botonCompletar.addEventListener("click", function () {
            tarea.completar();
            mostrarTareas();
        });

        botonEliminar.textContent = "Eliminar";
        botonEliminar.type = "button";
        botonEliminar.addEventListener("click", function () {
            tareas.splice(indice, 1);
            mostrarTareas();
            mensaje.textContent = "Tarea eliminada.";
        });

        elemento.append(
            nombre,
            " ",
            botonCompletar,
            " ",
            botonEliminar
        );

        lista.appendChild(elemento);
    });
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = entrada.value.trim();

    if (nombre === "") {
        mensaje.textContent = "Escribe una tarea antes de agregarla.";
        return;
    }

    tareas.push(new Tarea(nombre));

    entrada.value = "";
    mensaje.textContent = "Tarea agregada correctamente.";
    mostrarTareas();
    entrada.focus();
});

entrada.addEventListener("input", function () {
    mensaje.textContent = "";
});