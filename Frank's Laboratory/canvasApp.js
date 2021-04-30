const canvas = document.getElementById("canvas-1");
const ctx = canvas.getContext("2d");
// console.log(ctx)
const particleArray = [];
let hue = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// stoke is like border in the plain css
// ctx.beginPath()
// ctx.lineWidth = '4'
// ctx.fillStyle = 'red'
// ctx.strokeStyle = 'red'
// ctx.arc(100,100,20,0,Math.PI *2)
// ctx.fill()
// ctx.stroke()

// *&******* Lets make some drawing pen fun ********************

const mouse = {
  x: undefined,
  y: undefined,
};
canvas.addEventListener("click", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  // drawCircle()
  for (let i = 0; i < 10; i++) {
    particleArray.push(new Particle());
  }
});

canvas.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  // drawCircle()
  for (let i = 0; i < 8; i++) {
    particleArray.push(new Particle());
  }
});

// Lets create som many particles
class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    // this.x = Math.random()*canvas.width
    // this.y = Math.random()*canvas.height
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 2 - 1.5;
    this.speedY = Math.random() * 2 - 1.5;
    this.color = "hsl(" + hue + ", 100%,50%)";
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) {
      this.size -= 0.1;
    }
  }
  // hsl=> hue saturation lightness hsl(color weel,saturation,lightness)
  draw() {
    ctx.beginPath();
    // ctx.lineWidth = '2'
    ctx.fillStyle = this.color;
    // ctx.strokeStyle = 'blue'
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    // ctx.stroke()
  }
}

function handleParticle() {
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
    particleArray[i].draw();

    for (let j = i; j < particleArray.length; j++) {
      const dx = particleArray[i].x - particleArray[j].x;
      const dy = particleArray[i].y - particleArray[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if(distance<150) {
          ctx.beginPath()
          ctx.strokeStyle = particleArray[i].color;
          ctx.lineWidth = particleArray[i].size /10;
          ctx.moveTo(particleArray[i].x,particleArray[i].y)
          ctx.lineTo(particleArray[j].x,particleArray[j].y)
          ctx.stroke()
      }
    }
    if (particleArray[i].size <= 1) {
        particleArray.splice(i, 1);
        i--;
        console.log(particleArray.length);
      }
  }
 
}

function animate() {
  // ctx.clearRect(0,0,canvas.width,canvas.height)
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  handleParticle();
  hue += 5;
  requestAnimationFrame(animate);
}
console.log(particleArray);
animate();
