let input, button, screen = 0;
let sz;
var font
function preload(){
  // font = loadFont("assets/iCielBCDowntown-Regular.otf")
  font = loadFont("assets/iCiel SamsungSharpSans-Bold-UTF8.ttf")
  
}
function enableFont(){
  textFont(font,16);
}
function setup() {
  createCanvas(400, 400);
  enableFont()
  background(220);
  startscreen();
  //textSize(15);
  text("Welcome to the hexagon minesweeper",40,120)
  text("Click to open a hexagon",40,140)
  text("Right-click to flag a hexagon",40,160)
  text("ENTER HEXAGON'S EDGE LENGTH: ", 40, 180);
}

function startscreen() {
  background(220);
  input = createInput();
  input.position(100, 200);
  button = createButton('PLAY');
  button.position(input.x + input.width, input.y);
  button.mousePressed(getSetting);
}

function getSetting() {
  sz = int(input.value());
  button.remove();
  input.remove();
  if (sz >= 3 && sz <= 10) {
    size = sz;
    posX = canvasSize/2 - (size-1)*hexRad*Math.sqrt(3)/2, posY = canvasSize/2 - (size-1)*hexRad*1.5;
    clear();
    init();
    draw = Pdraw;
  }
  else{
    startscreen();
    textSize(15);
    fill('red');
    text("INVALID SIZE, PLEASE RE-ENTER", 90, 180);
  }
}

function draw() {
}
