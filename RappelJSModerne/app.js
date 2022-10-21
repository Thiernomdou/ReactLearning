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

//Les fonction pures et non pures
//fonctions pures (qui sont très utilisé avec React)
// const add2 = (a,b) => {
//     return a + b;
// } 
// console.log(add2(2,2));
//fonctions non pures
// let x = 2;
// const add1 = y => {
//     return x += y;
// }
// console.log(add1(2));


//Les fonctions d'ordre supérieur
/*des fonctions qui prennent une autre fonction en paramétre, ou qui
retourne une autre, ou les deux*/
//Permet de pouvoir effectuer des actions multiples avec une seule et même fonction
//procédural
// const rawArr = [5,6,5889,52,415,120];
// const newArr = [];
// for(let i = 0; i < rawArr.length; i++) {
//     if(rawArr[i] > 100) {
//         newArr.push(rawArr[i]);
//     }
// }
// console.log(newArr);

//Utilisation réutilisable
// const rawArr = [5,6,5889,52,415,120];
// const supArr = (arr, fn) => {
//     const newArr = [];
//         for(let i = 0; i < arr.length; i++) {
//         if(fn(arr[i])) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// const arrSup100 = supArr(rawArr, (item) => {
//     if(item > 100) {
//         return item;
//     }
// })
// const arrSup200 = supArr(rawArr, (item) => {
//     if(item > 200) {
//         return item;
//     }
// })

// console.log(arrSup100);
// console.log(arrSup200);


//Les fonctions d'ordre supérieur des tableaux
const arr = [1,2,3,4,5,6];
//la méthode map retourn e un nouveau tableau
const mapedArr = arr.map(x => x + 10);
console.log(mapedArr);
//La méthode Filter retourne un nouveau tableau
const filteredArr = arr.filter(num => num > 2);
console.log(filteredArr);

