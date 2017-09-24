var PrimeFactors = require('./prime-factors');

describe('PrimeFactors', function() {

  it('returns an empty array for 1', function() {
    expect((new PrimeFactors).for(1)).toEqual([]);
  });

  it('factors 2', function() {
    expect((new PrimeFactors).for(2)).toEqual([2]);
  });

  it('factors 3', function() {
    expect((new PrimeFactors).for(3)).toEqual([3]);
  });

  it('factors 4', function() {
    expect((new PrimeFactors).for(4)).toEqual([2, 2]);
  });

  it('factors 6', function() {
    expect((new PrimeFactors).for(6)).toEqual([2, 3]);
  });

  it('factors 8', function() {
    expect((new PrimeFactors).for(8)).toEqual([2, 2, 2]);
  });

  it('factors 9', function() {
    expect((new PrimeFactors).for(9)).toEqual([3, 3]);
  });

  it('factors 27', function() {
    expect((new PrimeFactors).for(27)).toEqual([3, 3, 3]);
  });

  it('factors 625', function() {
    expect((new PrimeFactors).for(625)).toEqual([5, 5, 5, 5]);
  });

  it('factors 901255', function() {
    expect((new PrimeFactors).for(901255)).toEqual([5, 17, 23, 461]);
  });

  it('factors 93819012551', function() {
    expect((new PrimeFactors).for(93819012551)).toEqual([11, 9539, 894119]);
  });

});
