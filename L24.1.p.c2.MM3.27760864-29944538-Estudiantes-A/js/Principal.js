/*El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias. 
Se tiene de todo estudiante su nombre, acumulado notas y cantidad materias. 
Un estudiante becado recibe una beca mensual de $30 si su promedio de notas es superior a 
15, ó recibe $20 si es al menos $10; si el promedio es menor de 10, no recibe beca. 
Diseñe las clases Cl_estudiante y Cl_becado, usando herencia, de manera que procese un 
estudiante y reporte el monto de la beca, o si no le corresponde beca. 
Ejemplos de la becado.RecibirBeca();
becado2.RecibirBeca();
let salida = document.getElementById("salida");
salida.innerHTML = "nombre del estudiante: " + becado2.nombre + "<br>" + "Nota promedio: " + becado2.promedio() + "<br>" + "Beca: " + becado2.RecibirBeca();
salida += "<br>" + "nombre del estudiante: " + becado.nombre + "<br>" + "Nota promedio: " + becado.promedio() + "<br>" + "Beca: " + becado.RecibirBeca();corrida: 
Nombre del estudiante: Mary 
Acumulado de notas: 132 
Cantidad de materias: 8 
Nota promedio: 16.50 
Mary recibe una beca de $30.00 
Nombre del estudiante: Alirio 
Acumulado de notas: 315 
Cantidad de materias: 35 
Nota promedio: 9.00 
Alirio no le corresponde beca*/

import Cl_becado from "./Cl_becado.js";
import Cl_estudiante from "./Cl_estudiante.js";
let estudiante = new Cl_estudiante("Mary", 132, 8);
let estudiante2 = new Cl_estudiante("Alirio", 315, 35);

let salida = document.getElementById("salida");

let mostrarEstudiante=(estudiante)=>{
    return `
    <tr>
          <td>${estudiante.nombre}</td>
          <td>${estudiante.notasAcumuladas}</td> 
          <td>$${estudiante.promedio()}</td>
      </tr>
       `;
  };
  salida.innerHTML=`<table>
   <tr>
          <th>Nombre</th>
          <th>Notas</th>
           <th>Promedio</th>
      </tr>
      ${mostrarEstudiante(estudiante)}
      ${mostrarEstudiante(estudiante2)}
   
  </table>
  <br>Total que paga la empresa por sueldos: $${empresa.devolversueldototal().toFixed(2)}
  `;