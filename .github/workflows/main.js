import { getLista, limpaLista } from "./lista";

import (getLista)
const olItens= document.querySelector("#itens");
const pEntrada= document.querySelector("#entrada");
const bntAdicionar= document.querySelector("#Adicionar");
const bntLimpar= document.querySelector("#Limpar");

bntLimpar.addEventListener('click', limpaItensDeLista);
function limpaItensDeLista(){
    limpaLista();
    atualizarLista();
}
function atualizarLista(){
    olItens.innerHTML = " ";
    let lista = getLista();
    for (let i = 0; i<lista.length; i++){
        const li= document.createElement('li');
        li.textContent = lista[i];
        olItens.appendChild(li);
    }
}