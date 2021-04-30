let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d');

// Path
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150,50)
ctx.lineTo(100,200)
// ctx.lineTo(50,50)
ctx.closePath()
ctx.fillStyle = 'yellow'
ctx.fill()
ctx.stroke();


// another opposite triangle

ctx.beginPath()
ctx.moveTo(300,200);
ctx.lineTo(250,50);
ctx.lineTo(200,200)
ctx.closePath()
ctx.fillStyle = 'pink'
ctx.fill()
ctx.stroke()

// rectangles
ctx.beginPath()
ctx.rect(350,50,100,100)
ctx.fillStyle = 'teal'
ctx.fill();

/