let pointer;
let rez = 20;
let redDots=[];
let items = [];
let w;
let h;
let px;
let py;
let game;
let playing= true;
let pause;
let start;
let gameover = false;
let iter = 1;

function setup() {
    
    start = createButton('start');
    start.id('start');
    start.mousePressed(startGame);
    let scoreElem = createDiv('score = 0');
    scoreElem.style('color', 'black');
    scoreElem.id('score');
     createCanvas(800, 500);
    w = floor(width / rez);
    h = floor(height / rez);
    frameRate(100);
}

function startGame() {
    start.remove();
    game = new Game;
    const pause = createButton('pause');
    pause.mousePressed(game.pause);
    const button = createButton('reset');
    button.mousePressed(resetGame);

}





function resetGame() {
    gameover = false;
    redDots=[];
    playing = true;
    game = new Game;
}


function mouseMoved() {
    if (game) {
        game.mouseMoved();
    }

}

function mouseClicked() {
    pointer.boost();
}

function draw() {
    if (gameover) {
        alert("Do you want to play again?");
        window.location.reload();
        noLoop();
    } else {
        if (playing) {
            background(220);
            if (game) {
                game.draw();
            } 
        } else {
          background('red'); 
        }

    }

}


