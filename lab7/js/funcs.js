let speed = 5;

let dx1 = 1 + Math.random() * speed;
let dy1 = 1 + Math.random() * speed;
let dx2 = 1 + Math.random() * speed;
let dy2 = 1 + Math.random() * speed;

let x1 = undefined;
let y1 = undefined;
let x2 = undefined;
let y2 = undefined;

let started = false;

let width = undefined;
let height = undefined;

let rectSize = 100;

function draw() {
    let animdiv = document.getElementById('anim');
    let canvas = animdiv.getElementsByTagName('canvas')[0];
    let ctx = canvas.getContext('2d');

    width = animdiv.clientWidth;
    height = animdiv.clientHeight;
    canvas.width = width;
    canvas.height = height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let img1 = new Image();
    img1.src = 'img/dirt.png'
    ctx.fillStyle = ctx.createPattern(img1, "repeat");
    ctx.fillRect(0, 0, width, height / 2);

    let img2 = new Image();
    img2.src = 'img/cobblestone.png'
    ctx.fillStyle = ctx.createPattern(img2, "repeat");
    ctx.fillRect(0, height / 2, width, height / 2);

    if (x1 === undefined) {
        x1 = Math.ceil(Math.random() * (width - rectSize))
        y1 = Math.ceil(Math.random() * (height - rectSize))
        x2 = Math.ceil(Math.random() * (width - rectSize))
        y2 = Math.ceil(Math.random() * (height - rectSize))
    }

    ctx.fillStyle = 'rgb(39, 57, 57)';
    ctx.fillRect(x1, y1, rectSize, rectSize);
    ctx.restore();

    ctx.fillStyle = 'rgb(28, 41, 41)';
    ctx.fillRect(x2, y2, rectSize, rectSize);
    ctx.fill();

    if (started) {
        let leftX = Math.max(x1, x2);
        let rightX = Math.min(x1 + rectSize, x2 + rectSize);
        let topY = Math.max(y1, y2);
        let bottomY = Math.min(y1 + rectSize, y2 + rectSize);

        if (leftX < rightX && topY < bottomY) {
            if (rightX - leftX < bottomY - topY) {
                dx1 = -dx1;
                dx2 = -dx2;
            } else {
                dy1 = -dy1;
                dy2 = -dy2;
            }
        }

        x1 += dx1;
        y1 += dy1;

        if (width <= x1 + rectSize) {
            dx1 = -Math.abs(dx1);
        } else if (x1 <= 0) {
            dx1 = Math.abs(dx1);
        }
        if (height <= y1 + rectSize) {
            dy1 = -Math.abs(dy1);
        } else if (y1 <= 0) {
            dy1 = Math.abs(dy1);
        }

        x2 += dx2;
        y2 += dy2;

        if (width <= x2 + rectSize) {
            dx2 = -Math.abs(dx2);
        } else if (x2 <= 0) {
            dx2 = Math.abs(dx2);
        }
        if (height <= y2 + rectSize) {
            dy2 = -Math.abs(dy2);
        } else if (y2 <= 0) {
            dy2 = Math.abs(dy2);
        }
    }

    setTimeout(draw, 4);
}

function startStop(button) {
    started = !started;
    button.innerHTML = started ? "Stop" : "Start";
}

function reload() {
    x1 = Math.ceil(Math.random() * (width - rectSize));
    y1 = Math.ceil(Math.random() * (height - rectSize));
    x2 = Math.ceil(Math.random() * (width - rectSize));
    y2 = Math.ceil(Math.random() * (height - rectSize));

    dx1 = 1 + Math.random() * speed;
    dy1 = 1 + Math.random() * speed;
    dx2 = 1 + Math.random() * speed;
    dy2 = 1 + Math.random() * speed;

    document.getElementById('startStopButton').innerHTML = 'Start';
    started = false;
}

draw();

document.getElementById('sizeSlider').oninput = function () {
    rectSize = parseInt(this.value);
}