
var socket = io();
var side = 15;

let colors = ['orange', 'blue', 'white', 'pink', 'purple']

function setup() {
    frameRate(5);
    createCanvas(50 * side, 50 * side);
    background('#acacac');
}

function draww(matrix) {
    socket.on("weather", function (data) {
        weath = data; 
       
        if (weath == "spring") {
            document.body.style.backgroundColor = "goldenrod";

        }
        if (weath == "winter") {
            document.body.style.backgroundColor = "#a5acd9";

        }
        else if (weath == "summer") {
            document.body.style.backgroundColor = "#e65c00";

        }
        else if (weath == "autumn") {
            document.body.style.backgroundColor = "#D2B48C";

        }

    })
    // console.log(matrix);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                if (weath == "winter") {
                    fill("white")
                }
                else if (weath == "spring") {
                    fill("#55C233")
                }
                else if (weath == "summer") {
                    fill("green");
                }
               
                else if (weath == "autumn") {
                    fill("#DAA520")
                }
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
            else if (matrix[y][x] == 6) {
                fill("#072B0B");
            }

            rect(x * side, y * side, side, side);


        }
    }
}



socket.on('grassLength', Grasslength);
socket.on('grassEaterLength', GrassEaterlength);
socket.on('PredatorLength', Predatorlength);
socket.on('ZombieLength', Zombielength);
socket.on('FlowerLength', Flowerlength);
socket.on("WildFlowerLength", WildFlowerlength);
socket.on('send matrix', draww);

function hey() {
    socket.emit("barev")
}

function hey1(){
    socket.emit("barev1")
}

function hey2(){
    socket.emit("barev2")
}

function hey3(){
    socket.emit("barev3")
}

function hey4(){
    socket.emit("barev4")
}

function hey5(){
    socket.emit("barev5")
}

function hey6(){
    socket.emit("barev6")
}

function hey7(){
    socket.emit("barev7")
}

function hey8(){
    socket.emit("barev8")
}

function hey9(){
    socket.emit("barev9")
}

function hey10(){
    socket.emit("barev10")
}

function hey11(){
    socket.emit("barev11")
}

function hey12(){
    socket.emit("barev12")
}

function hey13(){
    socket.emit("barev13")
}

function hey14(){
    socket.emit("barev14")
}

function hey15(){
    socket.emit("barev15")
}

function hey16(){
    socket.emit("barev16")
}

function hey17(){
    socket.emit("barev17")
}

function hey18(){
    socket.emit("barev18")
}

function hey19(){
    socket.emit("barev19")
}

function hey20(){
    socket.emit('barev20')
}

function hey21(){
    socket.emit('barev21')
}

function hey22(){
    socket.emit('barev22')
}

function hey23(){
    socket.emit('barev23')
}

function hey24(){
    socket.emit('barev24')
}

function Grasslength(data) {
    grassData = data;
    pobject = document.querySelector('#grasslength');
    pobject.innerText = grassData;
};
function GrassEaterlength(data) {
    grassData = data;
    pobject = document.querySelector('#grassEaterlength');
    pobject.innerText = grassData;
};
function Predatorlength(data) {
    grassData = data;
    pobject = document.querySelector('#Predatorlength');
    pobject.innerText = grassData;
};
function Zombielength(data) {
    grassData = data;
    pobject = document.querySelector('#Zombielength');
    pobject.innerText = grassData;
};
function Flowerlength(data) {
    grassData = data;
    pobject = document.querySelector('#Flowerlength');
    pobject.innerText = grassData;
};
function WildFlowerlength(data) {
    grassData = data;
    pobject = document.querySelector('#WildFlowerlength');
    pobject.innerText = grassData;
};