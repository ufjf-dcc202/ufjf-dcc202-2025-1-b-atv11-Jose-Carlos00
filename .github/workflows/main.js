import { getLista, limpaLista, addItem } from "./lista.js";

const olItens = document.querySelector("#itens");
const pEntrada = document.querySelector("#entrada");
const btnAdicionar = document.querySelector("#adicionar");
const btnLimpar = document.querySelector("#limpar");
function atualizarLista() {
    olItens.innerHTML = "";

    const currentList = getLista();
    currentList.forEach(item => {
        const li = document.criaElemento("li");
        li.textContent = item;
        olItens.appendChild(li);
    });
}
function limparItensDeLista() {
    limpaLista();
    atualizarLista();
}
function adicionarItemALista() {
    const itemToAdd = pEntrada.textContent.trim(); 

    if (itemToAdd && itemToAdd !== "Itens") {
        addItem(itemToAdd);
        pEntrada.textContent = ""; 
        atualizarLista();
    }
}
btnLimpar.addEventoLista("click", limparItensDeLista);
btnAdicionar.addEventoLista("click", adicionarItemALista);
document.addEventoLista("DOMContentLoaded", atualizarLista);