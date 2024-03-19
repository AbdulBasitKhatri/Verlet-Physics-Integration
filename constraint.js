class Constraint {
    constructor(v1, v2, len) {
        this.v1 = v1;
        this.v2 = v2;
        this.len = len;
    }

    update() {
        let distance = Math.sqrt((this.v2.x - this.v1.x) ** 2 + (this.v2.y - this.v1.y) ** 2);
        let difference = distance - this.len;
        let dX = (this.v2.x - this.v1.x) * (difference / distance) * 0.5;
        let dY = (this.v2.y - this.v1.y) * (difference / distance) * 0.5;
        if (this.v1.fixed && !this.v2.fixed) {
            this.v2.x -= dX * 2;
            this.v2.y -= dY * 2;
        } else if (!this.v1.fixed && this.v2.fixed) {
            this.v1.x += dX * 2;
            this.v1.y += dY * 2;
        } else if (!this.v1.fixed && !this.v2.fixed) {
            this.v1.x += dX;
            this.v1.y += dY;
            this.v2.x -= dX;
            this.v2.y -= dY;
        } else {
            return;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.moveTo(this.v1.x, this.v1.y);
        ctx.lineTo(this.v2.x, this.v2.y);
        ctx.stroke();
    }
}