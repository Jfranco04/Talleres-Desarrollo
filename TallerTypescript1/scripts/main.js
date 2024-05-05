import { dataDjs } from './dataDjs.js';
var djsTbody = document.getElementById('djs');
var djsPromedio = document.getElementById('promedioEdades');
renderDjsInTable(dataDjs);
function renderDjsInTable(djs) {
    console.log('Desplegando Djs');
    djs.forEach(function (dj) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(dj.nombre, "</td>\n                           <td>").concat(dj.aka, "</td>\n                           <td>").concat(dj.edad, "</td>\n                           <td>").concat(dj.generos, "</td>\n                           ");
        djsTbody.appendChild(trElement);
    });
    function promedioEdades(djs) {
        var sumaEdades = 0;
        djs.forEach(function (dj) {
            sumaEdades += dj.edad;
        });
        var promedioFinal = sumaEdades / djs.length;
        return parseInt(promedioFinal.toString());
    }
    var promedio = promedioEdades(dataDjs);
    djsPromedio.innerText = "Promedio de edades: ".concat(promedio);
}
