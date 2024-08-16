---
sidebar_position: 13
---

## 1.5.F - Reclasificación de Clientes por Fecha de Consumo

En este apartado, se detalla el proceso de reclasificación de los estados de los clientes basado en su fecha de consumo. Esta funcionalidad permite una gestión eficiente y actualizada del estado de cada cliente, asegurando que las clasificaciones reflejen con precisión su actividad reciente.

![Pantalla Reclasificar Clientes](../../../static/assets/Reclasificar/Reclasificación%20de%20clientes.png)

### Detalles del Proceso

La fecha de consumo utilizada para la reclasificación corresponde a la fecha actual del sistema. El programa efectuará el cálculo retroactivo desde esta fecha, tomando en cuenta los parámetros establecidos para determinar los días de inactividad y los días necesarios para clasificar a un cliente como potencial.

- **Días para Inactivo**: El número de días desde la última actividad del cliente para considerarlo inactivo.
- **Días para Potencial**: El número de días de actividad reciente necesarios para considerar al cliente como potencial.

Esta herramienta permite mantener una base de datos de clientes siempre actualizada, optimizando la gestión y facilitando la toma de decisiones estratégicas.
