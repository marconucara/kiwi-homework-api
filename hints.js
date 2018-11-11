
const defaultDictionary = require('an-array-of-english-words');

const conversions = [
  [],
  [],
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z'],
];

module.exports = (number, dictionary = defaultDictionary) => dictionary.filter(
  word => word.length === number.length
  && Array.prototype.every.call(word, ((letter, i) => conversions[number[i]].indexOf(letter) >= 0)),
);
