// Define ctx
let canvas = document.getElementById('gameCanvas')
let ctx = canvas.getContext('2d');
////////////

// Player's relation in size to canvas
let playerRatio = 1/10;
//////////////////////////////////////

// Define 'new's
let gamecanvas = new gameCanvas;
let player = new Player;
////////////////

// Initialize Game Loop
function gameLoop() {
    window.addEventListener('resize', updateGameSize(), false)
    player.updateMove();
    requestAnimationFrame(gameLoop);
}
gameLoop();
///////////////////////

// Update Size
function updateGameSize() {
    gamecanvas.canvasUpdate();
    player.updateSize();
    player.updatePosition();
}
//////////////
