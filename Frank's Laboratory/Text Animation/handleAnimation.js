const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particleArray = []

// handle mouse postion

const mouse = {
    x:null,
    y:null,
    radius: 150
}
let adjustX = -10;
let adjustY = -20

window.addEventListener('mousemove',function(event) {
    mouse.x =event.x;
    mouse.y = event.y
    
})

ctx.fillStyle = 'white'
ctx.font = '30px Verdana'
ctx.fillText('M',20,50);
// ctx.fillText('Rijal',45,80);
const textCordinates = ctx.getImageData(0,0,canvas.width,canvas.height);

class Particle {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.size = 3;
        this.baseX = this.x
        this.baseY = this.y;
        this.density = (Math.random()*30) + 1;

    }
    draw(){
        ctx.fillStyle = 'white'
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2,false)
        ctx.closePath()
        ctx.fill()
    }
    update() {
        let dx = mouse.x - this.x
        let dy = mouse.y - this.y
        const distance = Math.sqrt(dx*dx + dy*dy)

        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance

        // To costumize speed according to the distance
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance
        let directionX = forceDirectionX * force * this.density
        let directionY = forceDirectionY * force * this.density
        if(distance< mouse.radius) {
            this.x -= directionX
            this.y -= directionY

        }
        else {
            if(this.x !== this.baseX) {
                let dx = this.x - this.baseX
                this.x -= dx / 10
            }
            if(this.y !== this.baseY) {
                let dy = this.y -this.baseY
                this.y -= dy / 10
            }
        }
    }
}
console.log(textCordinates)

function init() {
    particleArray = []
    for(let y = 0,y2 = textCordinates.height; y< y2; y++) {
        for(let x = 0,x2 = textCordinates.width;x< x2;x++) {
            if(textCordinates.data[(y*4*textCordinates.width) + (x*4) + 3]> 128) {
                let positionX = x + adjustX;
                let positionY = y+ adjustY;
                particleArray.push(new Particle(positionX*20,positionY*20))
            }
        }
    }
    // for(let i = 0;i<500;i++) {
    //     let x = Math.random()*canvas.width;
    //     let y = Math.random()*canvas.height;
    //     particleArray.push(new Particle(x,y))
    // }

}
init()
console.log(particleArray)

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    for(let i = 0;i< particleArray.length;i++) {
        particleArray[i].draw();
        particleArray[i].update();

    }
    connect()
    requestAnimationFrame(animate)
}
animate()

function connect() {
    let opacityValue = 1
    for(let a = 0; a< particleArray.length; a++) {
        for(let b = a; b< particleArray.length; b++) {
            let dx = particleArray[a].x - particleArray[b].x
            let dy = particleArray[a].y - particleArray[b].y
            const distance = Math.sqrt(dx*dx + dy*dy)
            opacityValue = 1 - distance /20
            ctx.strokeStyle = 'rgba(255,255,255,'+ opacityValue +')'
            
            if(distance< 50) {
                ctx.beginPath()
                // ctx.strokeStyle = 'blue'
                ctx.lineWidth = 1;
                ctx.moveTo(particleArray[a].x,particleArray[a].y)
                ctx.lineTo(particleArray[b].x,particleArray[b].y)
                // ctx.closePath()
                ctx.stroke()
            }
        }
    }
}
// resize window size
window.addEventListener('resize',
function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    mouse.radius = (canvas.height/80)*(canvas.width/80)
    init()
})

//  mouse out event
window.addEventListener('mouseout',
function(){
    mouse.x = undefined;
    mouse.y = undefined;
})