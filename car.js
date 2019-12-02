function Car() {
    this.x = 480;
    this.y = 270;
    this.xspeed = 0;
    this.yspeed = 0;
    this.xaccel = 0;
    this.yaccel = 0;
    this.height = 40;
    this.width = 20;
    this.maxSpeed = 300;
    this.maxAccel = 300;
    this.keyAccel = 40;
    this.deg = 0;
    this.updated = 0;

    this.addVector = function(x, y) {
        this.xaccel += x;
        this.yaccel += y;
        let acAccel = Math.sqrt((this.xaccel * this.xaccel) + (this.yaccel * this.yaccel));
        if (acAccel > this.maxAccel) {
            this.xaccel *= this.maxAccel / acAccel;
            this.yaccel *= this.maxAccel / acAccel;
        }
    }

    this.update = function() {
        if (keyIsDown(UP_ARROW)) {
            this.addVector(0, -this.keyAccel);
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.addVector(0, this.keyAccel);
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.addVector(this.keyAccel, 0);
        }
        if (keyIsDown(LEFT_ARROW)) {
            this.addVector(-this.keyAccel, 0);
        }

        let ut = time;
        let dt = ut - this.updated;
        this.x += this.xspeed * dt;
        this.y += this.yspeed * dt;
        this.xspeed += this.xaccel * dt;
        this.yspeed += this.yaccel * dt;
        let acspeed = Math.sqrt((this.xspeed * this.xspeed) + (this.yspeed * this.yspeed));
        if (acspeed > this.maxSpeed) {
            this.xspeed *= this.maxSpeed / acspeed;
            this.yspeed *= this.maxSpeed / acspeed;
        }
        this.deg = Math.atan(this.yaccel / this.xaccel) + (this.xaccel >= 0 ? PI / 2 : 3 * PI / 2);
        text(`(${Math.round(this.x * 100) / 100}, ${Math.round(this.y * 100) / 100
        })\n(${Math.round(this.xspeed * 100) / 100}, ${Math.round(this.yspeed * 100) / 100
        })\n(${Math.round(this.xaccel * 100) / 100}, ${Math.round(this.yaccel * 100) / 100})`, 860, 440, 100, 100);
        this.init();
    }

    this.init = function() {
        this.updated = (new Date()).getTime() / 1000;
    }

    this.draw = function() {
        fill(0, 0, 200);
        translate(this.x, this.y);
        rotate(this.deg);
        rect(0, 0, this.width, this.height);
        fill(200, 0, 0);
        circle(0, 0, 10);
    }
}