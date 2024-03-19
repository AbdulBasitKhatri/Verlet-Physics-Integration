let mx = my = 0;
let md = false;

window.onmousemove = (e)=>{
    mx = e.clientX;
    my = e.clientY;
};
window.onmousedown = (e)=>{
    md = true;
};
window.onmouseup = (e)=>{
    md = false;
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
}