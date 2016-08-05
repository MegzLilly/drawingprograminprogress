function circle (x, y, diameter) {
  
  ellipse (x, y, diameter, diameter);
  
}


function line (x1, y1, x2, y2) {
  
  if (x1 > x2) {
    
    line (10, 10, 0, 10);
    
  } else {
    
    line (x1, y1, x2, y2);
    
  }
  
}

var r = 0;
var g = 25;
var b = 200;


function setup() {
  
  createCanvas (640, 480);
  fill (255, 255, 0);
  line (25, 20, 35, 85);
  background ('white');
  
}


function draw() {
  
  r = g + 0.15;
  g = r + 0.35;
  noStroke ();
  fill (r, g, b);
  
  if (r > 255) {
    
    r = g - 0.15;
    
  } 
  if (mouseIsPressed) {
    fill (255, 255, 255);
    ellipse (mouseX, mouseY, 35, 35);
    if (mouseIsPressed == false) {
      fill (r, g, b);
      
    }
  }
  
  
  
}