class RedDot {
    constructor(x,y,s) {
        this.pos = createVector(x,y);
        this.xdir = 0;
        this.ydir = 0;
        this.speed = s;
    }
    distance() {
        let x2 = px;
        let y2 = py;
        let x1 = this.pos.x;
        let y1 = this.pos.y;
        return dist(x1, y1, x2, y2)
    }
    xinbound(x) {
        if (x < 795 && x > 5) {
            return true;
        }
        return false;
    }

    yinbound(y) {
        if (y < 495 && y > 5) {
            return true;
        }
        return false;
    }


    update() {
        let nextXPosition = this.pos.x + this.xdir * this.speed;
        let nextYPosition = this.pos.y + this.ydir * this.speed;
        if (this.distance() < 8) {
            [this.xdir, this.ydir] = [0, 0];
        } else {
            if (!this.xinbound(nextXPosition) && !this.yinbound(nextYPosition)) {

            } else if (!this.xinbound(nextXPosition)) {
                this.pos.y += this.ydir * this.speed;
            } else if (!this.yinbound(nextYPosition)) {
                this.pos.x += this.xdir * this.speed;
            } else {
                this.pos.y += this.ydir * this.speed;
                this.pos.x += this.xdir * this.speed;
            }
        } 

    }

    show() {
        fill(255, 0, 0);
        ellipse(this.pos.x, this.pos.y, 10);
    }

    setDir(px,py) {
        let dx = px - this.pos.x;
        let dy = py - this.pos.y;

        let angle = Math.atan2(dy, dx);
        this.xdir = Math.cos(angle);
        this.ydir = Math.sin(angle);
    }
}