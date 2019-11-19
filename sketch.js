var x1=500;
var w = window.innerWidth;
var h = window.innerHeight;
var x2=414;
var y=90;

function setup() {
    createCanvas(w,h);
}


function draw() {
  background("#d9e6ec");
    
    noStroke();  //the rectangle；
    fill(60,140,200);
    rect(100,90,100,300);
    
    stroke(150,150,150);strokeWeight(1);  //the circle;
    fill("#fcdded");
    ellipse(x1,240,300,300);
    x1=x1+10;
    if(x1>w){x1=w;};
    
    stroke(256,256,256); strokeWeight(50);  //"HEllo" Text
    fill("#fcdded");
    textSize (108); textFont ("monospace")
    text ("HELLO",900,240);
    
    stroke(256,256,256); strokeWeight(12);    //The Line
    line(208,385,x2,y);
    x2=x2+1.5661;
    y=y+3;
    if(y>385){y=385;} 
    if(x2>567.5){x2=567.5;} //else{yPOS=yPOS+1;zPOS=zPOS+0.5;}
    
    noStroke();  //the mouse;
    fill (60,170,170);
    ellipse(mouseX,mouseY,30,30);

}