//Array of Multiples
/*Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 

Examples:
- `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
- `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.*/

const multiplos = [];
function arrayMultiplos(multiplo, length){
    for(let i = 1; i <= length; i++){
        multiplos.push(multiplo*i)
    }console.log(multiplos)
}arrayMultiplos(17,6)