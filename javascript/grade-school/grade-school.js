class GradeSchool {
  constructor() {
    this.db = {};
  }
}

GradeSchool.prototype.roster = function () {
  let temp = this.db;
  return temp;
};

GradeSchool.prototype.add = function (name, grade) {
  if (this.db.hasOwnProperty(grade)) {
    this.db[grade].push(name);
    this.db[grade].sort();
  } else {
    this.db[grade] = [name]
  }
};

GradeSchool.prototype.grade = function (grade) {
  if (this.db.hasOwnProperty(grade)) {
    let alphabetical = this.db[grade];
    alphabetical.sort();
    return alphabetical;
  } else {
    return [];
  }
};

module.exports = GradeSchool;
