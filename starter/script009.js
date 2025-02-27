/*****************************
* 009 - Mutation de variable et conversion de type
*/

// 1. Initialiser les variables firstName à John et age à 28
const firstName="John";
let age=28;
// Conversion de type

// 2. Ecrire l'instruction qui affiche "John a 28 ans"
// et afficher le type de cette expression
console.log(firstName,"a",age);
console.log(typeof (firstName+"a"+age));

// 3. Déclarer en une seule instruction les varaibles job et isMarried
// puis affecter la valeur professeur à job et false à isMarried
// enfin, écrire l'instruction qui affiche
// "John est un professeur de 28 ans. Est-il marié ? false"
let job = "programmeur", isMarried = "true";
job="professeur";
isMarried="false";
console.log(firstName,"est un",job,"de",age,"ans. Est-il marié?",isMarried);

// Variable mutation

// 4. Affecter la valeur 'vingt-huit' à la variable age
// et la valeur 'conducteur' à la variable job. 
// Afficher ensuite la phrase précédente dans une boîet de dialogue

age="vingt-huit";
job="conducteur";
let phrase ="John est un "+job+ " de " +age+" ans. Est-il marié ? " +isMarried+".";
alert(phrase);

// 5. Afficher une boîte de dialogue 'Quel est son nom de famille ?'
// qui permet à l'utilisateur d'entrer le nom de famille de John
// et stocker ce nom dans une variable lastName
// puis afficher "Le nom de famille de John est … (le nom entré)"

let lastName=prompt("Quel est son nom de famille ?");
alert("Le nom de famille de John est "+lastName);