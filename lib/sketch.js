let pointer;
let rez = 20;
let redDots=[];
let items = [];
let w= 1000;
let h = 600;
let px;
let py;
let game;
let playing= true;
let pause;
let start;
let gameover = false;
let iter = 1;
let score = 0;
let img;
let blackhole;
let count = 0;

function preload() {
 img = loadImage("./asset/nuclear.jpg");
}

function setup() {
    start = createButton('start');
    start.id('start');
    start.mousePressed(startGame);
    createCanvas(w, h);
    frameRate(100);
}
function keyPressed() {

    if (start && key === ' ') {
        startGame();
    }
    else if (key === ' ') {
        game.pause();
    }
}

function startGame() {
    if (start ) {
        start = false;
        game = new Game;
        const pause = createButton('pause');
        pause.id('pause')
        pause.mousePressed(game.pause);
        // const button = createButton('reset');
        // button.mousePressed(resetGame);
    }

}

// function resetGame() {
//     score=0;
//     gameover = false;
//     redDots=[];
//     playing = true;
//     game = new Game;
// }


function mouseMoved() {
    if (game) {
        game.mouseMoved();
    }

}

function mouseClicked() {
    pointer.boost();
}

function draw() {
    noStroke();
    background(213, 209, 249);
    textSize(20);
    textStyle(BOLD);
    text(`destroyed: ${count}`,10,20);
    text(`score: ${score}`, 10, 40);
    fill('gray');
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


