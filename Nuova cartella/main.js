// costante lista array
const lista = [
    "uova",
    "latte",
    "zucchero",
    "farina"
];
console.log(lista);

// ciclo for itero gli elementi
console.log("Itero gli elementi con for");
for (let i = 0; i < lista.length; i++) {

	const element = lista[i];
	console.log(i, element);
}