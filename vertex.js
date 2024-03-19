class Vertex{
    constructor(x,y,r,fixed = false,worldBound = true){
        this.x = x;
        this.y = y;
        this.px = x;
        this.py = y;
        this.r = r;
        this.friction = 1;
        this.gravity = 2;
        this.fixed = fixed;
        this.worldBound = worldBound;
    }
    worldBoundCheck(){
        if(this.fixed){
            return;
        }
        if(this.worldBound){
            let velX = (this.x - this.px) * this.friction;
            let velY = (this.y - this.py) * this.friction;
            if(this.y+this.r > ch){
                this.y = ch-this.r;
                this.py = (this.y + velY);
            }
            else if(this.y-this.r < 0){
                this.y = this.r;
                this.py = (this.y + velY);
            }
            if(this.x+this.r > cw){
                this.x = cw-this.r;
                this.px = (this.x + velX);
            }
            else if(this.x-this.r < 0){
                this.x = this.r;
                this.px = (this.x + velX);
            }
        }
    }
    update(){
        if(this.fixed){
            return;
        }
        const velX = (this.x - this.px) * this.friction;
        const velY = (this.y - this.py) * this.friction;
        this.px = this.x;
        this.py = this.y;
        this.x += velX;
        this.y += velY;
        this.y += this.gravity;
    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle = "rgb(10,80,80)";
        ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
    }
}