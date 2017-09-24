// TODO: submit
var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {

  let result = dna.split("").map((x) => {
    try {
      switch (x) {
        case 'C':
          return 'G'
          break;
        case 'G':
          return 'C'
          break;
        case 'A':
          return 'U'
          break;
        case 'T':
          return 'A'
          break;
        default:
          throw new Error('Invalid input');
      }
    }
    catch (err) {
      throw err;
    };
  }).join("");

  return result;
}

module.exports = DnaTranscriber;
