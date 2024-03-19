let canvas = document.getElementById("display");
let ctx = canvas.getContext("2d");

let cw = canvas.width = window.innerWidth-10;
let ch = canvas.height = window.innerHeight-10;

let box1 = new Box(cw/2,10,100,100,true,true);
let box2 = new Box(cw/4,10,150,50,true,true);
let box3 = new Box(cw/1.2,10,150,250,true,true);
let p1 = new Vertex(cw/2,200,5,true);
let c1 = new Constraint(p1,box1.vertices[0],100);
let c2 = new Constraint(box2.vertices[0],box3.vertices[0],500);

function animate(){
    ctx.clearRect(0,0,cw,ch);
    ctx.fillStyle = "rgb(210,210,210)";
    ctx.fillRect(0,0,cw,ch);
    if(md){
        box2.vertices[0].x = mx;
        box2.vertices[0].y = my;
    }
    // c1.update();
    c2.update();
    // box1.update();
    box2.update();
    box3.update();
    // c1.draw();
    c2.draw();
    // p1.draw();
    requestAnimationFrame(animate);
}
animate();