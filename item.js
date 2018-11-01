class Item {
    constructor(x,y) {
        this.pos =  createVector(x,y);   
        this.touch = false;

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
            return  ellipse(this.pos.x, this.pos.y, 10);
        } else {
            return ellipse(this.pos.x, this.pos.y, 10);
        }


    }
    color() {
        return fill('#e59f12');
    }


    show() {
        this.color();
        this.shape();

    }
}