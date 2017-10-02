function setup() {
  createCanvas(800,600);
}

function draw() {
  
//wheel
  fill(255,251,102);
  noStroke();
  ellipse(240,540,95,95);

//body
  noFill();
  strokeWeight(3);
  stroke(124,124,124);
  rect(240,270,10,90);
  rect(250,270,10,90);
  
  fill(0,0,0);
  noStroke();
  rect(170,355,135,180);
  
  fill(255,251,102);
  noStroke();
  rect(170,380,135,10);
  
//head lines
  strokeWeight(2);
  stroke(124,124,124);
  line(200,200,250,250);
  line(310,100,250,250);
  line(340,270,250,250);
  
//head
  noStroke();
  fill(0,0,0);
  ellipse(250,250,110,110);
  
  noStroke();
  fill(255,255,255);
  ellipse(260,240,40,40);
  
  fill(0,0,0);
  ellipse(260,240,8,8);
  
  fill(255,251,102);
  ellipse(230,230,10,10);
  ellipse(265,210,8,8);
  ellipse(285,255,6,6);
  


  
  
}