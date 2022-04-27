"use strict";
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.x = x + 25;
        this.y = y + 25;
        this.radius = Math.random() * 20 + 1;
        this.opacity = 1;
        this.directionX = Math.random() * 1 - 0.5;
        this.directionY = Math.random() * 1 - 0.5;
    }
    draw() {
        ctx3.fillStyle = `rgba(150, 150 , 150, ${this.opacity})`;
        ctx3 === null || ctx3 === void 0 ? void 0 : ctx3.beginPath();
        ctx3 === null || ctx3 === void 0 ? void 0 : ctx3.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx3 === null || ctx3 === void 0 ? void 0 : ctx3.fill();
        ctx3 === null || ctx3 === void 0 ? void 0 : ctx3.closePath();
    }
    update() {
        this.x += this.directionX;
        this.y += this.directionY;
        if (this.opacity > 0.1) {
            this.opacity -= 0.9;
        }
        if (this.radius > 0.15) {
            this.radius -= 0.14;
        }
    }
    // RIPPLE
    drawRipple() {
        ctx3.strokeStyle = `rgba(255, 255 , 255, ${this.opacity})`;
        ctx3 === null || ctx3 === void 0 ? void 0 : ctx3.beginPath();
        ctx3 === null || ctx3 === void 0 ? void 0 : ctx3.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx3 === null || ctx3 === void 0 ? void 0 : ctx3.stroke();
        ctx3 === null || ctx3 === void 0 ? void 0 : ctx3.closePath();
    }
    updateRipple() {
        if (this.opacity > 0) {
            this.opacity -= 0.01;
            this.x -= 0.03;
            this.y -= 0.03;
        }
        if (this.radius < 50) {
            this.radius += 0.4;
        }
    }
}
function handleParticle() {
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    if (particles.length > maxParticles) {
        for (let i = 0; i < 30; i++) {
            particles.pop();
        }
    }
    if ((keys['ArrowLeft'] || keys['ArrowUp'] || keys['ArrowRight'] || keys['ArrowDown']) && frogger.y > 250 && particles.length < maxParticles + 10) {
        for (let i = 0; i < 10; i++) {
            particles.unshift(new Particle(frogger.x, frogger.y));
        }
    }
}
function handleRipples() {
    for (let i = 0; i < ripplesArray.length; i++) {
        ripplesArray[i].updateRipple();
        ripplesArray[i].drawRipple();
    }
    if (ripplesArray.length > 30) {
        for (let i = 0; i < 5; i++) {
            ripplesArray.pop();
        }
    }
}
