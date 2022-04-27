"use strict";
//  SET UP 
// GET CANVAS
const width = window.innerWidth;
const height = window.innerHeight;
const canvas = document.querySelector('#canvas1');
const ctx1 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;
const canvas2 = document.querySelector('#canvas2');
const ctx2 = canvas2.getContext('2d');
canvas2.width = 600;
canvas2.height = 600;
const canvas3 = document.querySelector('#canvas3');
const ctx3 = canvas3.getContext('2d');
canvas3.width = 600;
canvas3.height = 600;
const canvas4 = document.querySelector('#canvas4');
const ctx4 = canvas4.getContext('2d');
canvas4.width = 600;
canvas4.height = 600;
const canvas5 = document.querySelector('#canvas5');
const ctx5 = canvas5.getContext('2d');
canvas5.width = 600;
canvas5.height = 600;
// Biến..
const grid = 80;
const jump = 100;
let score = 0;
let collisionsCount = 0;
let frame = 0;
let gameSpeed = 1;
let safe = false;
let numberOfCars = 3;
// ARR
let keys = [];
// Hiệu ứng hạt bụi
const particles = [];
const maxParticles = 300;
// Hiệu ứng gợn sóng
const ripplesArray = [];
// Vật cản : Xe
const carsArray = [];
// Vật cản : khúc cây
const logsArray = [];
// images
const froggerImage = new Image();
froggerImage.src = './assets/image/frog_spritesheet.png';
const background_main = new Image();
background_main.src = './assets/image/background_main.png';
const turtle = new Image();
turtle.src = './assets/image/turtles.png';
const log = new Image();
log.src = './assets/image/log2.png';
const car = new Image();
car.src = './assets/image/cars_game.png';
const collisions = new Image();
collisions.src = './assets/image/collisions.png';
