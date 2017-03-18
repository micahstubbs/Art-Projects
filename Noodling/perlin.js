// from http://genekogan.com/code/p5js-perlin-noise/

/* Bezier movement
var t;

function setup() {
  createCanvas(400, 400);
  stroke(0, 18);
  noFill();
  t = 0;
}

function draw() {
  var x1 = width * noise(t + 15);
  var x2 = width * noise(t + 25);
  var x3 = width * noise(t + 35);
  var x4 = width * noise(t + 45);
  var y1 = height * noise(t + 55);
  var y2 = height * noise(t + 65);
  var y3 = height * noise(t + 75);
  var y4 = height * noise(t + 85);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t += 0.005;

  // clear the background every 500 frames using mod (%) operator
  if (frameCount % 500 == 0) {
	background(255);
  }
}
*/

/* 2D Noise

function setup() {
  	createCanvas(400, 400);
	noStroke();
}

function draw() {
	for (var x = 0; x < width; x+=10) {
		for (var y = 0; y < height; y+=10) {
			var c = 255 * noise(0.01 * x, 0.01 * y);
			fill(c);
			rect(x, y, 10, 10);
		}
  	}
}

*/
