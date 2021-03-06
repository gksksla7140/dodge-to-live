class Item {
    constructor(x,y) {
        this.pos =  createVector(x,y);   
        this.touch = false;

    }
    checkCollision() {
        if (this.distance() <= 15 && this.touch === false) {
            this.touch = true;
            setTimeout(()=> {
                this.resetPos();
                this.touch = false;
            }, 1000)
        }
    }

    resetPos() {
        let x = floor(random(5, 995));
        let y = floor(random(5, 595));
        [px, py] = [pointer.pos.x, pointer.pos.y]
        while (dist(x, y, px, py) < 150) {
            x = floor(random(5, 995));
            y = floor(random(5, 595));
        }
        this.pos = createVector(x,y);
        
    }


    distance() {
        let x2 = pointer.pos.x;
        let y2 = pointer.pos.y;
        let x = this.pos.x;
        let y = this.pos.y;
        return dist(x2,y2, x, y)
    }
    shape() {
        if (!this.touch) {
            return ellipse(this.pos.x, this.pos.y, 20);
        } else {
            return ellipse(this.pos.x, this.pos.y, 60);
        }
    }
    color() {
        return fill('#e59f12');
    }


    show() {
          strokeWeight(2);
          stroke(255, 251, 145);
          fill(255, 251, 145, 127);
        this.checkCollision();
        this.color();
        this.shape();


    }
}