class gameBlock {
    constructor(x, y) {
        this.position = {
            x: x,
            y: y
        }
        this.size = 20;
    }
    draw() {
        ctx.fillStyle = '#A5A5A5';
        ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
}