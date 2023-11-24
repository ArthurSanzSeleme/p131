function preload()
{
img = loadImage('OIP.jpg');
}

function setup()
{
   canvas = createCanvas(640,420);
   canvas.center(); 
}
function  draw() 
{
image(img, 0, 0, 640, 420);
fill("#FF0000");
text("garrafas", 75,75);
noFill();
stroke("#FF0000");
rect(30,60,450,350);
}


