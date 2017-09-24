class Triangle {
  constructor(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  kind() {
    //Test triangle inequality
    if (this.a > (this.b + this.c)
     || this.b > (this.a + this.c)
     || this.c > (this.a + this.b)) {
      throw new Error();
    }
    //Test positive sides
    if (this.a <= 0
     || this.b <= 0
     || this.c <= 0) {
      throw new Error();
    }
    //Test all equal sides
    if (this.a === this.b && this.b === this.c) {
      return 'equilateral';
    } else
    //Test two equal sides
    if (this.a === this.b
     || this.b === this.c
     || this.a === this.c) {
      return 'isosceles';
    } else {
    //All sides inequal
      return 'scalene';
    }
    return;
  }
}
module.exports = Triangle;
