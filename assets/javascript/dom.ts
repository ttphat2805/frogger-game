function changeBackground() : void {
    const btnPlayGame = document.querySelector('.btnPlayGame');
    const main = document.querySelector('.main');
    const container = document.querySelector('.bg_game');
    if(btnPlayGame){
    btnPlayGame.addEventListener('click', function(e) {
        main?.classList.add('unactive');
        container?.classList.add('active');
    })
    }
}
changeBackground();