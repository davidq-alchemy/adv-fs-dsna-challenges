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

module.exports = {
  reverseSentence,
  titleCase,
  at,
  anagrams,
};
