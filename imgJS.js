function upload(){
    var msg = document.getElementById("message");
    msg.innerHTML = '<p>Running function</p>';
    var flin = document.getElementById("imgin");
    msg.innerHTML = '<p>Uploading image</p>';
    var image = new SimpleImage(flin);
    msg.innerHTML = '<p>Loading........</p>';
    var canvas = document.getElementById("frame");
    image.drawTo(canvas);
    msg.innerHTML = '<p>Image!!!!!!!!</p>';
}
