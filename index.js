
let canvas, circles;
const controls = {
  view: {x: 0, y: 0, zoom: 1},
  viewPos: { prevX: null,  prevY: null,  isDragging: false },
}

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.mouseWheel(e => Controls.zoom(controls).worldZoom(e))
  circles = Circle.create(500)
}

function draw() {
  background(color(11, 15, 26));
  translate(controls.view.x, controls.view.y);
  scale(controls.view.zoom)
  circles.forEach(circle => circle.show());
}

window.mousePressed = e => Controls.move(controls).mousePressed(e)
window.mouseDragged = e => Controls.move(controls).mouseDragged(e);
window.mouseReleased = e => Controls.move(controls).mouseReleased(e)

