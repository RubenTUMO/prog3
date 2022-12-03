const LivingCreature = require("./LivingCreature");

module.exports = class WildFlower extends LivingCreature {

    constructor(x, y) {
        super(x, y)
        this.multiply = 0;
        this.energy = 100;
    }
    getNewDirections() {
        this.directions = [
            [this.x - 3, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 3, this.y + 3],

            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2],
        ];
    }
    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 6;

            var newWildFlower = new Wildflower(newX, newY);
            wildflowerArr.push(newWildFlower);
            this.energy = 10
        }
    }
    move() {
        var emptyCells = this.chooseCell(1);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        if (newCell && this.energy >= 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 1
            this.x = newX
            this.y = newY
        }
    }
        eat() {
            var emptyCells = this.chooseCell(4);
            var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            if (newCell) {
                this.energy++
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
                matrix[this.y][this.x] = 0
                this.x = newX
                this.y = newY
                for (var i in zombieArr) {
                    if (newX == zombieArr[i].x && newY == zombieArr[i].y) {
                        zombieArr.splice(i, 1);
                        break;
                    }
                }

                if (this.energy >= 21) {
                    this.mul()
                }
            } else {
                this.move()
            }
        }
    }
