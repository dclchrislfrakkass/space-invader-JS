function Rocket(size, speed, dmgs, color) {


    this.size = size,
    this.speed =  speed;
    this.damages = dmgs;
    this.positionX= player.positionX;
    this.positionY = player.positionY - player.size;
    this.color = color;

    console.log("roquette instanciée avec la position X " + this.positionX + "et la position Y" + this.positionY);

    var rocketDiv = document.createElement('div');
    var element = document.getElementById('mainBoard');
    rocketDiv.setAttribute('class', "rocket");
    element.insertBefore(rocketDiv, null);
    rocketDiv.style.width = this.size + "px";
    rocketDiv.style.height = this.size + "px";
    rocketDiv.style.backgroundColor = this.color;
    rocketDiv.style.position = "relative";
    rocketDiv.style.top = this.positionY + "px";
    rocketDiv.style.left = this.positionX + "px";





}