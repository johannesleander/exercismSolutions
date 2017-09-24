class SpaceAge {
  constructor(input) {
    this.seconds = input;
    this.earthYearSeconds = 31557600;
  }
}

function getEarthAge(earthYears = 1) {
  return (this.seconds / (this.earthYearSeconds * earthYears)).toFixed(2);
}

//Earth: orbital period 365.25 Earth days, or 31557600 seconds
SpaceAge.prototype.onEarth = function() {
  return parseFloat((this.seconds / (this.earthYearSeconds * 1)).toFixed(2));
}
//Mercury: orbital period 0.2408467 Earth years
SpaceAge.prototype.onMercury = function() {
  return parseFloat((this.seconds / (this.earthYearSeconds * 0.2408467)).toFixed(2));
}
//Venus: orbital period 0.61519726 Earth years
SpaceAge.prototype.onVenus = function() {
  return parseFloat((this.seconds / (this.earthYearSeconds * 0.61519726)).toFixed(2));
}
//- Mars: orbital period 1.8808158 Earth years
SpaceAge.prototype.onMars = function() {
  return parseFloat((this.seconds / (this.earthYearSeconds * 1.8808158)).toFixed(2));
}
//- Jupiter: orbital period 11.862615 Earth years
SpaceAge.prototype.onJupiter = function() {
  return parseFloat((this.seconds / (this.earthYearSeconds * 11.862615)).toFixed(2));
}
//- Saturn: orbital period 29.447498 Earth years
SpaceAge.prototype.onSaturn = function() {
  return parseFloat((this.seconds / (this.earthYearSeconds * 29.447498)).toFixed(2));
}
//Uranus: orbital period 84.016846 Earth years
SpaceAge.prototype.onUranus = function() {
  return parseFloat((this.seconds / (this.earthYearSeconds * 84.016846)).toFixed(2));
}
//Neptune: orbital period 164.79132 Earth years
SpaceAge.prototype.onNeptune = function() {
  return parseFloat((this.seconds / (this.earthYearSeconds * 164.79132)).toFixed(2));
}

module.exports = SpaceAge;
