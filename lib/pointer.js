class Pointer {

    constructor() {
        this.xdir = 0;
        this.ydir = 0;
        this.pos = createVector(20,20);
        this.speed = 10;

        this.distance = this.distance.bind(this);
        this.history = [];

    }

    distance() {
        let x2 = pmouseX;
        let y2 = pmouseY;
        let x1 = this.pos.x;
        let y1 = this.pos.y;
        return dist(x1, y1, x2, y2)
    }
    update() {
        let nextXPosition = this.pos.x + this.xdir * this.speed;
        let nextYPosition = this.pos.y + this.ydir * this.speed;
    if (this.distance() < 10) {
        [this.xdir,this.ydir] = [0,0];
    } else {
        if (!this.xinbound(nextXPosition) && !this.yinbound(nextYPosition)) {
            
        } else if (!this.xinbound(nextXPosition) ) {
            this.pos.y += this.ydir * this.speed;        
        } else if (!this.yinbound(nextYPosition)) {
            this.pos.x += this.xdir * this.speed;
        } else {
            this.pos.y += this.ydir * this.speed; 
            this.pos.x += this.xdir * this.speed;
        }
    } 
    let v = createVector(this.pos.x, this.pos.y);
    this.history.push(v);
    if (this.history.length > 10) {
        this.history.splice(0,1);
    }

    }

    show() {
      strokeWeight(2);
      stroke(20, 30, 226);
     fill(255, 251, 145, 127);
     ellipse(this.pos.x, this.pos.y, 10);
     for (let i = 0; i < this.history.length; i++) {
         let pos = this.history[i];
         fill('#7199f7')
         ellipse(pos.x, pos.y, i);
     }

    }

    xinbound(x) {
        if (x < 995 && x > 5) {
            return true;
        }
        return false;
    }

    boost() {
        this.speed =20; 
        setTimeout( ()=> {
            this.speed = 10;
        }, 500);
    }

    yinbound(y) {
        if (y < 595 && y > 5) {
            return true;
        }
        return false;
    }

    setDir(x,y) {
       
        let dx = x - this.pos.x;
        let dy = y- this.pos.y;
        let angle = Math.atan2(dy,dx);
        this.xdir = Math.cos(angle);
        this.ydir = Math.sin(angle);
    

        // if (this.xinbound() && this.yinbound()) {
        // } else if (!this.xinbound()) {
        //     if (this.pos.x === 0) {
        //       this.xdir =   dx <  0 ?  0 : Math.cos(angle);
        //     }
        // }
    }
   
}