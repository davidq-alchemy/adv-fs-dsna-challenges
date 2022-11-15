function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

function titleCase(str) {
  return str.toLowerCase().replace(/(^|(?<=\s))\w/g, c => c.toUpperCase());
}

module.exports = {
  reverseSentence,
  titleCase,
};
