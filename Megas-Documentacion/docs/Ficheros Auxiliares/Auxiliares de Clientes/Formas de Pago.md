---
sidebar_position: 1
---

## 1.5.1 - Formas De Pago

Permite definir las diferentes formas de pago, tanto para clientes como proveedores.
Una vez accedamos a la pantalla se nos mostrarán todas las formas de pago que tenemos dadas de alta en nuestro sistema.

![Formas de Pago](../../../static/assets/Formas%20de%20Pago/PantallaFormaDePago.png)

Utilizaremos la forma de pago mensual como ejemplo:

![Pago Mensual](../../../static/assets/Formas%20de%20Pago/PagoMensual.png)

* **Código Pago en C**: Código de la forma de pago. Es un campo alfanumérico por lo que admite letras y números.
* **Forma de Pago**: Nombre de la forma de pago.
* **Número de Vencimientos**: Número total de vencimientos.
    :::tip **Por Ejemplo**
    Para las formas de pago **30,60,90** el número de vencimientos será de 3
    :::
* **Desplazamiento 1er Vencimiento**: Número de dias que se sumará a la fecha de factura para conformar el primer vencimiento.
* **Días entre Vencimientos**: Días que habrá entre vencimientos en caso de que haya más de uno.
* **Emitir Recibo**: Si la forma de pago lleva asociada la impresión de un recibo elegiremos **S**(Sí), si no hay recibo asociado dejaremos por defecto **N**(No).

* **% de Entrada**: Porcentaje del total de la factura/albarán que se dará por cobrado automáticamente a la emisión del documento.
* **% Descuento Pronto Pago**: Porcentaje en descuento por pronto pago. Se aplicará automáticamente en las facturas de los clientes que tengan asociada esta forma de pago.
* **Cuenta Contable**: Cuenta de contrapartida a la que irá el cobro del documento.
* **Descripción del pago**: Está descripción aparecerá automáticamente al dar el pago de un vencimiento en una factura, al igual que será el mostrado en los documentos.
* **Total A cuenta vencimiento**: No se utiliza.

* **% Recargo**: Recargo en euros antes de impuestos. Generalmente se utiliza por gastos de logísitca.

* **Riesgo Días Albarán**: Número de días de riesgo concedidos para los albaranes que conllevan esta forma de pago.
* **Riesgo Días Factura**: Número de días de riesgo concedidos para las facturas que conllevan esta forma de pago.
* **Riesgo Número de Albaranes**: Número total de albaranes de riesgo concedidos para esta forma de pago.
* **Riesgo Número de Facturas**: Número total de facturas de riesgo concedidos para esta forma de pago.

* **% Retención**:
* **Cobra Representante**: Mediante esta opción se especifica si el representante puede cobrar los documentos asociados a esta forma de pago.
* **Cta Retención**: Cuenta de contrapartida para la retención.


