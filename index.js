let canvas = document.getElementById('game-canvas');
let ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = '#F00';
// ctx.fill();
// ctx.closePath();

function draw() {
    ctx.beginPath();
    ctx.arc(50, 50, 10, 0, Math.PI * 2);
    ctx.fillStyle = '#32ee68';
    ctx.fill();
    ctx.closePath();
}

setInterval(draw, 10);