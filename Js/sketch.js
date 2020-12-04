var clock;

function setup() {
  var canvas = createCanvas(1020,820);
  angleMode(DEGREES);
  clock = new Clock(500,260,20,20);
}

function draw() {
  background(0,0,0);
  
  translate(500,260)
  clock.display();
  rotate (-90);

  let hr = hour();
  let min = minute();
  let sec = second();
  
  strokeWeight(8);
  stroke(28, 219, 193);
  noFill();
  let end = map(sec,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  stroke(140, 118, 237);
  let end2 = map(min,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  stroke(46, 118, 211);
  let end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);
  
  push();
  rotate(end);
  stroke(28, 219, 193);
  line(0,0,150,0);
  pop();
  
  
  push();
  rotate(end2);
  stroke(140, 118, 237);
  line(0,0,105,0);
  pop();
  
  push();
  rotate(end3);
  stroke(46, 118, 211);
  line(0,0,50,0);
  pop();
  
  stroke(0,0,0);
  point (0,0);

  


  
  drawSprites();
  
}
