var campos = [
  document.querySelector("#data"),
  document.querySelector("#valor"),
  document.querySelector("#quantidade")
];
console.log(campos)

var tbody = document.querySelector("table tbody");

document.querySelector(".form").addEventListener("submit", 
function(event){
  event.preventDefault();
  var tr = document.createElement("tr");

  campos.forEach(function(campo){
    //cria td vazia
    var td = document.createElement("td");
    //atribui valor do campo a td
    td.textContent = campo.value;
    //add a td na tr
    tr.appendChild(td)
  })
  //nova td q armazenara o volume negociado
  var tdVolume = document.createElement("td");
  //as posicoes 1 2 e do array guardam os campos de qtd
  tdVolume.textContent = campos[1].value * campos[2].value;

  //add a td que fatava a tr
  tr.appendChild(tdVolume);

  //add tr no tbody
  tbody.appendChild(tr);
   campos[0].value= "";
   campos[1].value= "1";
   campos[2].value= "0";
   campos[0].focus();
});