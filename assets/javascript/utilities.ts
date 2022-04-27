function start() {
    ctx1?.clearRect(0, 0, canvas.width, canvas.height);
    ctx2?.clearRect(0, 0, canvas.width, canvas.height);
    ctx3?.clearRect(0, 0, canvas.width, canvas.height);
    ctx4?.clearRect(0, 0, canvas.width, canvas.height);
    ctx5?.clearRect(0, 0, canvas.width, canvas.height);

    handleParticle();
    ctx2?.drawImage(background_main,0,0,canvas.width,canvas.height);
    handleRipples();
    frogger.draw();
    frogger.update();
    frame++;
    handleObstacle();
    requestAnimationFrame(start);
}

start();

// LẮNG NGHE SỰ KIỆN TỪ KEY CỦA BÀN PHÍM

window.addEventListener('keydown', function(e) {
    keys = [];
    keys[e.key] = true;

    // console.log(e.Keycode);
    // console.log(e.key);

    if(keys['ArrowLeft'] || keys['ArrowUp'] || keys['ArrowRight'] || keys['ArrowDown']){
        frogger.jump();
    }
})

window.addEventListener('keyup', function(e) {
    // console.log('up');
    delete keys[e.key];
    frogger.moving = false;
    frogger.frameX = 0;
})

function scored(){
    score+=5;
    gameSpeed += 0.05;
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;
}

function scoreHandler () {
    const score_block = document.querySelector('#score');
    const speed_block = document.querySelector('#speed');
    const collisions_block = document.querySelector('#collisions_block');
    if(score_block){
        score_block.innerHTML = `Score : ${score}`;
    }
    if(speed_block){
        speed_block.innerHTML = `Speed : ${gameSpeed.toFixed(2)}`;
    }
    if(collisions_block){
        collisions_block.innerHTML = `Death : ${collisionsCount}`;
    }
}

// collision


function collision(frog : any,barrier : any){

    // frog : x,y là vị trí di chuyển của con ếch
    // barrier : x,y vị trí vật cản di chuyển

    return !(
        frog.x > barrier.x + barrier.width || //trước
        frog.x + frog.width < barrier.x ||  // sau
        frog.y > barrier.y + barrier.height || // trên
        frog.y + frog.height < barrier.y) //  dưới
} 


function resetGame(){
    score = 0;
    gameSpeed = 1;
    frogger.x = canvas.width/2 - frogger.width/2;
    frogger.y = canvas.height - frogger.height - 40;
    collisionsCount++;
    scoreHandler();
}