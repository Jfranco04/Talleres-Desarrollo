import { dataDjs } from './dataDjs.js';
import { Dj } from './dj.js';

let djsTbody: HTMLElement = document.getElementById('djs')!;
let djsPromedio: HTMLElement = document.getElementById('promedioEdades')!;



renderDjsInTable(dataDjs);

function renderDjsInTable(djs: Dj[]): void {
  console.log('Desplegando Djs');
  djs.forEach((dj) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${dj.nombre}</td>
                           <td>${dj.aka}</td>
                           <td>${dj.edad}</td>
                           <td>${dj.generos}</td>
                           `;
    djsTbody.appendChild(trElement);
  });

function promedioEdades(djs: Dj[]): number {
    let sumaEdades: number = 0;
    djs.forEach((dj) => {
        sumaEdades += dj.edad;
    });
    let promedioFinal: number = sumaEdades / djs.length;
    return parseInt(promedioFinal.toString());
}
let promedio = promedioEdades(dataDjs);
    djsPromedio.innerText = `Promedio de edades: ${promedio}`;
}
 