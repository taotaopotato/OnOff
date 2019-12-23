function levelOne() {
    let levelOne = new gameLevel(
        0, 0, 0, 0, 0,
        0, 1, 0, 0, 1,
        0, 1, 0, 0, 0,
        1, 0, 0, 0, 0,
        0, 0, 0, 1, 0); 
        console.log(levelOne.length);
    levelOne.makeLevel();
}