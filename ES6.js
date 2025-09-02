//Apprendre le ES6
// 1. Les fonctions flechees
// explication
// La fonction flechee est une syntaxe concise pour ecrire des fonctions en JavaScript. 
// Elle permet de definir des fonctions anonymes de maniere plus lisible et plus concise.
const addition = (a, b) => a + b;
console.log(addition(2, 3));

//Templates string
// explication
// Les templates strings permettent d'inclure des variables et des expressions dans des chaines de caracteres de maniere plus lisible.
const nom = "Mor";
const age = 30;
const presentation = `Bonjour, je m'appelle ${nom} et j'ai ${age} ans.`;
console.log(presentation);

// Destructuration
// explication
// La destructuration permet d'extraire des valeurs d'un tableau ou d'un objet 
// et de les affecter à des variables de maniere concise.
const utilisateur = {
  niveau: "Master",
  role: "dev"
};
const { niveau,  role } = utilisateur;
console.log(niveau);
console.log(role);

// 4. Les modules
// explication
// Les modules permettent d'organiser le code en plusieurs fichiers et de les importer/exporter facilement.
// Dans ce cas, nous allons simuler l'importation et l'exportation de modules en utilisant des fonctions.
const add = (a, b) => a + b;
const sous = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

export { add, sous, mult, div };
// Pour utiliser aller dans export.js et importer : import { add, sous, mult, div } from './ES6.js';

//Operateurs spread & rest
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr);

