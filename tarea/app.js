const tareas = [
    "Estudiar JavaScript",
    "Completar el laboratorio",
    "Revisar el proyecto"
];

const lista = document.getElementById("listaTareas");

tareas.forEach(function (tarea) {
    const elemento = document.createElement("li");
    elemento.textContent = tarea;
    lista.appendChild(elemento);
});