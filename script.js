const canvas = document.createElement("canvas")

document.body.appendChild(canvas)

const ctx = canvas.getContext("2d")

canvas.style.position="fixed"
canvas.style.top="0"
canvas.style.left="0"
canvas.style.zIndex="-1"

canvas.width=window.innerWidth
canvas.height=window.innerHeight


let waves=[]

for(let i=0;i<5;i++){

waves.push({

radius:100+i*80

})

}


function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

waves.forEach(w=>{

ctx.beginPath()

ctx.arc(canvas.width/2,canvas.height/2,w.radius,0,Math.PI*2)

ctx.strokeStyle="rgba(255,255,255,0.05)"

ctx.lineWidth=2

ctx.stroke()

w.radius+=0.3

if(w.radius>600){

w.radius=100

}

})

requestAnimationFrame(animate)

}

animate()