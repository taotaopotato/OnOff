// game Canvas
class gameCanvas {
    constructor() {
        this.width = 0;
        this.height = 0;
        this.canvasUpdate();
    }
    canvasUpdate() {
        this.width = canvas.width  = window.innerWidth - 20;
        this.height = canvas.height = window.innerHeight - 20;
        console.log(canvas.width);
        console.log(canvas.height);
    }
}
///////////////