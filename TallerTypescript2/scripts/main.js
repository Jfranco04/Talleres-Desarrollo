import { dataDjs } from './dataDjs.js';
var djsTbody = document.getElementById('djs');
var djsPromedio = document.getElementById('promedioEdades');
var cardContainer = document.getElementById('cardContainer');
renderDjsInTable(dataDjs);
function renderDjsInTable(djs) {
    console.log('Desplegando Djs');
    djs.forEach(function (dj, index) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td class=\"dj-name\" data-index=\"".concat(index, "\">\n                          <a href=\"#\" style=\"color: blue; text-decoration: underline;\">").concat(dj.nombre, "</a>\n                          </td>\n                           <td>").concat(dj.aka, "</td>\n                           <td>").concat(dj.edad, "</td>\n                           <td>").concat(dj.generos, "</td>");
        djsTbody.appendChild(trElement);
    });
    var djNameElements = djsTbody.querySelectorAll('.dj-name');
    djNameElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var index = parseInt((_a = element.getAttribute('data-index')) !== null && _a !== void 0 ? _a : "0");
            showCard(djs[index]);
        });
    });
}
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
function showCard(dj) {
    cardContainer.innerHTML = "\n        <div class=\"card\" style=\"width: 18rem;\">\n          <img class=\"card-img-top\" src=\"".concat(dj.image, "\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(dj.aka, "</h5>\n            <p class=\"card-text\">").concat(dj.descripcion, "</p>\n            <p class=\"card-text\">Edad: ").concat(dj.edad, "</p>\n            <p class=\"card-text\">G\u00E9neros: ").concat(dj.generos, "</p>\n          </div>\n        </div>\n      ");
}
