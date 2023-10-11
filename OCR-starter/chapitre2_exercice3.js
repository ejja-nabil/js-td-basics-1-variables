// Permutation de variables




// Solution classique utilisant une variable temporaire


let a=1;
let b = 2;
console.log("Avant permuation a =",a,"et b =",b);

let c=a;
a=b;
b=c;

console.log("Après permuation, grâce à une troisième variable C,  a =",a,"et b =",b);



// Solution alternative valable uniquement pour des nombres
/* nombre1 += nombre2;
nombre2 = nombre1 - nombre2;
nombre1 -= nombre2; */


let nombre1=25;
let nombre2=15;

console.log("Avant permuation nombre 1 =",nombre1,"et nombre 2 =",nombre2);

nombre1+=nombre2;
nombre2=nombre1-nombre2;
nombre1-=nombre2;

console.log("Après permuation nombre 1 =",nombre1,"et nombre 2 =",nombre2);

