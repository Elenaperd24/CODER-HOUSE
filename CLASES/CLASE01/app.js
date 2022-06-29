/* const myName = "pepe"
const age = 29
const price = 99.90
console.log(myName);
console.log(age);
console.log(price);

let mySeries = [ "Dark", "Mr. Robot", "Castlevania"]
 console.log(mySeries); 

let myMovies = [
    {"name":"fiver pitch",
    "year":2008,
    "characters": ["Jimmy Fallon", "Dew Barrymore"]},

    {"name":"Twilight",
    "year":2010,
    "characters": ["Robert Pattinson", "kristen stewart"]},

    {"name":"Breaking New",
    "year":212,
    "characters": ["Robert Pattinson", "kristen stewart"]},

] 
console.log(myMovies);

let newAge = age + 1
console.log(newAge);

mySeries.push("breaking bad")

console.log("new series", mySeries); 

function existe (){
 return console.log(probandoLET)
}
existe() 

let probandoLET =  "global"

///auto invocadas o IIFEs
(function(){
   // console.log("auto invocada");
})();
 */

const add = (function() {
    let counter = 0
    return function() {counter += 40; return counter}
} ) ();

console.log(add());
console.log(add());
console.log(add());