// Define ctx
let canvas = document.getElementById('gameCanvas')
let ctx = canvas.getContext('2d');
////////////

// Player's relation in size to canvas
const PLAYER_RATIO = 1/20
//////////////////////////////////////

// Define 'new's
let gamecanvas = new gameCanvas;
let inputhandler = new inputHandler;
let player = new Player;
////////////////

// Players size in relation to canvas
const PLAYER_SPEED = gamecanvas.width / 200;
/////////////////////////////////////

// Canvas set up 
updateGameSize();
player.updatePosition();
////////////////

// Initialize Game Loop
function gameLoop() {
    ctx.clearRect(0, 0, gamecanvas.width, gamecanvas.height)
    window.addEventListener('resize', updateGameSize, false)
    console.log(player.position.x);
    player.updateMove();
    requestAnimationFrame(gameLoop);
}
gameLoop();

///////////////////////

// Update Size
function updateGameSize() {
    gamecanvas.canvasUpdate();
    player.updateSize();
//    player.updatePosition();
}
//////////////
