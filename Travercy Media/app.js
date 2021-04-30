const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// canvas.width = 400;
// canvas.height = 400;
// To take whole width and height

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// to create react we have fillRect

// ctx.fillRect(x,y,width,height)

ctx.fillStyle = "red" // it should be always top of rect
ctx.fillRect(20,20,200,150)
ctx.fillStyle = 'green'
ctx.fillRect(260,20,200,150)

// strokeRect() gives the outline of the rectangle
ctx.lineWidth = 5;
ctx.strokeStyle = 'green'
ctx.strokeRect(20,200,200,150)

//clearRect() clear out part of rectangle

ctx.clearRect(280,25,160,100);

// fillText() to write text in the canvas ctx.fillText("Hello Madan",x-cordi,y-cordi);
ctx.font = '1.5rem Arial'
ctx.fillStyle = 'black'
ctx.fillText("Hello Madan",400,50);

// strokeText() for the outline of the text
ctx.lineWidth = 1;
ctx.strokeStyle='blue'
ctx.strokeText("Hello Madan",400, 100)