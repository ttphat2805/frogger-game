"use strict";
// FROGGER
class Frogger {
    constructor() {
        this.spriteWidth = 250;
        this.spriteHeight = 250;
        // CHIỀU CAO CHIỀU RỘNG CỦA CON ẾCH BẰNG KÍCH THƯỚC 1 VÙNG CHIA CHO 5
        this.width = this.spriteWidth / 5;
        this.height = this.spriteHeight / 5;
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height - this.height - 40;
        this.moving = false;
        this.frameX = 0;
        this.frameY = 0;
    }
    update() {
        // console.log('update');
        // LOGIC
        if (keys['ArrowUp']) { // Mũi tên lên 
            if (this.moving === false) {
                this.y -= 40;
                this.moving = true;
                this.frameX = 1;
                this.frameY = 0;
            }
        }
        if (keys['ArrowDown']) { // Mũi tên xuống  
            // Check không cho con ếch đi ra ngoài màn hình (bên dưới)
            if (this.moving === false && this.y < canvas.height - this.height * 2) {
                this.y += 40;
                this.moving = true;
                this.frameY = 3;
            }
        }
        if (keys['ArrowLeft']) { // Mũi tên trái  
            // Check không cho con ếch đi ra ngoài màn hình (bên trái)
            if (this.moving === false && this.x > this.width * 2) {
                this.x -= 40;
                this.moving = true;
                this.frameY = 2;
            }
        }
        if (keys['ArrowRight']) { // Mũi tên phải  
            // Check không cho con ếch đi ra ngoài màn hình (bên phải)
            if (this.moving === false && this.x < canvas.width - this.width * 2) {
                this.x += 40;
                this.moving = true;
                this.frameY = 1;
            }
        }
        // NẾU CON ẾCH ĐI LÊN TRÊN THÌ TÍNH ĐIỂM ->> QUA MÀN
        if (this.y < 0) {
            scored();
            scoreHandler();
        }
    }
    draw() {
        // VẼ CON ẾCH 
        ctx3 === null || ctx3 === void 0 ? void 0 : ctx3.drawImage(froggerImage, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.x - 25, this.y - 25, this.width * 2, this.height * 2);
    }
    jump() {
        if (this.moving === false) {
            this.frameX = 1;
        }
    }
}
const frogger = new Frogger();
