"use strict";
class Obstacle {
    constructor(x, y, width, height, speed, type) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.type = type;
        this.frameX = 0;
        this.frameY = 0;
        this.randomise = Math.floor(Math.random() * 30 + 40);
        this.carType = (Math.floor(Math.random() * numberOfCars));
    }
    draw() {
        // Add image vật cản
        if (this.type === 'turtle') {
            if (frame % this.randomise === 0) {
                if (this.frameX >= 1) {
                    this.frameX = 0;
                }
                else {
                    this.frameX++;
                }
            }
            ctx1 === null || ctx1 === void 0 ? void 0 : ctx1.drawImage(turtle, this.frameX * 70, 210, 70, 70, this.x, this.y, this.width, this.height);
        }
        else if (this.type === 'log') {
            ctx1 === null || ctx1 === void 0 ? void 0 : ctx1.drawImage(log, this.x, this.y, this.width, this.height);
        }
        else {
            ctx2 === null || ctx2 === void 0 ? void 0 : ctx2.drawImage(car, this.frameX * 300, this.carType * 230, 270, 200, this.x, this.y - 12, this.width, this.height);
        }
        // ctx3.fillStyle = 'red'
        // ctx3.fillRect(this.x,this.y, this.width,this.height);
    }
    update() {
        this.x += this.speed * gameSpeed;
        if (this.speed > 0) {
            if (this.x > canvas.width) {
                this.x = 0 - this.width;
                this.carType = (Math.floor(Math.random() * numberOfCars));
            }
        }
        else {
            this.frameX = 1;
            if (this.x < -this.width) {
                this.x = canvas.width + this.width;
                this.carType = (Math.floor(Math.random() * numberOfCars));
            }
        }
    }
}
function initObstacle() {
    // lane 1
    for (let i = 0; i < 2; i++) {
        let x = i * 350;
        let car = new Obstacle(x, canvas.height - grid * 2 - 20, grid * 2, grid, 1, 'car');
        carsArray.push(car);
    }
    // lane 2
    for (let i = 0; i < 2; i++) {
        let x = i * 300;
        let car = new Obstacle(x, canvas.height - grid * 3 - 20, grid * 2, grid, -2, 'car');
        carsArray.push(car);
    }
    // lane 3
    for (let i = 0; i < 2; i++) {
        let x = i * 400;
        let car = new Obstacle(x, canvas.height - grid * 4 - 20, grid * 2, grid, 2, 'car');
        carsArray.push(car);
    }
    // lane 4
    for (let i = 0; i < 2; i++) {
        let x = i * 350;
        let log = new Obstacle(x, canvas.height - grid * 5 - 30, grid * 2, grid, -2, 'log');
        logsArray.push(log);
    }
    // lane 5
    for (let i = 0; i < 3; i++) {
        let x = i * 200;
        let turtle = new Obstacle(x, canvas.height - grid * 6 - 20, grid, grid, 1, 'turtle');
        logsArray.push(turtle);
    }
}
initObstacle();
function handleObstacle() {
    for (let i = 0; i < carsArray.length; i++) {
        carsArray[i].update();
        carsArray[i].draw();
    }
    for (let i = 0; i < logsArray.length; i++) {
        logsArray[i].update();
        logsArray[i].draw();
    }
    // xử lý va chạm với xe
    for (let i = 0; i < carsArray.length; i++) {
        if (collision(frogger, carsArray[i])) {
            // console.log('die');
            ctx4 === null || ctx4 === void 0 ? void 0 : ctx4.drawImage(collisions, 0, 100, 100, 100, frogger.x - 23, frogger.y - 30, 100, 100);
            resetGame();
        }
    }
    // Xử lý va chạm nước
    if (frogger.y > 100 && frogger.y < 250) {
        safe = false;
        for (let i = 0; i < logsArray.length; i++) {
            if (collision(frogger, logsArray[i])) {
                frogger.x += logsArray[i].speed;
                safe = true;
            }
        }
        if (!safe) {
            for (let i = 0; i < 20; i++) {
                ripplesArray.unshift(new Particle(frogger.x, frogger.y));
            }
            ctx4 === null || ctx4 === void 0 ? void 0 : ctx4.drawImage(collisions, 0, 0, 100, 100, frogger.x - 23, frogger.y - 30, 100, 100);
            resetGame();
        }
    }
}
