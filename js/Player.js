class Player {
    constructor() {
        this.size = 0;
        this.speed = {
            x : 0,
            y : 0 
        }
        this.position = {
            x : 0,
            y : 0
        }
        this.updateSize();
    }
    draw() {
        ctx.fillStyle = "gray";
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size)
    }
    updateMove() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        this.draw();
    }

// Used when game gets resized
    updatePosition() {
        this.position.x = gamecanvas.width / 2 - this.size / 2;
        this.position.y = gamecanvas.height / 2 - this.size / 2;
    }
    updateSize() {
        this.size = (gamecanvas.width + gamecanvas.height) / 2 * playerRatio;
    }
}
//////////////////////////////