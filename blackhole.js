class BlackHole {
    constructor() {
        this.pos;
        this.touch = false;
        this.active = true;

    }
    checkCollision() {
        if (this.distance() <= 15 && this.touch === false) {
            this.touch = true;
            this.active = false;
            setTimeout(() => {
                blackhole = null;
            }, 1000);
        }
    }

    resetPos() {
        let x = floor(random(5, 795));
        let y = floor(random(5, 495));
        [px, py] = [pointer.pos.x, pointer.pos.y]
        while (dist(x, y, px, py) < 150) {
            x = floor(random(5, 795));
            y = floor(random(5, 495));
        }
        this.pos = createVector(x, y);

    }


    distance() {
        let x2 = pointer.pos.x;
        let y2 = pointer.pos.y;
        let x = this.pos.x;
        let y = this.pos.y;
        return dist(x2, y2, x, y)
    }
    shape() {
        if (!this.touch) {
            return ellipse(this.pos.x, this.pos.y, 20);
        } else {
            return ellipse(this.pos.x, this.pos.y, 400);
        }
    }
    color() {
        return fill('black');
    }


    show() {
        this.checkCollision();
        this.color();
        this.shape();

    }
}