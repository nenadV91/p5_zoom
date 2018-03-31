class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  show() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, 6, 6);
  }
  
  static create(count) {
    return Array.from(Array(count), () => {
      const x = random(-2000, width + 2000);
      const y = random(-2000, height + 2000);
      return new this(x, y);
    })
  }
}