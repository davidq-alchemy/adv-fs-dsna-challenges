function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function titleCase(str) {
  return str.toLowerCase().replace(/(^|(?<=\s))\w/g, c => c.toUpperCase());
}

function at(arr, index) {
  return index > 0 ? arr[index] : arr[arr.length + index];
}

function anagrams(wordOne, wordTwo) {
  const sortedCharactersOne = wordOne.split('').sort();
  const sortedCharactersTwo = wordTwo.split('').sort();

  return sortedCharactersOne.every((c, i) => c === sortedCharactersTwo[i]);
}

/*
 * This solution is O(n) but likely has a much bigger constant factor than the O(nlogn) sort-based solution above.
 */
function anagramsLinearTime(wordOne, wordTwo) {
  function countCharacters(str) {
    return str.split('').reduce((map, x) => map.set(x, (map.get(x) || 0) + 1), new Map());
  }

  const countsOne = countCharacters(wordOne);
  const countsTwo = countCharacters(wordTwo);

  if (countsOne.size !== countsTwo.size) return false;

  for (const [key, value] of countsOne) {
    if (countsTwo.get(key) !== value) return false;
  }

  return true;
}

function fizzBuzz(number) {
  const fizzBuzzNumbers = [];
  for (let i = 1; i <= number; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    fizzBuzzNumbers.push(output || i);
  }
  return fizzBuzzNumbers;
}

function multiplesOfN(n) {
  const multiples = [];
  for (let i = 1; i <= 50; i++) {
    if (i % n === 0) multiples.push(i);
  }
  return multiples;
}

function addPunctuation(punctuation) {
  return (str) => str + punctuation;
}

function fibonacci(n, memo) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  if (!memo) memo = new Map();
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function rootDigits(n) {
  const digits = n.toString().split('');
  const numbers = digits.map(d => +d);
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum.toString().length > 1 ? rootDigits(sum) : sum;
}

module.exports = {
  reverseSentence,
  titleCase,
  at,
  anagrams,
  fizzBuzz,
  multiplesOfN,
  addPunctuation,
  fibonacci,
  rootDigits,
};
