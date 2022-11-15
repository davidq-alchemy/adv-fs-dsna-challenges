const {
  reverseSentence,
  titleCase,
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
});
