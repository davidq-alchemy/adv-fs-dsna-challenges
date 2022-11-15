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

module.exports = {
  reverseSentence,
  titleCase,
  at,
};
