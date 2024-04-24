// costante lista array
const lista = [
    "uova",
    "latte",
    "zucchero",
    "farina"
];
console.log(lista);

// seleziono la ul
const listaElement = document.querySelector("ul");

// ciclo for itero gli elementi
console.log("Itero gli elementi con for");
for (let i = 0; i < lista.length; i++) {

    const element = lista[i];
    console.log(i, element);

    // stampo tanti "li" quanti sono gli elementi nella lista
    listaElement.innerHTML += `<li>${element}</li>`;
}



// ciclo while


console.log("Itero gli elementi con while");
// definisco i fuori dal ciclo
let i = 0;
// inizio ciclo while
while (i < lista.length) {

    const element = lista[i];
    console.log(i, element);

    i++;
}
// resetto l'indice e lo porto nuovamente alla condizione iniziale = 0
i = 0;
console.log("Contatore ancora esistente dopo il while ma resettato: ", i);