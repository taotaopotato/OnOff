class inputHandler {
    constructor() {
        document.addEventListener('keydown', (event) => {
            switch (event.keyCode) {
                case 37:
                    player.moveLeft();
                    break;
                case 39:
                    player.moveRight();
                    break;
                case 38:
                    // jump
                    break;
            }
        });
        document.addEventListener('keyup', (event) => {
            switch (event.keyCode) {
                case 37:
                    if (player.speed.x < 0) player.stopX();
                    break;
                case 39:
                    if (player.speed.x > 0) player.stopX();
                    break;
            }
        });
    }
}