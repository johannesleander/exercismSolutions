class PascalsTriangle {
  constructor(input) {
    this.rows = calculateRows(input);
    this.lastRow = this.rows[this.rows.length-1];
  }
}

let calculateRows = (input) => {
  let triangle = [];

  for (var i = 0; i < input; i++) {
    let row = [];

    for (var j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        row.push(1);
        continue;
      }
      row.push(
        triangle[i-1][j-1] + triangle[i-1][j]
    )}
    triangle.push(row);
  }
  return triangle;
}

module.exports = PascalsTriangle;
