let canvas = document.getElementById('game-canvas');
let ctx = canvas.getContext('2d');


canvas.addEventListener('mousemove', onMouseMove);


// Internal
let lastUpdate = Date.now();


// Ball
let ballRadius = 10;

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 1;
let dy = -1;


// Mouse & crosshair
let mousePosition = { x: 0, y: 0 };
let crosshairThickness = 1;
let crosshairLength = 8;


function onMouseMove(event) {

    let rect = canvas.getBoundingClientRect();

    mousePosition = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };

}



function drawCrosshair() {
    ctx.beginPath();
    ctx.rect(mousePosition.x - crosshairLength, mousePosition.y - crosshairThickness, crosshairLength * 2, crosshairThickness * 2);
    ctx.rect(mousePosition.x - crosshairThickness, mousePosition.y - crosshairLength, crosshairThickness * 2, crosshairLength * 2);
    ctx.fillStyle = '#000000aa';
    ctx.fill();
    ctx.closePath();
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#32ee68';
    ctx.fill();
    ctx.closePath();
}


function update(deltaTime) {
    // Ball position & edge collision
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) dx *= -1;
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) dy *= -1;

    x += dx * deltaTime;
    y += dy * deltaTime;

    draw();
}
function fixedUpdate() {

}

function draw(deltaTime) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBall();
    drawCrosshair();
}

function tick() {
    let now = Date.now();
    deltaTime = (now - lastUpdate) / 1000;
    lastUpdate = now;

    update(deltaTime);
    draw(deltaTime);

    window.requestAnimationFrame(tick);
}

window.requestAnimationFrame(tick);