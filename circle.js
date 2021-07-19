$(() => {

  console.log(shapes)

  if (!shapes.circle) return

  $('#circlePrefferenceBox').css('display', 'block')

  myCanvas.width = window.innerWidth;
  myCanvas.height = window.innerHeight;




  var slider = document.getElementById("nodeSlider");
  var output = document.getElementById("nodeCount");
  output.innerHTML = slider.value; // Display the default slider value

  var checkBox = document.getElementById("showNodes");
  console.log($('#showNodes'))


  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.strokeStyle = "white"

  let nodeCount = slider.value,
    center = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    }
  center.x = window.innerWidth / 2,
    center.y = window.innerHeight / 2,
    points = []

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
    ctx.arc(center.x + centerX, center.y + centerY, radius, 0, 2 * Math.PI);
    ctx.stroke()

    ctx.fillStyle = "white"
    if (fill) ctx.fill()


  }

  //drawCircle(0, 0, 300, false)

  function setPoints(nC) {
    deltaNode = degToRad(360 / nC)
    points = []
    for (let i = 0; i < nC; i++) {
      x = Math.cos(deltaNode * i - degToRad(90)) * 300 + center.x
      y = Math.sin(deltaNode * i - degToRad(90)) * 300 + center.y
      //  sin( [angle between each node] * [point number] - [90 degrees(to make all points point relative to top of shape)] ) * [radius from center] + [center of shape]

      if (points[i]) points[i] = [x, y]
      else points.push([x, y])

    }
  }

  function drawPointsCircle(points) {
    x=0,y=1
    ctx.beginPath();
    ctx.moveTo(points[0][x], points[0][y])  //moveTo(points[pointNumber][x: 0|y: 1])
    for (let i = 1; i < points.length; i++) ctx.lineTo(points[i][x], points[i][y]) //loop through all points and connect them
    for (let i = 1; i < points.length; i++) console.log(points[i][x], points[i][y])
    ctx.lineTo(points[0][x], points[0][y]) //link up to end
    ctx.stroke()
  }

  function drawNodeCircle(nC, r, showNodes) {
    deltaNode = degToRad(360 / nC)
    nodeRadius = r



    ctx.beginPath();

    if (nC == 1) return drawCircle(0, 0, nodeRadius, true)

    ctx.moveTo(Math.cos(deltaNode * 1 - degToRad(90)) * 300 + center.x, Math.sin(deltaNode * 1 - degToRad(90)) * 300 + center.y);
    /* drawCircle(Math.cos(deltaNode * 1 - degToRad(90)) * 300, Math.sin(deltaNode * 1 - degToRad(90)) * 300, nodeRadius, true) */


    for (let i = 2; i <= nC; i++) {
      ctx.lineTo(Math.cos(deltaNode * i - degToRad(90)) * 300 + center.x, Math.sin(deltaNode * i - degToRad(90)) * 300 + center.y);
      /* drawCircle(Math.cos(deltaNode * i - degToRad(90)) * 300, Math.sin(deltaNode * i - degToRad(90)) * 300, nodeRadius, true) */
      ctx.stroke()
    }

    ctx.lineTo(Math.cos(deltaNode * 1 - degToRad(90)) * 300 + center.x, Math.sin(deltaNode * 1 - degToRad(90)) * 300 + center.y);
    ctx.stroke()

    if (showNodes)
      for (let i = 1; i <= nC; i++) drawCircle(Math.cos(deltaNode * i - degToRad(90)) * 300, Math.sin(deltaNode * i - degToRad(90)) * 300, nodeRadius, true)


  }


  //drawNodeCircle(3, 3, true)
  setPoints(10)
  drawPointsCircle(points)
  console.log(points)

  function clearCanv() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight /* 0, 0 */ );
  }

  /* drawCircle(Math.cos(deltaNode) * 300, Math.sin(deltaNode) * 300, 5, true)
  drawCircle(Math.cos(deltaNode * 2) * 300, Math.sin(deltaNode * 2) * 300, 5, true)
  drawCircle(Math.cos(deltaNode * 3) * 300, Math.sin(deltaNode * 3) * 300, 5, true) */

  slider.oninput = function () {
    nodeCount = this.value
    clearCanv()
    output.innerHTML = this.value;
    //drawNodeCircle(this.value, 3, checkBox.checked)
    setPoints(this.value)
    drawPointsCircle(points)
  }

  checkBox.oninput = function () {
    clearCanv()
    if (this.checked == true) drawNodeCircle(slider.value, 3, true)
    else drawNodeCircle(slider.value, 3, false)
  }

  $(document).on('mouseover', event => {
    mousedown = true
  })

  $(document).on('mouseout', event => {
    mousedown = false
  })
})