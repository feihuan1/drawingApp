const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");


const ctx = canvas.getContext("2d");

let size = 10;
isPressed = false;
let color = 'black';
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
   
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2)
        drawLine(x,y,x2,y2)

        x = x2;
        y = y2;
    }
})


function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2); //circle position x,y from top left of canvas and choose size(半徑)
    ctx.fillStyle = color; //clor filled in circle
    ctx.fill() //draw
}
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1)  //line starts
    ctx.lineTo(x2, y2) //line ends
    ctx.strokeStyle = color //create a line
    ctx.lineWidth = size * 2; //line width
    ctx.stroke(); //draw
}

function updateSizeOnScreen() {
    sizeEl.innerText = size
}

colorEl.addEventListener('change', e => color = e.target.value)
increaseBtn.addEventListener('click', () => {
    decreaseBtn.removeAttribute('disabled')
    size += 5;
    if(size >= 50){
        increaseBtn.setAttribute('disabled', '')
    }
    updateSizeOnScreen()
})
decreaseBtn.addEventListener('click', () => {
    increaseBtn.removeAttribute('disabled')
    size -= 5;
    if(size <= 0){
        decreaseBtn.setAttribute('disabled', '')
    }
    updateSizeOnScreen()
})

clearEl.addEventListener('click',() => ctx.clearRect(0,0,canvas.width,canvas.width))//clear starts at  x0,y0, clear size is the entire canvas width and heights