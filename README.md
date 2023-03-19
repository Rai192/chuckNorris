# ChuckNorris

Proyecto generado con [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6. /n
Proyecto basado en las indicaciones para la realizacion de una prueba tecnica: Bajo la utilizacion de la Api publica de api.ChuckNorris.io, se utilizan principalmente 3 servicios. 


## Development server

Para correr este software necesitas ejecutar `ng serve` en el directorio del SW. 
Posteriormente abre `http://localhost:4200/` en tu navegador. 

## Uso general
La pagina principal desplegará dos formularios, dentro de un recuadro.

El primer campo "Lista de categorías" cargará la lista de categorías disponibles obtenidas a través de la api publica. Al seleccionar una y presionar "Buscar Categoría", redirigirá hacia otro componete mostrando el resultado.

El segundo campo "Texto a buscar", es un campo de texto libre, el cual una vez presionado el boton "Buscar Texto", redirigirá hacia otro componente el cual desplegará una lista de resultados en base al texto ingresado.

Si se intenta utilizar alguna de estas funciones sin previamente seleccionar o ingresar algun valor Angular Guard redirigirá hacia otro componente mostrando un aviso.


