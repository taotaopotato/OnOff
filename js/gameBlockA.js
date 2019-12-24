class gameBlockA {
    constructor(index) {
        this.position = {
            x : index % 20,
            y : Math.floor(index / 20) + 1
        }
        if (this.position.x == 0) {
            this.position.x = 20;
            this.position.y -= 1;
        }
//        console.log(this.position.x);
//        console.log(this.position.y);
    }
    draw() {
        ctx.fillStyle = '#3c3c3c';
        ctx.strokeStyle = '#3c3c3c';
        ctx.fillRect((this.position.x - 1) * gamecanvas.width / 20, (this.position.y - 1) * gamecanvas.height / 20, gamecanvas.width / 20, gamecanvas.height / 20)
        ctx.strokeRect((this.position.x - 1) * gamecanvas.width / 20, (this.position.y - 1) * gamecanvas.height / 20, gamecanvas.width / 20, gamecanvas.height / 20)
    }
}