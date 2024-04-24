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