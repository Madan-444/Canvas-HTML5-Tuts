let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d');

// ctx.arc(x,y,radius,begining andle,ending angle(math.Pi),true or false)
// true=> anticlockwise, false=> clockwise
ctx.beginPath()
let centerX = canvas.width /2;
let centerY = canvas.height /2
ctx.arc(centerX,centerY,200, 0,Math.PI*2)

// move to mouse starting point
ctx.moveTo(centerX + 100,centerY);
ctx.arc(centerX,centerY,100,0,Math.PI,false)
// create eyes
ctx.moveTo(centerX-60,centerY-80);
ctx.arc(centerX-80,centerY-80,20,0,Math.PI*2)

ctx.moveTo(centerX+100,centerY-80);
ctx.arc(centerX+80,centerY-80,20,0,Math.PI*2)
ctx.stroke()

// bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) 
// quadraticCurveTo(cp1x, cp1y, x, y)
// x and y are in bothe cases are the end point of the curve
//  cp are control points . quadraticCurve has only one and bezierCurve has two control points
// ctx.beginPath();
// ctx.moveTo(50,30)
// ctx.quadraticCurveTo(100, 200, 200, 30)
// ctx.stroke()

 // Cubic curves example
 ctx.beginPath();
 ctx.moveTo(75, 40);
 ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
 ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
 ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
 ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
 ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
 ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
//  ctx.fill();
ctx.stroke()

//  quadraticCurve example
ctx.beginPath();
ctx.moveTo(75, 25);
ctx.quadraticCurveTo(25, 25, 25, 62.5);
ctx.quadraticCurveTo(25, 100, 50, 100);
ctx.quadraticCurveTo(50, 120, 30, 125);
ctx.quadraticCurveTo(60, 120, 65, 100);
ctx.quadraticCurveTo(125, 100, 125, 62.5);
ctx.quadraticCurveTo(125, 25, 75, 25);
ctx.stroke();
