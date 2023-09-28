# Smartbill

Este proyecto esta en la versión de Angular [Angular CLI](https://github.com/angular/angular-cli) version 15.2.5.

Si tienen un Angular superior no deberia ser problema para correr. Tampoco debería poner problema el Node.js.

## Run

Para correr Angular deben tener, tanto Node.js, npm, y Angular/CLI instalados en el computador.

Una vez instalados, ingresan al archivo raiz de este proyecto y corren "npm install" en la consola para instalar todos los paquetes necesarios. 

Una vez instalado todo, ingresan el comando "ng serve" para iniciar el servidor de Angular y esperan a que suba el servidor. Una vez arriba, el servidor estara abierto en la url http://localhost:4200

## URLs

Login: http://localhost:4200
Inventario: http://localhost:4200/productos
Factura: http://localhost:4200/facturas
Facturar venta: http://localhost:4200/ventas
Registrar: http://localhost:4200/register

El register se realizará desde la misma página una vez se haya iniciado sesión para evitar registros de terceros. Como todavía no hemos implementado login, todavía no se hace la redirección. El cierre de sesi´pon tampoco funciona por el momento.

Si algo no les funciona o le quieren corregir algo, pregunten.
