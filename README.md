# p5_zoom


Values for zoom and position are stored inside controls object and used inside draw function

```javascript
const controls = {
  view: {x: 0, y: 0, zoom: 1},
  viewPos: { prevX: null,  prevY: null,  isDragging: false },
}

function draw() {
  translate(controls.view.x, controls.view.y);
  scale(controls.view.zoom)
}
```

Initialize zoom method inside setup function and position change methods.

```javascript
function setup() {
  canvas.mouseWheel(e => Controls.zoom(controls).worldZoom(e));
}

window.mousePressed = e => Controls.move(controls).mousePressed(e)
window.mouseDragged = e => Controls.move(controls).mouseDragged(e);
window.mouseReleased = e => Controls.move(controls).mouseReleased(e)
```