var vowelCount = require('../js/vowel-count.js');

describe('vowel-count', function () {
  // Cases:
  // single-vowel
  // all vowels
  // duplicate vowels
  // no vowels
  // empty strings
  // null or undefined arguments

  it('Handles a single vowel', function () {
    expect(vowelCount('hi')).toEqual(1);
  });
});
