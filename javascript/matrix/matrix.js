// TODO: Unfinished

class Matrix {

  constructor(input) {
    this.input = input;
    this.rows = createRows(this.input);
    this.columns = createColumns(this.rows);

    console.log("_");
  }
}

function createRows(input) {
  let rawRows = input.split("\n");
  let rows = [];

  for (var i = 0; i < rawRows.length; i++) {
    let row = rawRows[i].split(" ").map(Number);
    rows.push(row);
  }
  return rows;
}

function createColumns(rows) {
  let columns = [];
  console.log("Expected rows: " + rows.length);
  for (var i = 0; i < rows.length; i++) {
    let column = [];
    console.log(i);
    for (var j = 0; j < rows[i].length; j++) {
      column.push(rows[j][i]);
    }
    columns.push(column);
  }
  return columns;
}



module.exports = Matrix;
