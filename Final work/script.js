function generate(matLen, gr, grEat, pr,zomb,flow) {
    let matrix = []
    for (let i = 0; i < matLen; i++) {
        matrix[i] = []
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0
        }
    }

    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        console.log(x, y);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
    }
    for (let i = 0; i < pr; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        console.log(x, y);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
    }
    for (let i = 0; i < zomb; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        console.log(x, y);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }
    }
    for (let i = 0; i < zomb; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        console.log(x, y);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
        }
    }
    return matrix
}


let matrix = generate(166, 500, 60, 50, 18, 10)
console.log(matrix)

var side = 12;
let grassArr = []
let grassEaterArr = []
let predatorArr = []
let zombieArr = []
let flowerArr = []

let colors = ['orange','blue','white','pink','purple']

function setup() {
    frameRate(5);
    createCanvas(1992,900);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let gr = new GrassEater(x, y)
                grassEaterArr.push(gr)
            }
            else if (matrix[y][x] == 3) {
                let gr = new Predator(x, y)
                predatorArr.push(gr)
            }
            else if (matrix[y][x] == 4) {
                let gr = new Zombie(x, y)
                zombieArr.push(gr)
            }
            else if (matrix[y][x] == 5) {
                let gr = new Flower(x, y)
                flowerArr.push(gr)
            }

        }

    }
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("darkcyan");
            }
            else if (matrix[y][x] == 5) {
                fill(random(colors));
            }

            rect(x * side, y * side , side, side);


        }
    }

    for (var i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].eat()
    }
    for (let i in zombieArr) {
        zombieArr[i].zombify()
    }
    for (let i in flowerArr) {
        flowerArr[i].mul()
    }

}
