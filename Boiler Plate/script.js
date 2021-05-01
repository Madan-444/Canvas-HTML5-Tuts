const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = []

// define mouse positon
const mouse = {
    x: null,
    y: null
}

// listen the mouse move event

window.addEventListener('mousemove',function(event) {
    mouse.x = event.x;
    mouse.y = event.y
    // console.log(mouse.x,mouse.y)
})

// create the text

ctx.beginPath()
ctx.font = '30px Verdana'
ctx.fillStyle = 'white'
ctx.fillText('A',20,20)
// ctx.closePath()
ctx.fill()

// Create the particles
class Particle {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.size = 3;
        this.baseX = this.x;
        this.baseY = this.y;

    }
    draw() {
        ctx.beginPath()
        ctx.fillStyle = 'white'
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2)
        ctx.fill()
    }
}

// create init function
function init() {
    // let particlesArray = []

    for(let i = 0;i< 500;i++) {
        let x = Math.random()*canvas.width
        let y = Math.random()*canvas.height
        particlesArray.push(new Particle(x,y))
    }
}
init()
console.log(particlesArray)

// create animation framse

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height)

    for(let i = 0; i<particlesArray.length;i++) {
        particlesArray[i].draw()
    }
    requestAnimationFrame(animate)
}

animate()