import { getLista, limpaLista, adicionaNaLista } from "./lista.js";

const itens = document.querySelector("#itens");
const entrada = document.querySelector("#entrada");
const adicionar = document.querySelector("#adicionar");
const limpar = document.querySelector("#limpar");


adicionar.addEventListener("click", adicionarItemALista);

function adicionarItemALista(){
    let item = entrada.textContent.trim();
    if (!item)
        return;
    entrada.textContent = "";
    adicionaNaLista(item);
    atualizarLista();
}

limpar.addEventListener("click", limpaItensDaLista);

function limpaItensDaLista(){
    limpaLista();
    atualizarLista();
}

function atualizarLista(){
    itens.innerHTML = "";
    let lista = getLista();
    for (let i = 0; i < lista.length; i++) {
        const li = document.createElement("li");
        li.textContent = lista[i];
        itens.appendChild(li);
    }
}

atualizarLista();