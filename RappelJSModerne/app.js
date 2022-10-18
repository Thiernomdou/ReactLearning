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