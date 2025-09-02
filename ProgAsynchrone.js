//Programmation asynchrone
// explication
// La programmation asynchrone permet d'executer des taches en background sans bloquer l'execution du code


// 1. Async / await

const fetch = require('node-fetch');

const getData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Erreur:', error);
    }
};

getData();



// 2. Les promesses
// Les promesses sont des objets qui représentent la valeur d'une opération asynchrone.
// Elles peuvent être dans l'un des trois états suivants : en attente, résolue ou rejetée.
fetch('https://api.example.com')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
// Dans cet exemple, nous utilisons la méthode fetch pour effectuer une requête HTTP asynchrone.