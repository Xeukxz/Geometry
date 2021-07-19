$(() => {
  //if (!shapes.rectangle) return

  myCanvas2.width = window.innerWidth;
  myCanvas2.height = window.innerHeight;

  var c = document.getElementById("myCanvas2");
  var ctx = c.getContext("2d");
  ctx.strokeStyle = "white"

  let globalX = window.innerWidth / 2,
    globalY = window.innerHeight / 2

  let shapes = {
    rectangle: {
      dimentions: [150, 300], // [width, height]
      position: [0, 0], // [center x, center y)
      points: [
        [],
        [],
        [],
        []
      ]
    },
    square: {
      dimentions: [100, 100],
      position: [4, 0],
      points: [
        [],
        [],
        [],
        []
      ],
    },
    
/*     square2: {
      dimentions: [200, 150],
      position: [100, 225]
    } */
  }

/*   $(document).on('mousemove', event => {
    mouse = {
      x: event.clientX,
      y: event.clientY
    }
    differenceX = globalX - mouse.x
    differenceY = globalY - mouse.y
    hypi = Math.sqrt(differenceX ** 2 + differenceY ** 2)
  })

  setInterval(() => {
    
    ctx.strokeStyle = "aqua";
    ctx.beginPath();
    ctx.arc(globalX, globalY, hypi, 0, 2 * Math.PI); // Draw user circle x: 600px y: 500px r: 250px
    ctx.stroke();

    ctx.moveTo(globalX, globalY);

    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke()

  }, 100); */

  let points = []

  var slider = document.getElementById("aSlider");
  var output = document.getElementById("rAngle");
  var slider2 = document.getElementById("aSlider2");
  var output2 = document.getElementById("rX");
  var slider3 = document.getElementById("aSlider3");
  var output3 = document.getElementById("rY");

  /*   shape.hyp = Math.sqrt(shape.height ** 2 + (shape.width ** 2))

    shape.angles[1] = degToRad(-90 - Math.sin(shape.height / shape.hyp))
    shape.angles[2] = degToRad(-Math.sin(shape.height / shape.hyp))
    shape.angles[3] = degToRad(Math.sin(shape.height / shape.hyp))
    shape.angles[4] = degToRad(90 + Math.sin(shape.height / shape.hyp)) */

    function getRelativePosA(x,y) {
      let a, b
      if(x > globalX) a = true
      else a = false
      if(y > globalY) b = true
      else b = false

      if(a && b) return 'c'
      else if(!a && b) return 'a'
      else if(!a && !b) return 's'
      else return 't'
    }

    function positive(val) {
      if(val < 0) return val * -1
      else return val
    }
    console.log(positive(-30))

    function hyp(x, y) {
      return Math.sqrt((x**2)+(y**2))
    }

    console.log('a', hyp(3, 4), globalX, globalY)

  function initRec(data, shapeNo) {

    console.log(data, 'awooga', data[0])

    console.log(Object.keys(data))

    dimentions = data[Object.keys(data)[0]]
    position = data[Object.keys(data)[1]]

    deltaX = dimentions[0] / 2
    deltaY = -dimentions[1] / 2

    posX = position[0] + globalX
    posY = -position[1] + globalY

    x = 0, y = 1

    differenceX = posX - globalX
    differenceY = posY - globalY 

    positions = [
      [],
      [],
      [],
      []
    ]

    //posY + deltaY || top
    //posY - deltaY || bottom

    //posX - deltaX || left
    //posX + deltaX || right

    shapes[Object.keys(shapes)[shapeNo]]["points"]

    function loghet(a, b) {
      Math.cosh(a)
    }

    function degug(val) {
      xx = globalX-shapes[Object.keys(shapes)[shapeNo]]["points"][val][x]
      yy = globalY-shapes[Object.keys(shapes)[shapeNo]]["points"][val][y]
      console.log(
        [
          shapes[Object.keys(shapes)[shapeNo]]["points"][val][x],
          xx,
          shapes[Object.keys(shapes)[shapeNo]]["points"][val][y],
          yy,
          shapes[Object.keys(shapes)[shapeNo]]["points"][val][2],
          hyp(xx, yy),
          xx/hyp(xx,yy),
          Math.acos(xx/hyp(xx, yy)),
          globalY
        ]
      )
    }
  
    // top-left corner
    shapes[Object.keys(shapes)[shapeNo]]["points"][0][x] = posX - deltaX
    shapes[Object.keys(shapes)[shapeNo]]["points"][0][y] = posY + deltaY
    if((posY + deltaY) < globalY) shapes[Object.keys(shapes)[shapeNo]]["points"][0][2] = -Math.acos((globalX-posX-deltaX)/hyp(globalX-posX-deltaX, globalY-posY+deltaY))
    else shapes[Object.keys(shapes)[shapeNo]]["points"][0][2] = Math.acos((globalX-posX-deltaX)/hyp(globalX-posX-deltaX, globalY-posY+deltaY))
    degug(0)

    // top-right corner
    shapes[Object.keys(shapes)[shapeNo]]["points"][1][x] = posX + deltaX
    shapes[Object.keys(shapes)[shapeNo]]["points"][1][y] = posY + deltaY
    if((posY + deltaY) < globalY) shapes[Object.keys(shapes)[shapeNo]]["points"][1][2] = -Math.acos((globalX-posX+deltaX)/hyp(globalX-posX+deltaX, globalY-posY+deltaY))
    else shapes[Object.keys(shapes)[shapeNo]]["points"][1][2] = Math.acos((globalX-posX+deltaX)/hyp(globalX-posX+deltaX, globalY-posY+deltaY))
    degug(1)

    //bottom-right corner
    shapes[Object.keys(shapes)[shapeNo]]["points"][2][x] = posX + deltaX
    shapes[Object.keys(shapes)[shapeNo]]["points"][2][y] = posY - deltaY
    if((posY - deltaY) < globalY) shapes[Object.keys(shapes)[shapeNo]]["points"][2][2] = -Math.acos((globalX-posX+deltaX)/hyp(globalX-posX+deltaX, globalY-posY+deltaY))
    else shapes[Object.keys(shapes)[shapeNo]]["points"][2][2] = Math.acos((globalX-posX+deltaX)/hyp(globalX-posX+deltaX, globalY-posY+deltaY))
    degug(2)

    // bottom-left corner
    shapes[Object.keys(shapes)[shapeNo]]["points"][3][x] = posX - deltaX
    shapes[Object.keys(shapes)[shapeNo]]["points"][3][y] = posY - deltaY
    if((posY - deltaY) < globalY) shapes[Object.keys(shapes)[shapeNo]]["points"][3][2] = -Math.acos((globalX-posX-deltaX)/hyp(globalX-posX-deltaX, globalY-posY+deltaY))
    else shapes[Object.keys(shapes)[shapeNo]]["points"][3][2] = Math.acos((globalX-posX-deltaX)/hyp(globalX-posX-deltaX, globalY-posY+deltaY))
    degug(3)

    /* dimentions = data[Object.keys(data)[0]]
    position = data[Object.keys(data)[1]]

    deltaX = dimentions[0] / 2
    deltaY = -dimentions[1] / 2

    posX = position[0] + globalX/2
    posY = -position[1] + globalY/2

    shapes[Object.keys(shapes)[shapeNo]]["points"][0][2] = Math.tanh((posX-deltaX)/hyp(positive(posX-deltaX), positive(posY+deltaY)))
    shapes[Object.keys(shapes)[shapeNo]]["points"][1][2] = Math.tanh((posX+deltaX)/hyp(positive(posX+deltaX), positive(posY+deltaY)))
    shapes[Object.keys(shapes)[shapeNo]]["points"][2][2] = Math.tanh((posX+deltaX)/hyp(positive(posX+deltaX), positive(posY-deltaY)))
    shapes[Object.keys(shapes)[shapeNo]]["points"][3][2] = Math.tanh((posX-deltaX)/hyp(positive(posX-deltaX), positive(posY-deltaY))) */

    return shapes[Object.keys(shapes)[shapeNo]]["points"]
  }

  function drawRecThruRotation(positions, angle) {
    x = 0, y = 1

    angle = degToRad(angle)
    let radius

    radius = hyp(positions[0][x] - globalX, positions[0][y] - globalY)
    console.log('ahdnhs', positions[0][x], positions[0][y], Math.sqrt(positions[0][x]**2 + positions[0][y]**2))

    ctx.beginPath()

    function mathX(val) {
      return Math.cos(positions[val][2]+angle)*radius+globalX
    }
    function mathY(val) {
      return Math.sin(positions[val][2]+angle)*radius+globalY
    }

    ctx.moveTo(mathX(0), mathY(0))

    for (let i = 1; i < positions.length; i++) {
      console.log(i)
      console.log(positions[i][x], positions[i][y], hyp(positions[i][x] - globalX, positions[i][y] - globalY), hyp(globalX, globalY))
      radius = hyp(positions[i][x] - globalX, positions[i][y] - globalY)
      console.log(positions[i][x], positions[i][y])
      console.log(positions[i][2], positions[i][2]+angle)
      ctx.lineTo(mathX(i), mathY(i))
      console.log('amogus', mathX(i), mathY(i))
    }
    radius = hyp(positions[0][x] - globalX, positions[0][y] - globalY)
    ctx.lineTo(mathX(0), mathY(0))

    ctx.stroke()
  }

  function drawRec(positions) {
    x = 0, y = 1

    ctx.beginPath()

    ctx.moveTo(positions[0][x], positions[0][y])

    for (let i = 1; i < positions.length; i++) {
      console.log(positions[i][x], positions[i][y])
      ctx.lineTo(positions[i][x], positions[i][y])
    }

    ctx.lineTo(positions[0][x], positions[0][y])

    ctx.stroke()
  }

  function initDrawings(t) {

    for (let i = 0; i < Object.keys(shapes).length; i++) {
      //drawRec(initRec(shapes[Object.keys(shapes)[i]], 0))
      drawRecThruRotation(initRec(shapes[Object.keys(shapes)[i]], i), t)
    }

    console.log(shapes, Object.keys(shapes).length, shapes[Object.keys(shapes)[0]])
  }

  initDrawings(0)



  function clearCanv() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight /* 0, 0 */ );
  }

  slider.oninput = function () {
    clearCanv()
    output.innerHTML = this.value;
    //rec(this.value)
    //rotatePoints(this.value)
    initDrawings(this.value)
    nodeCount = this.value
  }

  slider2.oninput = function () {
    clearCanv()
    output2.innerHTML = this.value;
    shapes["square"]["position"][0] = parseInt(this.value)
    console.log("dddddddddddddddddddddddddddd", shapes)
    initDrawings(0)
    nodeCount = this.value
  }

  slider3.oninput = function () {
    clearCanv()
    output3.innerHTML = this.value;
    shapes["square"]["position"][1] = parseInt(this.value)
    console.log("dddddddddddddddddddddddddddd", shapes)
    initDrawings(0)
    nodeCount = this.value
  }

})



function radToDeg(val) {
  return val * (180 / Math.PI)
}

function degToRad(val) {
  return val / (180 / Math.PI)
}