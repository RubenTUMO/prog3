var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
  res.redirect('index.html');
});
server.listen(3000);



function generate(matLen, gr, grEat, pr, zomb, flow) {
  var matrix = []
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
    // console.log(x, y);
    if (matrix[y][x] == 0) {
      matrix[y][x] = 2
    }
  }
  for (let i = 0; i < pr; i++) {
    let x = Math.floor(Math.random() * matLen)
    let y = Math.floor(Math.random() * matLen)
    // console.log(x, y);
    if (matrix[y][x] == 0) {
      matrix[y][x] = 3
    }
  }
  for (let i = 0; i < zomb; i++) {
    let x = Math.floor(Math.random() * matLen)
    let y = Math.floor(Math.random() * matLen)
    // console.log(x, y);
    if (matrix[y][x] == 0) {
      matrix[y][x] = 4
    }
  }
  for (let i = 0; i < flow; i++) {
    let x = Math.floor(Math.random() * matLen)
    let y = Math.floor(Math.random() * matLen)
    // console.log(x, y);
    if (matrix[y][x] == 0) {
      matrix[y][x] = 5
    }
  }
  return matrix
}
 matrix = generate(50, 25, 30, 30, 9, 5)
io.sockets.emit('send matrix', matrix)
// console.log(matrix);
 grassArr = []
 grassEaterArr = []
 predatorArr = []
 zombieArr = []
 flowerArr = []

Grass = require("./Grass")
GrassEater = require("./GrassEater")
Predator = require("./Predator")
Zombie = require("./Zombie")
Flower = require("./Flower")

function createObject(matrix) {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {

      if (matrix[y][x] == 1) {
        let gr = new Grass(x, y)
        grassArr.push(gr)
        // console.log(grassArr);
      } else if (matrix[y][x] == 2) {
        let grEat = new GrassEater(x, y)
        grassEaterArr.push(grEat)
      }
      else if (matrix[y][x] == 3) {
        let pr = new Predator(x, y)
        predatorArr.push(pr)
      }
      else if (matrix[y][x] == 4) {
        let zomb = new Zombie(x, y)
        zombieArr.push(zomb)
      }
      else if (matrix[y][x] == 5) {
        let flow = new Flower(x, y)
        flowerArr.push(flow)
      }

    }

  }
  io.sockets.emit('send matrix', matrix)
}

function game() {
  for (var i in grassArr) {
    grassArr[i].mul()
    // console.log(grassArr);
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
  io.sockets.emit("send matrix", matrix);
}
setInterval(game, 500)


io.on('connection', function (socket) {
  createObject(matrix)
})
count = 1
function hey(gr){
  for (let i = 0; i < gr; i++) {
    let x = Math.floor(Math.random() * matLen)
    let y = Math.floor(Math.random() * matLen)
    if (matrix[y][x] == 0) {
      matrix[y][x] = 1
      let gr = new Grass(x, y)
      grassArr.push(gr)

    }
  }
}
function statistics(){
  io.sockets.emit('grassLength',grassArr.length);
  io.sockets.emit('grassEaterLength',grassEaterArr.length);
  io.sockets.emit('PredatorLength',predatorArr.length);
  io.sockets.emit('ZombieLength',zombieArr.length);
  io.sockets.emit('FlowerLength',flowerArr.length);
}
setInterval(statistics,1000);

io.on("connection",function (socket){

    socket.on("barev",hey)})
   


