import { getLista, limpaLista } from "./lista.js";
const olItens      = document.querySelector("#itens");
const pEntrada     = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar    = document.querySelector("#limpar");

function atualizarLista() {
  olItens.innerHTML = "";
  const lista = getLista();
  for (let i = 0; i < lista.length; i++) {
    const li = document.createElement("li");
    li.textContent = lista[i];
    olItens.appendChild(li);
  }
}
atualizarLista();
function limparItensDeLista() {
  limpaLista();
  atualizarLista();
}

btnLimpar.addEventListener("click", limparItensDeLista);
