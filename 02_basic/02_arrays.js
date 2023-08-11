const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
//in this dc_heros become the 3 elements of the marvel_heros

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allHeros = marvel_heros.concat(dc_heros)
//in this dc_heros elements combine with marvel_heros elements and the size become (dc_heros size) + (marvel_heros size)

// console.log(allHeros)

// const all_new_heros = [...marvel_heros, ...dc_heros]; //this is also a way to combine two array into single array
// console.log(all_new_heros)


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
// flat() fuction - Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(real_another_array)


console.log(Array.isArray("Hitesh"))
//Array.isArray() checks if the passed value is an Array
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "Hitesh"}))//interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


