//scope
// function foo() {
//     var x = 5;
//     console.log(x);
// }

// foo();

//fleché
// const add = (a,b) => {
//     return a + b;
// }
// console.log(add(2,2));

//mot clé this
//this avec les fonctions flechés fait réference au contexte englobant (window en l'ocurence)
//this sans les fonctions flechées fait réference à l'objet appelant (myObj en l'occurence)
// const myObj = {
//     a: "5",
//     foo: () => {
//         console.log(this.foo);
//     }
// }
// myObj.foo();

//spread & Rest perator
//Spread Operator
// const arr = [1,2,3];
// const arr2 = [...arr,4]
// console.log(...arr2);

// const myObj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// const myObj2 = {
//     ...myObj,
//     d:4
// }
// console.log(myObj2);

//Rest Operator (tous les arguments qui reste qu'on récupère sous un tableau)
// const add = (...args) => {
//     let result = 0;
//     //for of pour les tableaux(notament ici) et for in pour les objets
//     for(const arg of args) {
//         result += arg;
//     }
//     return result;
// }
// console.log(add(2,2,6,8));

//Les fonction pures
