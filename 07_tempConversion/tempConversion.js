const ftoc = function(fTemp) {
  let result = (fTemp * 1.8) + 32;
  return result;
};

const ctof = function(cTemp) {
  let result = (cTemp - 32) / 1.8;
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
