olinha = 20;
let yBolinha = 20;
let diametro = 20;
let raio = diametro/2;
let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;
let xRaquete = 5;
let yRaquete = 150;
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let colidiu = false;
let trilha;
let raquetada;
let ponto;
function preload(){
  trilha = loadSound("trilha.mp3");
    trilha.loop();
  raquetada= loadSound("raquetada.mp3");
  ponto= loadSound("ponto.mp3");
}
function setup() {
   trilha.loop();
  createCanvas(600, 400);
}

function draw() {
 
  background("hsla(0,0%,0%,0.57)");
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  mostraRaqueteOponente();
  movimentaRaquete();
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaquete,yRaquete);
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
}

function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
 
}function m
