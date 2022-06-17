
var socket = io();
// console.log(matrix)
var side = 12;

let colors = ['orange', 'blue', 'white', 'pink', 'purple']

function setup() {
    frameRate(5);
    createCanvas(1992, 900);
    background('#acacac');
}

function draww() {

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

            rect(x * side, y * side, side, side);


        }
    }
}
setInterval(
    function () {
        socket.on('send matrix', nkarel)
    }, 1000
)