// Creating a program to print superheroes and supervillains
// using external node modules

const superheroes=require('superheroes');
const sv=require('supervillains');
console.log("SuperHero = " + superheroes.random());
console.log("SuperVillain = " + sv.random());