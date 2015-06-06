module.exports = function (str) {
  return /^\(?[\d]{3}[\)-\.]?\s?[\d]{3}[-\.]?[\d]{4}$/.test(str);
};