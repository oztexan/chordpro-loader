const chordprojs = require('chordprojs');

module.exports = (chordpro) => {
  this.cacheable = true;

  return JSON.stringify(chordprojs.format(chordpro));
};
