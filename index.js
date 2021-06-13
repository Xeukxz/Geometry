let deltaAng = 0.25
let intervalTime = 10
$(() => {
  myCanvas.width = window.innerWidth;
  myCanvas.height = window.innerHeight;

  var slider = document.getElementById("nodeSlider");
  var output = document.getElementById("nodeCount");
  output.innerHTML = slider.value; // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)


  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  let nodeCount = 6,
    globalX = window.innerWidth / 2,
    globalY = window.innerHeight / 2


  function radToDeg(val) {
    return val * (180 / Math.PI)
  }

  function degToRad(val) {
    return val / (180 / Math.PI)
  }



  function drawCircle(centerX, centerY, radius, fill, nodecount) {


    x = window.innerWidth / 2
    y = window.innerHeight / 2

    ctx.strokeStyle = "white"
    ctx.beginPath();
    ctx.arc(globalX + centerX, globalY + centerY, radius, 0, 2 * Math.PI);
    ctx.stroke()

    ctx.fillStyle = "white"
    if (fill) ctx.fill()


  }

  drawCircle(0, 0, 300, false)

  function drawNodeCircle(nC, r) {
    deltaNode = degToRad(360 / nC)
    nodeRadius = r

    ctx.beginPath();
    ctx.moveTo(Math.cos(deltaNode * 1 - degToRad(90)) * 300 + globalX, Math.sin(deltaNode * 1 - degToRad(90)) * 300 + globalY);
    /* drawCircle(Math.cos(deltaNode * 1 - degToRad(90)) * 300, Math.sin(deltaNode * 1 - degToRad(90)) * 300, nodeRadius, true) */


    for (let i = 2; i <= nC; i++) {
      ctx.lineTo(Math.cos(deltaNode * i - degToRad(90)) * 300 + globalX, Math.sin(deltaNode * i - degToRad(90)) * 300 + globalY);
      /* drawCircle(Math.cos(deltaNode * i - degToRad(90)) * 300, Math.sin(deltaNode * i - degToRad(90)) * 300, nodeRadius, true) */
      ctx.stroke()
    }

    ctx.lineTo(Math.cos(deltaNode * 1 - degToRad(90)) * 300 + globalX, Math.sin(deltaNode * 1 - degToRad(90)) * 300 + globalY);
    ctx.stroke()

    for (let i = 1; i <= nC; i++) {
      drawCircle(Math.cos(deltaNode * i - degToRad(90)) * 300, Math.sin(deltaNode * i - degToRad(90)) * 300, nodeRadius, true)
    }

  }


  /* drawCircle(Math.cos(deltaNode) * 300, Math.sin(deltaNode) * 300, 5, true)
  drawCircle(Math.cos(deltaNode * 2) * 300, Math.sin(deltaNode * 2) * 300, 5, true)
  drawCircle(Math.cos(deltaNode * 3) * 300, Math.sin(deltaNode * 3) * 300, 5, true) */

  slider.oninput = function () {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight /* 0, 0 */ );
    output.innerHTML = this.value;
    drawNodeCircle(this.value, 3)
  }

  $(document).on('mouseover', event => {
    mousedown = true
  })

  $(document).on('mouseout', event => {
    mousedown = false
  })
})