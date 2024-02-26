let animal = ["cat","dog","fish","bat"]
// filter  3 char
// map to cap
// reduce to mearge

function exactThree(x) { return x.length == 3}
function capitalize(x) { return x.charAt(0).toUpperCase() + x.slice(1) }
function mergeWord(total,x) { return total + x}

const ThreeAnimal = animal.filter(exactThree).map(capitalize).reduce(mergeWord)

console.log(ThreeAnimal)