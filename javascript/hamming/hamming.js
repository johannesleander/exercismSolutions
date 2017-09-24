class Hamming {
  constructor() {
  }

  compute(dna_1, dna_2) {
    if (dna_1.length !== dna_2.length) {
      throw new Error('DNA strands must be of equal length.')
    }
    let distance = 0;
    for (let i = 0; i < dna_1.length; i++) {
      distance += dna_1[i] === dna_2[i] ? 0 : 1;
    }
    return distance;
  }
}

module.exports = Hamming;
