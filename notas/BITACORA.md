# BITÁCORA — LABORATORIO 08: JAVASCRIPT INTERACTIVO

**Curso:** Diseño y Desarrollo de Software  
**Tema:** Manipulación del DOM, eventos y formularios con JavaScript

## Ejercicio 2: Manipulación del DOM

| Prueba realizada | Resultado obtenido |
|---|---|
| Modificar el contenido de un elemento HTML desde JavaScript. | El contenido del elemento cambió según la instrucción ejecutada. |
| Recargar la página. | Se recuperó el contenido inicial definido en el HTML. |

**Observación:** JavaScript permite modificar los elementos de una página web sin tener que cambiar directamente el archivo HTML.

## Ejercicio 3: Eventos en JavaScript

| Evento | Acción realizada | Resultado |
|---|---|---|
| `click` | Presionar un botón. | Se ejecutó la acción programada. |
| `input` | Escribir en un campo de texto. | Se detectaron los cambios realizados en el campo. |
| `submit` | Enviar un formulario. | Se ejecutó el código asociado al envío. |

**Observación:** Los eventos permiten que la página responda a las acciones del usuario.

## Ejercicio 4: Formularios y envío de datos

| Prueba | Acción realizada | Resultado esperado |
|---|---|---|
| Primera prueba | Enviar el formulario sin completar los campos requeridos. | Se debe comprobar la validación correspondiente. |
| Segunda prueba | Completar los campos y enviar el formulario. | Se ejecuta el código programado para procesar el envío. |
| Tercera prueba | Enviar el formulario sin utilizar `preventDefault()`, cuando corresponda al ejercicio. | El navegador puede realizar el envío predeterminado y recargar la página. |

**Observación:** El comportamiento del formulario depende de las validaciones implementadas y de si se evita o no el envío predeterminado del navegador.

## Ejercicio 5: Objetos y productos

| Elemento | Descripción |
|---|---|
| Objeto | Agrupa información relacionada mediante propiedades. |
| Propiedades | Permiten almacenar datos de un producto, como su nombre y precio. |
| Acceso a propiedades | Se utiliza para consultar los datos almacenados en el objeto. |
| Productos | Se pueden representar mediante objetos de JavaScript. |

**Observación:** Los objetos ayudan a organizar información relacionada y facilitan su uso dentro del programa.

## Ejercicio 6: Carrito de compras y totales

| Operación | Descripción | Resultado esperado |
|---|---|---|
| Agregar productos | Incorporar productos al carrito. | El carrito registra los productos seleccionados. |
| Calcular subtotal | Sumar los precios de los productos según sus cantidades. | Se obtiene el subtotal de la compra. |
| Actualizar cantidades | Modificar la cantidad de un producto. | El importe correspondiente se actualiza. |
| Calcular total | Obtener el importe final según las operaciones implementadas. | Se muestra el total actualizado. |

**Observación:** El carrito permite trabajar con arreglos, objetos y operaciones matemáticas para actualizar los importes de una compra.

## Validación del formulario de correo electrónico

| Prueba | Dato ingresado | Resultado obtenido |
|---|---|---|
| Correo inválido | `holamundo` | Debe mostrarse el mensaje de error en rojo. |
| Correo válido | `jhosue.luque@tecsup.edu.pe` | Debe mostrarse el mensaje **Enviado**. |

