class Game {
    constructor() {
        
        pointer = new Pointer();
        this.spawnItem(5);
        this.spawnRed(20);
        this.iter = 1;
        this.spawnRed = this.spawnRed.bind(this);
        setInterval(() => {
            iter += 1
            this.spawnRed(10 * iter)
        }, 5000)
    }

    gameStatus() {
        if (this.checkCollision(redDots)) {
            gameover = true;

        }
        return false;

    }
    spawnItem(n) {
        for (let i = 0; i < n; i++) {
            let x = floor(random(5, 795));
            let y = floor(random(5, 495));
            [px, py] = [pointer.pos.x, pointer.pos.y]
            while (dist(x, y, px, py) < 150) {
                x = floor(random(5, 795));
                y = floor(random(5, 495));
            }

            items.push(new Item(x, y));
        }
    }

    pause() {
        playing = playing ? false : true;
    }

    checkCollision(arr) {
        for (let i= 0; i < arr.length; i++) {
            let rx = arr[i].pos.x;
            let ry = arr[i].pos.y;
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
        [px,py] = [pointer.pos.x, pointer.pos.y]
        while (dist(x, y, px, py) < 150) {
             x = floor(random(5, 795));
             y = floor(random(5, 495));
        }

        redDots.push(new RedDot(x, y, 3));
    }
}
    draw() {
        if (playing) {
            pointer.update();
            pointer.show();
            // items.forEach(el => {
            //     el.show();
            // })
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