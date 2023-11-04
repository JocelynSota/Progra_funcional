# Problema de programacion funcional

Desarrollo basado en plataformas.

## Parcial II Conceptos basicos de plataformas web

### Lenguaje de programacion:

JavaScript 

Version de node: v18.17.1

### Autor

**Jocelyn Soto Avila**

**Matrícula: 348687**

### Docente.

Ing. Luis Antonio Ramírez Martínez

### Descripción del ejercicio

Resolver los siguientes problemas usando Lambdas y funciones.

La empresa de abarrotes doña Julia tiene una lista de productos donde almacena la clave del producto, su descripción precio, clasificación, cantidad de existencia, existencia mínima y máxima. Doña Julia requiere generar varios reportes:

    1) Número de productos con existencia mayor a 20.
    2) Número de productos con existencia menos a 15.
    3) Lista de productos con la misma clasificación y precio mayor 15.50
    4) Lista de productos con precio mayor a 20.30 y menor a 45.00
    5) Número de productos agrupados por su clasificación

Cree un DAO para cargar la información de un archivo con 80 productos como mínimo.

### Funcionamiento del programa

El programa realizado en esta actividad cuenta con la importación de la libreria fs, para después crear la función de DAO, posteriormente se realizaron una serie de funciones las cuales cada una regresara el resultado de los reportes en base al archivo.JSON