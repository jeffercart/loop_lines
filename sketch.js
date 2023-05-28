let ang1;
let cen;
let notas = [21, 23, 25, 29, 34, 39, 42, 46];
let osc, env, son;

function preload() {
  son = loadSound('sonido/drumx.mp3');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  env = new p5.Envelope(0.001, 0.05, 0.3, 0.2);
  osc = new p5.Oscillator("sawtooth");
  osc.start();
  osc.amp(env);
  son.setVolume(0.5);
  son.loop();
}

function draw() {
  background(0);
  
  //Amarillo
  push();
  lineaRote(0.005, 2, 186, 148, 52);
  pop();
  
  push();
  lineaRote(0.025, 3, 122, 97, 34);
  pop();
  
  push();
  lineaRote(0.05, 1, 250, 199, 70);
  pop();
  
  push();
  lineaRote(-0.1, 2, 244, 179, 63);
  pop();
  
  //Azul
  push();
  lineaRote(-0.05, 2, 43, 91, 186);
  pop();
  
  push();
  lineaRote(0.01, 2, 28, 60, 122);
  pop();
  
  push();
  lineaRote(0.03, 1, 57, 122, 250);
  pop();
  
  push();
  lineaRote(-0.025, 2, 51, 109, 225);
  pop();
  
  //Violeta
  push();
  lineaRote(-0.1, 2, 192, 52, 224);
  pop();
  
  push();
  lineaRote(-0.01, 2, 214, 57, 250);
  pop();
  
  push();
  lineaRote(0.04, 1, 105, 28, 122);
  pop();
  
  push();
  lineaRote(-0.035, 2, 160, 43, 186);
  pop();
  
  //Aqua
  push();
  lineaRote(-0.02, 2, 35, 186, 123);
  pop();
  
  push();
  lineaRote(0.1, 2, 23, 122, 81);
  pop();
  
  push();
  lineaRote(0.04, 1, 47, 250, 166);
  pop();
  
  push();
  lineaRote(-0.015, 0.75, 43, 224, 149);
  pop();
   
  push();
  lineaRote(0.025, 0.5, 255, 255, 255);
  pop();
  
  push();
  cen= mouseX*0.05;
  translate(sin(20*cen), cos(200*cen));
  strokeWeight(25-cen);
  point(width/2, height/2);
  pop();
  
  push();
  if (mouseX > width-10){
    stroke(255);
    strokeWeight(1.5);
    point(width/2, height/2);
  }pop();
  
    if (mouseIsPressed==true && mouseX < width/5) {
    osc.freq(midiToFreq(notas[2]));
    env.play();
  } else if (mouseIsPressed==true && mouseX > width/5 && mouseX < 2*width/5) {
    osc.freq(midiToFreq(notas[3]));
    env.play();
  } else if (mouseIsPressed==true && mouseX > 2*width/5 && mouseX < 3*width/5) {
    osc.freq(midiToFreq(notas[4]));
    env.play();
   } else if (mouseIsPressed==true && mouseX > 3*width/5 && mouseX < 4*width/5) {
      osc.freq(midiToFreq(notas[5]));
      env.play();
  } else if (mouseIsPressed==true && mouseX > 4*width/5) {
    osc.freq(midiToFreq(notas[6]));
    env.play();
  }
  
  
}

function lineaRote(a1, ancho, r, g, b) {
  ang1= frameCount*a1*(mouseX*0.009);
  translate(width/2, height/2);
  strokeWeight(ancho);
  stroke(mouseY*0.3, g, b);
  rotate(ang1);
  line (-width/5, -height/4, width/5, height/4);
  }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}