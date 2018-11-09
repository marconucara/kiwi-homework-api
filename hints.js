
const defaultDictionary = ['ab', 'ac', 'aca', 'add'];

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

const getHints = (number, hints = dictionary, index = 0) => {
  const letters = conversions[number[index]];

  const filteredHints = hints.filter(word => word[index] && letters.indexOf(word[index]) >= 0);

  if (number.length === index + 1) {
    // last digit
    return filteredHints.sort();
  }
  return getHints(number, filteredHints, index + 1);
};

module.exports = (number, dictionary = defaultDictionary) => {
  return getHints(number, dictionary.filter(word => word.length === number.length));
}
