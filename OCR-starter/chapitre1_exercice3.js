// Prédiction de résultat
/*
Affichez dans la console le résutat de l'opérateur "+" dans les différentes cas de figure
avec les valeurs 4 et 5 selon qu'elles sont de type nombre ou de type chaîne  :
- 4 et 5 sont toutes deux de type nombres :
	* quelle opération réalise l'opérateur "+" dans ce cas ?
	* quel est le résulat de l'opération ?
- 4 et 5 sont toutes deux de type chaîne :
	* quelle opération réalise l'opérateur "+" dans ce cas ?
	* quel est le résulat de l'opération ?
- 4 est de type chaîne et 5 est de type nombre :
	* quelle opération réalise l'opérateur "+" dans ce cas ?
	* quel est le résulat de l'opération ?
- que se passe-t-il si on entoure toute l'expression (VALEUR OPÉRANDE VALEUR) de guillemets ? Pourquoi ?
*/


const resultat1 = 4 + 5;
const resultat2 = "4" + "5";
const resultat3 = "4" + 5;
const resultat4 = "4 + 5";

console.log("Cas 1 : 4 et 5 sont toutes deux de type nombres");
console.log("Résultat :", resultat1);

console.log("\nCas 2 : 4 et 5 sont toutes deux de type chaîne");
console.log("Résultat :", resultat2);

console.log("\nCas 3 : 4 est de type chaîne et 5 est de type nombre");
console.log("Résultat :", resultat3);

console.log("\nCas 4 : Expression entourée de guillemets");
console.log("Résultat :", resultat4);


