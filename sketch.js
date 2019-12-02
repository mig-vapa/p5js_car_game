var c;
var time;

function setup() {
    createCanvas(960, 540);
    c = new Car();
    time = (new Date()).getTime() / 1000;
}

function draw() {
    background(200);
    time = (new Date()).getTime() / 1000;
    c.update();
    c.draw();
}
// var defAccel = 80;

// function keyPressed() {
// if (keyCode === UP_ARROW) {
//     c.addVector(0, -defAccel);
// } else if (keyCode === DOWN_ARROW) {
//     c.addVector(0, defAccel);
// } else if (keyCode === RIGHT_ARROW) {
//     c.addVector(defAccel, 0);
// } else if (keyCode === LEFT_ARROW) {
//     c.addVector(-defAccel, 0);
// }
// }