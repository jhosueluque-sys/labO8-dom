# Tarea: Lista de tareas con JavaScript

## Objetivo

Crear una aplicación web que permita registrar tareas, marcarlas como completadas y eliminarlas utilizando JavaScript, eventos y clases.

## Desarrollo por versiones

### Versión 1: Manipulación del DOM

Se creó la estructura HTML y se utilizó JavaScript para mostrar una lista inicial de tareas. Se practicó la selección de elementos y la creación de elementos HTML mediante código.

### Versión 2: Eventos

Se incorporó un formulario para agregar tareas. También se implementaron eventos para validar el campo de texto, mostrar mensajes y eliminar tareas.

### Versión 3: Clase Tarea

Se creó la clase `Tarea`, con las propiedades `nombre` y `completada`, y el método `completar()`. Se agregó la opción de marcar y desmarcar tareas, además de eliminarlas de la lista.

## Tabla 1. Registro de las iteraciones

| Versión | Cambios realizados | Prueba realizada |
|---|---|---|
| 1 | Estructura HTML y lista inicial generada con JavaScript. | Verificar que aparezcan las tres tareas iniciales. |
| 2 | Formulario, eventos y eliminación de tareas. | Agregar una tarea, probar el campo vacío y eliminar una tarea. |
| 3 | Clase `Tarea` y estado de completado. | Agregar, completar, desmarcar y eliminar tareas. |

## Tabla 2. Pruebas funcionales

| Caso de prueba | Resultado esperado | Resultado obtenido |
|---|---|---|
| Agregar una tarea válida | La tarea aparece en la lista. | Completar después de probar. |
| Enviar el formulario vacío | Se muestra un mensaje de validación. | Completar después de probar. |
| Completar una tarea | El nombre aparece tachado. | Completar después de probar. |
| Desmarcar una tarea | El nombre deja de aparecer tachado. | Completar después de probar. |
| Eliminar una tarea | La tarea desaparece de la lista. | Completar después de probar. |

## Observaciones

El desarrollo se realizó en tres versiones para comprobar el funcionamiento de cada parte antes de continuar. Se utilizaron eventos para responder a las acciones del usuario y una clase para organizar los datos y el estado de cada tarea.

## Conclusiones

- Practiqué la manipulación del DOM y la creación de elementos HTML desde JavaScript.
- Aprendí a utilizar eventos para agregar, completar y eliminar tareas.
- Comprendí cómo una clase permite organizar los datos y comportamientos de un objeto.

## Evidencias

Agregar capturas de la versión inicial, la versión con eventos y la versión final funcionando en el navegador. Incluir también capturas del historial de commits del repositorio.