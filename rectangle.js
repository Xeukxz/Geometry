$(() => {
  if(!shapes.rectangle) return

  myCanvas.width = window.innerWidth;
  myCanvas.height = window.innerHeight;

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.strokeStyle = "white"

  let globalX = window.innerWidth/2,
  globalY = window.innerHeight/2

  let shape =  {
    height: 300,
    width: 150,
    hyp: 0,
    angles: {
      1: 0,
      2: 0,
      3: 0,
      4: 0
    }
  }

  shape.hyp = Math.sqrt(shape.height**2 + (shape.width**2))

  shape.angles[1] = degToRad(-90-Math.sin(shape.height/shape.hyp))
  shape.angles[2] = degToRad(-Math.sin(shape.height/shape.hyp))
  shape.angles[3] = degToRad(Math.sin(shape.height/shape.hyp))
  shape.angles[4] = degToRad(90+Math.sin(shape.height/shape.hyp))



  function radToDeg(val) {
    return val * (180 / Math.PI)
  }

  function degToRad(val) {
    return val / (180 / Math.PI)
  }

  function drawRectangle(w, h, t) {
    ctx.beginPath()

    console.log(shape.hyp)

    console.log(Math.cos(degToRad(t+shape.angles[1]))*shape.hyp, Math.sin(degToRad(t+shape.angles[1]))*shape.hyp, Math.cos(degToRad(t))*shape.hyp, Math.sin(degToRad(t))*shape.hyp)

    ctx.moveTo(Math.cos(degToRad(t+shape.angles[1]))*shape.hyp+globalX, Math.sin(degToRad(t+shape.angles[1]))*shape.hyp+globalY)
    ctx.lineTo(Math.cos(degToRad(t))*shape.hyp+globalX, Math.sin(degToRad(t))*shape.hyp+globalY)
    ctx.stroke()


/*     ctx.moveTo(globalX-(w/2), globalY+(h/2))
    ctx.lineTo(globalX+(w/2), globalY+(h/2))
    ctx.lineTo(globalX+(w/2), globalY-(h/2))
    ctx.lineTo(globalX-(w/2), globalY-(h/2))
    ctx.lineTo(globalX-(w/2), globalY+(h/2)) */
    ctx.stroke()
  }

  drawRectangle(shape.width, shape.height, 0)
  
  
})