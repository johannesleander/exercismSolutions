class Bob {
  constructor() {}
}

Bob.prototype.hey = function(q) {
  var a = q.replace(/\s+$/g,"");

  switch (true) {
    //All uppercase & contains uppercase letters (javascript counts numbers as uppercase)
    case a === a.toUpperCase() && /[A-Z]/.test(a):
      return "Whoa, chill out!";
      break;
    //last character is ?
    case a.slice(-1) == "?":
      return "Sure.";
      break;
    //contains non-uppercase characters (not very robust)
    case /[a-z0-9]/.test(a):
      return "Whatever."
      break;
    default:
      return "Fine. Be that way!";
  }
};

module.exports = Bob;
