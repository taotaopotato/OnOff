class gameBlock {
    constructor(index) {
        this.position = {
            x : index % 5,
            y : Math.floor(index / 5) + 1
        }
        if (this.position.x == 0) {
            this.position.x = 5;
            this.position.y -= 1;
        }
//        console.log(this.position.x);
//        console.log(this.position.y);
    }
    draw() {
        ctx.fillStyle = '#ff0000';
        ctx.fillRect((this.position.x - 1) * gamecanvas.width / 5, (this.position.y - 1) * gamecanvas.height / 5, gamecanvas.width / 5, gamecanvas.height / 5)
    }
}