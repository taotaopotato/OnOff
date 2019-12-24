function gravity() {
    gameBlocks.forEach(function (item) {
        if ((item.position.y - 1) * gamecanvas.height / 20 > player.position.y + player.size && player.gravity == true) {
            player.drop();
        }
        else {
            player.stopY();
        }
    });
}