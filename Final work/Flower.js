class Flower{
    constructor(x, y) {
    this.x = x;
    this.y = y;
    this.multiply = 10
    this.directions = [
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]
    ];
}

chooseCell(character) {
    var found = [];
    for (var i in this.directions) {
        var x = this.directions[i][0];
        var y = this.directions[i][1];
        if (x >= 1 && x < matrix[1].length && y >= 1 && y < matrix.length) {
            if (matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
    }

    return found;
}
mul() {
    this.multiply++;
    var emptyCells = this.chooseCell(1);
    var newCell = random(emptyCells);

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