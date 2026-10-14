const formulario = document.getElementById("formTarea");
const entrada = document.getElementById("nuevaTarea");
const lista = document.getElementById("listaTareas");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const texto = entrada.value.trim();

    if (texto === "") {
        mensaje.textContent = "Escribe una tarea antes de agregarla.";
        return;
    }

    const elemento = document.createElement("li");
    const nombreTarea = document.createElement("span");
    const botonEliminar = document.createElement("button");

    nombreTarea.textContent = texto;
    botonEliminar.textContent = "Eliminar";
    botonEliminar.type = "button";

    botonEliminar.addEventListener("click", function () {
        elemento.remove();
    });

    elemento.append(nombreTarea, " ", botonEliminar);
    lista.appendChild(elemento);

    entrada.value = "";
    mensaje.textContent = "Tarea agregada correctamente.";
});

entrada.addEventListener("input", function () {
    mensaje.textContent = "";
});