var divisionHeight = 300

function setup() {
  createCanvas(480,800)
  division1 = new Division(0, height-300/2, 10, 300)
  division2 = new Division(80, height-300/2, 10, 300)
  division3 = new Division(160, height-300/2, 10, 300)
  division4 = new Division(240, height-300/2, 10, 300)
  division5 = new Division(320, height-300/2, 10, 300)
  division6 = new Division(400, height-300/2, 10, 300)
  division7 = new Division(480, height-300/2, 10, 300)
}

function draw() {
  background(255,255,255);
  
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  drawSprites();
}