// setup() is called once at page-load
let triColor;
let previousMin;

function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
    triColor = color(118, 215, 196);
    previousMin = minute();  
}

// draw() is called 60 times per second
function draw() {
  
  
    let hr = hour();
    let min = minute();
    let sec = second();

    background(225);
    textSize(30);
    //fill(180);
    fill(118,215,196);
    text(hr, 10, 30);
    //fill(100);
    fill(118,215,196);
    text(min, 10, 60);
    //fill(0);
    fill(118,215,196);
    text(sec, 10, 90);
  
  
    if (min !== previousMin) {
        triColor = color(random(255), random(255), random(255));
        previousMin = min;
    }
  
  
  //draw star -second
  background(30);
  push();
  translate(width * 0.8, height * 0.5);
  rotate(radians(sec * 6)); // Rotate based on seconds
  star(0, 0, 30, 70, 5);
  pop();



  //draw triangle - minute
  push();
  translate(width * 0.2, height * 0.5);
  fill(triColor)
  rotate(radians(min * 6 + 120));
  polygon(0, 0, 82, 3);
  pop();
  
  
  
  
  //draw arc -hour
  drawArcs(hr);
  fill(118,215,196);
  arc(400, 300, 280, 280, PI, TWO_PI);
  
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function drawArcs(hr) {
    for (let i = 0; i < hr; i++) {
        fill(19, 141, 117); 
        arc(150 + i * 60, height * 0.8, 80, 80, PI, 0); // Adjust position based on i
    }
}


