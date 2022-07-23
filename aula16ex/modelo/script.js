let num = document.querySelector("input#fnum");
let lista = document.querySelector("select#flista");
let res = document.querySelector("dev#res");
let valores = [];

function isNumero(n) {
  return Number(n) >= 1 && Number(n) <= 100;
}

function inLista(n, l) {
  return l.indexOf(Number(n)) != -1;
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    
  } else {
    window.alert("Valor inválido ou já encontrado na lista.");
  }
}
