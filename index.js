let canvas = document.getElementById('game-canvas');
let ctx = canvas.getContext('2d');


canvas.addEventListener('mousemove', onMouseMove);
canvas.addEventListener('click', onMouseDown);


// Internal
let lastUpdate = Date.now();


// Ball
let ballRadius = 10;
const initialBallPos = { x: canvas.width / 2, y: canvas.height - ballRadius - 10 };
let ballPos = { ...initialBallPos };
let ballSpeed = 500;
let ballDir = { x: 0, y: 0 }


// Mouse & crosshair
let mousePos = { x: 0, y: 0 };
let crosshairThickness = 1;
let crosshairLength = 8;


// Blocks
let blockGrid = [];






function onMouseMove(event) {
    let rect = canvas.getBoundingClientRect();

    mousePos = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function onMouseDown(event) {
    // Fire ball
    let direction = getBallMovementDirection();

    ballDir = { ...direction };
}







function getBallMovementDirection() {
    // ballpos -> mousepos
    let x = mousePos.x - ballPos.x;
    let y = mousePos.y - ballPos.y;
    let magnitude = Math.sqrt(x * x + y * y);

    return {
        x: x / magnitude,
        y: y / magnitude
    };
}






function renderCrosshair() {
    ctx.beginPath();
    ctx.rect(mousePos.x - crosshairLength, mousePos.y - crosshairThickness, crosshairLength * 2, crosshairThickness * 2);
    ctx.rect(mousePos.x - crosshairThickness, mousePos.y - crosshairLength, crosshairThickness * 2, crosshairLength * 2);
    ctx.fillStyle = '#000000aa';
    ctx.fill();
    ctx.closePath();
}

function renderBall() {
    ctx.beginPath();
    ctx.arc(ballPos.x, ballPos.y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#32ee68';
    ctx.fill();
    ctx.closePath();
}




function update(deltaTime) {
    // Ball position & edge collision
    let dxt = ballDir.x * deltaTime;
    let dyt = ballDir.y * deltaTime;
    let changeBallPos = true;

    if (ballPos.x + dxt > canvas.width - ballRadius || ballPos.x + dxt < ballRadius) ballDir.x *= -1;
    if (ballPos.y + dyt < ballRadius) ballDir.y *= -1;

    if (ballPos.y + dyt > canvas.height - ballRadius) {
        ballDir = { x: 0, y: 0 };
        ballPos = { ...initialBallPos };

        changeBallPos = false;
    }

    if (changeBallPos) {
        ballPos.x += ballDir.x * deltaTime * ballSpeed;
        ballPos.y += ballDir.y * deltaTime * ballSpeed;
    }
}




function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    renderBall();
    renderCrosshair();
}



function tick() {
    let now = Date.now();
    deltaTime = (now - lastUpdate) / 1000;
    lastUpdate = now;

    update(deltaTime);
    render();

    window.requestAnimationFrame(tick);
}







window.requestAnimationFrame(tick);