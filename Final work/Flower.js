let LivingCreature = require('./LivingCreature')
module.exports = class Flower extends LivingCreature{
    constructor(x, y) {
        super(x, y)
        this.multiply = 10
}

chooseCell(character) {
    return super.chooseCell(character);
}
mul() {
    this.multiply++;
    var emptyCells = this.chooseCell(1);
    var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

    if (newCell && this.multiply >= 70) {
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = 5;

        var newFlower = new Flower (newX, newY, 5);
        grassArr.push(newFlower);
        this.multiply = 0;
    }
    if(emptyCells==0){
        matrix[this.y][this.x] = 0
        for (var i in flowerArr) {
            if (this.x == flowerArr[i].x && this.y == flowerArr[i].y) {
                flowerArr.splice(i, 1);
                break;
            }
        }
    }
}
}