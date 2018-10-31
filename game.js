class Game {
    constructor() {

        pointer = new Pointer();
        this.spawnRed(4);
    }

    gameStatus() {
        if (this.checkCollision()) {
            gameover = true;

        }
        return false;

    }
    pause() {
        playing = playing ? false : true;
    }

    checkCollision() {
        for (let i= 0; i < redDots.length; i++) {
            let rx = redDots[i].pos.x;
            let ry = redDots[i].pos.y;
            let px = pointer.pos.x;
            let py = pointer.pos.y;
            if (dist(rx, ry, px, py) <= 10) {
                return true;
            }
        }
        return false;
    }

    mouseMoved() {
        pointer.setDir(pmouseX, pmouseY)
        px = pointer.pos.x;
        py = pointer.pos.y;
        redDots.forEach(el => {
            el.setDir(px, py);
        })

    }
     spawnRed(n) {
    for (let i = 0; i < n; i++) {
        let x = floor(random(5, 795));
        let y = floor(random(5, 495));
        redDots.push(new RedDot(x, y, 3));
    }
}
    draw() {
        if (playing) {
            pointer.update();
            pointer.show();
            redDots.forEach(red => {
                red.update();
                red.show();
            })
            this.gameStatus();
        } else {
            pointer.show();
            redDots.forEach(red => {
                red.show();
            })
        }
    }

}