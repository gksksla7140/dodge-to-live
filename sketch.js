let pointer;
let rez = 20;
let redDots=[];
let items = [];
let w= 800;
let h = 500;
let px;
let py;
let game;
let playing= true;
let pause;
let start;
let gameover = false;
let iter = 1;
let score = 0;

function setup() {
    start = createButton('start');
    start.id('start');
    start.mousePressed(startGame);
    // let scoreElem = createDiv(`score: ${score}`);
    // scoreElem.style('color', 'black');
    // scoreElem.id('score');
     createCanvas(w, h);
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
    score=0;
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
    background(220);
    text(`score: ${score}`, 10, 20);
    textSize(20);
    textStyle(BOLD);
    if (gameover) {
        alert("Do you want to play again?");
        window.location.reload();
        noLoop();
    } else {
        if (playing) {
            if (game) {
                game.draw();
            } 
        } else {
          background('gray'); 
            textSize(100);
            fill('black');
          text('Paused', w/3.5, h/2);
        }

    }

}


