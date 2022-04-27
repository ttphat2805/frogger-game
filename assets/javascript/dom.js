"use strict";
function changeBackground() {
    const btnPlayGame = document.querySelector('.btnPlayGame');
    const main = document.querySelector('.main');
    const container = document.querySelector('.bg_game');
    if (btnPlayGame) {
        btnPlayGame.addEventListener('click', function (e) {
            main === null || main === void 0 ? void 0 : main.classList.add('unactive');
            container === null || container === void 0 ? void 0 : container.classList.add('active');
        });
    }
}
changeBackground();
