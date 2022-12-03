var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require("fs");
const GrassEater = require('./GrassEater');
const LivingCreature = require('./LivingCreature');

app.use(express.static("."));

app.get('/', function (req, res) {
  res.redirect('index.html');
});
server.listen(3000);



function generate(matLen, gr, grEat, pr, zomb, flow, wflow) {
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

  for (let i = 0; i < wflow; i++) {
    let x = Math.floor(Math.random() * matLen)
    let y = Math.floor(Math.random() * matLen)
    // console.log(x, y);
    if (matrix[y][x] == 0) {
      matrix[y][x] = 6
    }
  }
  return matrix
}
matrix = generate(50)
io.sockets.emit('send matrix', matrix)
// console.log(matrix);
grassArr = []
grassEaterArr = []
predatorArr = []
zombieArr = []
flowerArr = []
wildflowerArr = []

Grass = require("./Grass")
Grasseater = require("./GrassEater")
Predator = require("./Predator")
Zombie = require("./Zombie")
Flower = require("./Flower")
Wildflower = require("./WildFlower")

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
      else if (matrix[y][x] == 6) {
        let wflow = new Wildflower(x, y)
        wildflowerArr.push(wflow)
      }      

    }

  }
  io.sockets.emit('send matrix', matrix)
}

function game() {
  for (var i in grassArr) {
    if (weath == "spring") {
      grassArr[i].mul()
    }
    else if (weath == "summer")
    {
      grassArr[i].mul()
    }
    else if (weath == "autumn") {
      continue
    }
    else{
      continue
    }
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
  for (let i in wildflowerArr) {
    wildflowerArr[i].eat()
  }
  io.sockets.emit("send matrix", matrix);
}
setInterval(game, 400)

function hey() {
  for (let i = 0; i < 1; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 0) {
      matrix[y][x] = 1
      let gr = new Grass(x, y)
      grassArr.push(gr)

    }
  }
  console.log("Added 1 grass")

}
function hey1() {
  for (let i = 0; i < 2; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 0) {
      matrix[y][x] = 1
      let gr = new Grass(x, y)
      grassArr.push(gr)

    }
  }
  console.log("Added 2 grasses")

}

function hey2() {
  for (let i = 0; i < 5; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 0) {
      matrix[y][x] = 1
      let gr = new Grass(x, y)
      grassArr.push(gr)

    }
  }
  console.log("Added 5 grasses")

}

function hey3() {
  for (let i = 0; i < 10; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 0) {
      matrix[y][x] = 1
      let gr = new Grass(x, y)
      grassArr.push(gr)

    }
  }
  console.log("Added 10 grasses")

}

function hey4() {
  for (let i = 0; i < 1; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 0) {
      matrix[y][x] = 2
      let grEat = new GrassEater(x, y)
      grassEaterArr.push(grEat)

    }
  }
  console.log("Added 1 Grass Eater")

}

function hey5() {
  for (let i = 0; i < 2; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 0) {
      matrix[y][x] = 2
      let grEat = new GrassEater(x, y)
      grassEaterArr.push(grEat)

    }
  }
  console.log("Added 2 Grass Eaters")

}

function hey6() {
  for (let i = 0; i < 5; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 0) {
      matrix[y][x] = 2
      let grEat = new GrassEater(x, y)
      grassEaterArr.push(grEat)

    }
  }
  console.log("Added 5 Grass Eaters")

}

function hey7() {
  for (let i = 0; i < 10; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 0) {
      matrix[y][x] = 2
      let grEat = new GrassEater(x, y)
      grassEaterArr.push(grEat)

    }
  }
  console.log("Added 10 Grass Eaters")

}

function hey8() {
  for (let i = 0; i < 1; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 0) {
      matrix[y][x] = 3
      let pred = new Predator(x, y)
      predatorArr.push(pred)

    }
  }
  console.log("Added 1 Predator")

}

function hey9() {
  for (let i = 0; i < 2; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 0) {
      matrix[y][x] = 3
      let pred = new Predator(x, y)
      predatorArr.push(pred)

    }
  }
  console.log("Added 2 Predators")

}

function hey10() {
  for (let i = 0; i < 5; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 0) {
      matrix[y][x] = 3
      let pred = new Predator(x, y)
      predatorArr.push(pred)

    }
  }
  console.log("Added 5 Predators")

}

function hey11() {
  for (let i = 0; i < 10; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 0) {
      matrix[y][x] = 3
      let pred = new Predator(x, y)
      predatorArr.push(pred)

    }
  }
  console.log("Added 10 Predators")

}

function hey12() {
  for (let i = 0; i < 1; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 0) {
      matrix[y][x] = 4
      let zomb = new Zombie(x, y)
      zombieArr.push(zomb)

    }
  }
  console.log("Added 1 Zombie")

}

function hey13() {
  for (let i = 0; i < 2; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 0) {
      matrix[y][x] = 4
      let zomb = new Zombie(x, y)
      zombieArr.push(zomb)

    }
  }
  console.log("Added 2 Zombies")

}

function hey14() {
  for (let i = 0; i < 5; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 0) {
      matrix[y][x] = 4
      let zomb = new Zombie(x, y)
      zombieArr.push(zomb)

    }
  }
  console.log("Added 5 Zombies")

}

function hey15() {
  for (let i = 0; i < 10; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 0) {
      matrix[y][x] = 4
      let zomb = new Zombie(x, y)
      zombieArr.push(zomb)

    }
  }
  console.log("Added 10 Zombies")

}

function hey16() {
  for (let i = 0; i < 1; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 1) {
      matrix[y][x] = 5
      let flow = new Flower(x, y)
      flowerArr.push(flow)

    }
  }
  console.log("Added 1 Flower")

}

function hey17() {
  for (let i = 0; i < 2; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 1) {
      matrix[y][x] = 5
      let flow = new Flower(x, y)
      flowerArr.push(flow)

    }
  }
  console.log("Added 2 Flowers")

}

function hey18() {
  for (let i = 0; i < 5; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 1) {
      matrix[y][x] = 5
      let flow = new Flower(x, y)
      flowerArr.push(flow)

    }
  }
  console.log("Added 5 Flowers")

}

function hey19() {
  for (let i = 0; i < 10; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 1) {
      matrix[y][x] = 5
      let flow = new Flower(x, y)
      flowerArr.push(flow)

    }
  }
  console.log("Added 10 Flowers")

}

function hey20() {
  grassArr = []
  grassEaterArr = []
  predatorArr = []
  zombieArr = []
  flowerArr = []
  wildflowerArr = []
  for (var y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      matrix[y][x] = 0
    }

  }
}

function hey21() {
  for (let i = 0; i < 1; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 0) {
      matrix[y][x] = 6
      let wflow = new Wildflower(x, y)
      wildflowerArr.push(wflow)

    }
  }
  console.log("Added 1 WildFlower")

}

function hey22() {
  for (let i = 0; i < 2; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 0) {
      matrix[y][x] = 6
      let wflow = new Wildflower(x, y)
      wildflowerArr.push(wflow)

    }
  }
  console.log("Added 2 WildFlowers")

}

function hey23() {
  for (let i = 0; i < 5; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 0) {
      matrix[y][x] = 6
      let wflow = new Wildflower(x, y)
      wildflowerArr.push(wflow)

    }
  }
  console.log("Added 5 WildFlowers")

}

function hey24() {
  for (let i = 0; i < 10; i++) {
    let x = Math.floor(Math.random() * 50)
    let y = Math.floor(Math.random() * 50)
    if (matrix[y][x] == 0) {
      matrix[y][x] = 6
      let wflow = new Wildflower(x, y)
      wildflowerArr.push(wflow)

    }
  }
  console.log("Added 10 WildFlowers")

}

weath = "winter"
function weather() {
  if (weath == "winter") {
    weath = "spring"
    console.log("Spring")
  }
  else if (weath == "spring") {
    weath = "summer"
    console.log("summer")
  }
  else if (weath == "summer") {
    weath = "autumn"

    console.log("Autumn")
  }
  else if (weath == "autumn") {
    weath = "winter"
    console.log("winter")
  }
  io.sockets.emit('weather', weath)

}
setInterval(weather, 10000);

io.on('connection', function (socket) {
  createObject(matrix)
  socket.on("barev", hey)
  socket.on("barev1", hey1)
  socket.on("barev2", hey2)
  socket.on("barev3", hey3)
  socket.on("barev4", hey4)
  socket.on("barev5", hey5)
  socket.on("barev6", hey6)
  socket.on("barev7", hey7)
  socket.on("barev8", hey8)
  socket.on("barev9", hey9)
  socket.on("barev10", hey10)
  socket.on("barev11", hey11)
  socket.on("barev12", hey12)
  socket.on("barev13", hey13)
  socket.on("barev14", hey14)
  socket.on("barev15", hey15)
  socket.on("barev16", hey16)
  socket.on("barev17", hey17)
  socket.on("barev18", hey18)
  socket.on("barev19", hey19)
  socket.on("barev20", hey20)
  socket.on("barev21", hey21)
  socket.on("barev22", hey22)
  socket.on("barev23", hey23)
  socket.on("barev24", hey24)
})
count = 1



function statistics() {
  io.sockets.emit('grassLength', grassArr.length);
  io.sockets.emit('grassEaterLength', grassEaterArr.length);
  io.sockets.emit('PredatorLength', predatorArr.length);
  io.sockets.emit('ZombieLength', zombieArr.length);
  io.sockets.emit('FlowerLength', flowerArr.length);
  io.sockets.emit("WildFlowerLength",wildflowerArr.length)
}
setInterval(statistics, 400);



