const marvel_heros = ["thor","spider-man","Iron-man"]
const DC_heros = ["Batman","flash","Super-man"]

// marvel_heros.push(DC_heros)

// console.log(marvel_heros)

// new_heros = marvel_heros.concat(DC_heros)

// console.log(new_heros)

const new_heros = [...marvel_heros,...DC_heros]
console.log(new_heros)

const another_array = [1,2,4,5,6,[6,7],[6,7,[10,4]],1]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)
// this part is done I guess
// okay I still don't get git sometimes