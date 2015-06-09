module.exports = function (str) {
  var matches = (str || '').match(/[aeiou]/gi);
  
  return matches ? matches.length : 0;
};