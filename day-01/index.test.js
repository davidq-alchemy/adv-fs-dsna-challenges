const {
  reverseSentence,
  titleCase,
  at,
  anagrams,
  fizzBuzz,
  multiplesOfN,
  addPunctuation,
} = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });

  describe('titleCase', () => {
    expect(titleCase('alchemy ROCKS goLD')).toBe('Alchemy Rocks Gold');
  });

  describe('at', () => {
    expect(at(['a', 'b', 'c', 'd', 'e'], 1)).toBe('b');
    expect(at(['a', 'b', 'c', 'd', 'e'], -2)).toBe('d');
  });

  describe('anagrams', () => {
    expect(anagrams('superintended', 'unpredestined')).toBe(true);
    expect(anagrams('pictorialness', 'documentarily')).toBe(false);
    expect(anagrams('ab', 'aabb')).toBe(false);
  });

  describe('fizzBuzz', () => {
    expect(fizzBuzz(16)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16]);
  });

  describe('multiplesOfN', () => {
    expect(multiplesOfN(5)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
    expect(multiplesOfN(25)).toEqual([25, 50]);
    expect(multiplesOfN(75)).toEqual([]);
  });

  describe('addPunctuation', () => {
    const addExcitement = addPunctuation('!!!');
    expect(addExcitement('Hello World')).toEqual('Hello World!!!');
    expect(addExcitement('Pokemon, catch em all')).toEqual('Pokemon, catch em all!!!');

    const addUnsure = addPunctuation('?!?');
    expect(addUnsure('Hello World')).toEqual('Hello World?!?');
    expect(addUnsure('Pokemon, catch em all')).toEqual('Pokemon, catch em all?!?');
  });
});
