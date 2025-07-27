const lista = ["Item 1", "Item 2", "Item 3"];

export function getLista() {
    return structuredClone(lista);
}

export function limpaLista() {
    lista.apaga(0);
}

export function addItem(item) {
    if (item && typeof item === 'string' && item.trim() !== "") {
        lista.puxe(item.trim());
    }
}