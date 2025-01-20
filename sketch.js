let clickPositions = [];
let keyPresses = [];
let mouseMovements = [];

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  background(220);
  // Draw the previously stored click positions
  for (let i = 0; i < clickPositions.length; i++) {
    let pos = clickPositions[i];
    fill(255, 0, 0);
    ellipse(pos.x, pos.y, 20, 20);
  }
  // Display the most recent keyboard key press
  if (keyPresses.length > 0) {
    let lastKeyPress = keyPresses[keyPresses.length - 1];
    fill(0, 255, 0);
    textSize(20);
    text(lastKeyPress, 10, 30);
  }
  // Draw mouse movement trajectory
  for (let i = 0; i < mouseMovements.length; i++) {
    let move = mouseMovements[i];
    fill(0, 0, 255);
    rect(move.x, move.y, 5, 5);
  }
}

function mouseClicked() {
  // Record the mouse click position
  let click = { x: mouseX, y: mouseY };
  clickPositions.push(click);
}

function keyPressed() {
  // Record keyboard keys
  keyPresses.push(key);
}

function mouseMoved() {
  // Record mouse movement position
  let move = { x: mouseX, y: mouseY };
  mouseMovements.push(move);
}