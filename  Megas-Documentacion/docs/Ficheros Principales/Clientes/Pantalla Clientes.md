## Clientes

En esta pantalla mediante las opciones de menú, podremos consultar diferentes datos de interés, además de realizar las operaciones básicas sobre cada uno de nuestros clientes.

A la hora de dar de alta un cliente, el programa exigirá la **introducción de datos** que considera **importantes** para su gestión, dejando la posibilidad de dejar en blanco aquellos que por lógica carecen de tanta importancia.

Esta obligatoriedad se pondrá de manifiesto en diferentes mensajes de error bien al dejar un **campo obligatorio en blanco o al terminar de recorrer todos los campos de la ficha**.

![Imagen Ficha Cliente](../../Imagenes/FichaCliente.png)

Procederemos a detallar cada aspecto de la **ficha de clientes**.
>*Todos los campos se recorren de izquierda a derecha*

* **Código cliente**: Es un código **alfanumerico** por el cual el usuario del programa identifica a cada uno de sus clientes.
    > Es aconsejable codificar los códigos con 5 carácteres numéricos a fin que que la **cuenta contable** y el **código de cliente** mantengan cierta relación.
    >
    >El programa genera automáticamente la cuenta contable si el código es numerico, por ejemplo si nuestro cliente está codificado como 00043, su cuenta contable se generará como: 43000043.
    >
    > *Si durante el proceso de alta se introduce el símbolo '+' en el campo de código de cliente, el programa genera automáticamente un número de cliente correlativo.*
* **Código Sucursal**: **POR RELLENAR**

* **Activo (ACT)**: Indica el estado del cliente, admite tres tipos de estado
  * S (Sí): El cliente se encuentra activo y se pueden realizar operaciones sobre el.
  * N (No): El cliente ya no está activo y hay que indicar la **fecha de baja**. Ya no se podrá realizar ninguna operación sobre el exceptuando consultas.

  * I (Inactivo): El cliente ya no está activo pero no necesariamente cerrado. Se utiliza para aquellos clientes que cesan su actividad durante un determinado periodo de tiempo.

* **NIF**: Este campo se rellena con una estructura determinada que es Número-Letra. El programa es capaz de determinar por sí solo la letra que acompaña el número.
    > En el caso de que sea DNI no calculará la letra.

* **TIPO**: Hace referencia al tipo de cliente. Lleva asociado una tabla con los códigos de todos los tipos disponibles.

* **DATOS FISCALES**: Consiste en un bloque de cuatro lineas:
  * **Nombre Fiscal**: Nombre fiscal del cliente.
  * **Dirección**: Dirección fiscal del cliente.
  * **Código Postal y Localidad**: Sigue una estructura determinada (*CP-Localidad*).
  * **Provincia**: Provincia.

> Siguiendo el orden de izquierda a derecha se nombran los siguientes campos.

* **DATOS COMERCIALES**
  * **Nombre Comercial**: Nombre comercial del cliente (Establecimiento).
  * **Dirección Comercial.**
  * **Código Postal y Localidad**: Sigue la misma estructura que los datos fiscales.

* **GRUPO**: Esta campo permite agrupar varios clientes con un denominador común, con el fin de hacer referencia al grupo creado en otras secciones del programa.

> Por ejemplo a la hora de crear promociones que afecten a un determinado grupo de clientes.

Para hacer uso de este campo primero ha de dar de alta los grupos en la sección **153-Grupos de cliente.**

* **NAC**: Indica si se trata de un cliente nacional. Entendemos por cliente nacional a todo aquel cliente al que el proveedor le factura directamente. 
    > Para dar de alta un cliente nacional se deberá hacer desde el apartado **157-Clientes - Proveedores.**

* **SERIE FAC**: **POR RELLENAR**