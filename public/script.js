const socket = io();
let id

let txt = document.getElementById('txt1');
let canvas = document.getElementById('cnvas')
let ctx = canvas.getContext('2d');

function drawP(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgb(10,10,255)";
    ctx.fillRect (x - 3, y - 3, 6, 6);
}
function send() {
   socket.emit('update', txt.value);
}

function mouse(e) {
    socket.emit('updatem', {x: e.pageX, y: e.pageY, id});
 }

socket.on('txtB', (txtb) => {
    txt.value = txtb
})
socket.on('id', (dt) => {
    id = dt;
})

socket.on('mdrw', (dt) => {
    if(dt.id != id) {
        drawP(dt.x, dt.y);
    }
})