let legalDirections = ['north', 'east','south','west'];

class Robot {
  constructor() {
    this.bearing = 'north';
    this.coordinates = [0,0];
  }

  place(obj) {
    if (obj.x)         this.coordinates[0] = obj.x;
    if (obj.y)         this.coordinates[1] = obj.y;
    if (obj.direction) this.bearing = obj.direction;
  }

  at(x, y) {
    this.coordinates[0] = x;
    this.coordinates[1] = y;
  }

  orient(direction) {
    if (legalDirections.indexOf(direction) < 0) {
      throw new Error('Invalid Robot Bearing');
    }

    this.bearing = direction;
  }

  instructions(string) {
    let result = string.split('').map(x => {
      if      (x === 'L') return 'turnLeft'
      else if (x === 'R') return 'turnRight'
      else if (x === 'A') return 'advance'
      else return;
    });

    return result;
  }

  evaluate(string) {
    this.instructions(string).forEach(fun => {
      if (fun) eval('this.' + fun + '()');
    });
  }

  turnLeft() {
    let index = legalDirections.indexOf(this.bearing);

    if (index === 0) {
      index = legalDirections.length;
    }

    this.bearing = legalDirections[index - 1];
  }

  turnRight() {
    let index = legalDirections.indexOf(this.bearing);

    if (index === legalDirections.length-1) {
      index = -1;
    }

    this.bearing = legalDirections[index + 1];
  }

  advance() {
    switch (this.bearing) {
      case 'north':
        this.at(this.coordinates[0], this.coordinates[1] + 1);
        break;
      case 'east':
        this.at(this.coordinates[0] + 1, this.coordinates[1]);
        break;
      case 'south':
        this.at(this.coordinates[0], this.coordinates[1] - 1);
        break;
      case 'west':
        this.at(this.coordinates[0] - 1, this.coordinates[1]);
        break;
      default:
        throw new Error('Robot has illegal bearing');
    }
  }
}

module.exports = Robot;
