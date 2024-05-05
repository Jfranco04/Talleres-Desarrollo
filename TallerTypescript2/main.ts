import { dataDjs } from './dataDjs.js';
import { Dj } from './dj.js';

let djsTbody: HTMLElement = document.getElementById('djs')!;
let djsPromedio: HTMLElement = document.getElementById('promedioEdades')!;
let cardContainer: HTMLElement = document.getElementById('cardContainer')!;



renderDjsInTable(dataDjs);

function renderDjsInTable(djs: Dj[]): void {
  console.log('Desplegando Djs');
  djs.forEach((dj, index) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td class="dj-name" data-index="${index}">
                          <a href="#" style="color: blue; text-decoration: underline;">${dj.nombre}</a>
                          </td>
                           <td>${dj.aka}</td>
                           <td>${dj.edad}</td>
                           <td>${dj.generos}</td>`;
    djsTbody.appendChild(trElement);
  });

  let djNameElements: NodeListOf<Element> = djsTbody.querySelectorAll('.dj-name');
  djNameElements.forEach((element) => {
    element.addEventListener('click', () => {
      let index = parseInt(element.getAttribute('data-index') ?? "0");
      showCard(djs[index]);
    });
  });
}

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

function showCard(dj: Dj): void {
      cardContainer.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${dj.image}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${dj.aka}</h5>
            <p class="card-text">${dj.descripcion}</p>
            <p class="card-text">Edad: ${dj.edad}</p>
            <p class="card-text">Géneros: ${dj.generos}</p>
          </div>
        </div>
      `;
    }

 