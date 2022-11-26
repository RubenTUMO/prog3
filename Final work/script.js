
var socket = io();
var side = 15;

let colors = ['orange', 'blue', 'white', 'pink', 'purple']

function setup() {
    frameRate(5);
    createCanvas(50  * side, 50 * side);
    background('#acacac');
}

function draww(matrix) {
// console.log(matrix);
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
                fill(colors[Math.floor(Math.random() * colors.length)]);
            }

            rect(x * side, y * side, side, side);


        }
    }
}

socket.on('send matrix', draww)

function hey(){
    socket.emit("barev")
    
}
