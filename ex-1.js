let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  return words.map( (word) => word.length )
}

// function getWordLengths2 (word) {
//   return word.length
// }

const result = getWordLengths(words);
//let result = words.map(getWordLengths2)

console.log(result); // Output: [5, 5]
