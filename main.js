img  = "";

function setup() {
    canvas = createCanvas(600, 450);
    canvas.center();
}

function preload() {
    img = loadImage('dog_cat.jpg');
}

function draw() {
    image(img, 0, 0, 600, 450);
    textSize(20);
    text("Dog", 45, 70);
    noFill();
    stroke("#FF0000")
    square(30, 55, 400);
    square(250, 80, 400);
    text("Cat", 270, 96);
    
}