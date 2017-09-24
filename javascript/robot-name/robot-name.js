//Global storage of names
nameDb = {};

class RobotName {
  constructor() {
    this.name = '';
    this.reset();
  }
}

RobotName.prototype.reset = function() {
  this.name = '';
  let newName = generateName();
  if(nameDb[newName]) {
    this.reset();
    return;
  } else {
    nameDb[newName] = true;
    this.name = newName;
  }
}

function generateName() {
  let name = "";
  let alph = "ABCDEFGHIJKLMNOPQRSTUVXYZ"

  for (let i = 0; i < 5; i++) {
    if (i < 2) {
      name += alph.charAt(Math.floor(Math.random() * alph.length));
      continue;
    }
    name += Math.floor(Math.random()*9).toString();
  }
  return name;
}

module.exports = RobotName;
