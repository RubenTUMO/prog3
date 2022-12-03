let LivingCreature = require('./LivingCreature')
module.exports = class Zombie extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 50
    }
    getNewCoordinates() {
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
        this.getNewCoordinates()
        return super.chooseCell(character);
    }

    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;

            var newZombie = new Zombie(newX, newY);
            zombieArr.push(newZombie);
            this.energy = 10
        }
    }
    move() {
        var emptyCells = this.chooseCell(0 || 1);
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        if (newCell && this.energy >= 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 1
            this.x = newX
            this.y = newY
        }
        else if (newCell && this.energy >= 1) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        }
    }

    zombify() {
        var emptyCells = this.chooseCell(2).concat(this.chooseCell(3));
        var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        if (newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break;
                }
            }
            for (var j in predatorArr) {
                if (newX == predatorArr[j].x && newY == predatorArr[j].y) {
                    predatorArr.splice(j, 1)
                    break;
                }
            }


            if (this.energy >= 90) {
                this.mul()
            }
        } else {
            this.move()
        }
    }
}
