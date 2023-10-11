/*****************************
* 11 -  Priorité des opérateurs
*/



// Opérateurs multiples
let resultat = (3+4)*2/5^2;
let resultat2=3+4*(2/5^2);

console.log("il existe des priorités lorsque plusieurs opérateur sont utilisés dans une expression, P.E.M.D.A.S (Parenthèses, exposants, multiplication, division, addition et soustraction, voici un exemple :(3+4)*2/5^2 =", resultat, "alors que 3+4*(2/5^2) sera égal à :", resultat2);

// Groupement

let resultat3=(3+4)*3;
let resultat4 = 3+4*3;

console.log("On remarque l'importance du groupement dans cette exemple : (3+4)*3 =", resultat3, "tandis que 3+4*3 égal à",resultat4);

// Affectations multiples

let a,b,c;
a=b=c=100;

console.log("Cette méthode d'affectation multiple est utile lorsque vous avez plusieurs variables à initialiser avec la même valeur. let a,b,c ;(a=b=c=10); il est important de noter que l'ordre d'éxecution s'effectue de droite à gauche.")


// Autres opérateurs

