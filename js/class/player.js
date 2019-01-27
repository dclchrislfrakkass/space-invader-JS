

function Player(x, y, size, pv, clr, sp) {
    // this.positionX = x;
    // this.positionY = y;
    this.size = size;
    this.lifePoints = pv;
    this.positionX = x - this.size / 2 ;
    this.positionY = y - this.size / 2 ;
    this.color = clr;
    this.speed = sp;
    
    var playerDiv = document.createElement('div');
    var element = document.getElementById('mainBoard');
    playerDiv.setAttribute('id', "player");
    element.insertBefore(playerDiv, null);
    playerDiv.style.width = this.size + "px";
    playerDiv.style.height = this.size + "px";
    playerDiv.style.backgroundColor = this.color;
    playerDiv.style.position = "relative";
    playerDiv.style.top = this.positionY + "px";
    playerDiv.style.left = this.positionX + "px";
    
    ////////faire bouger le vaisseau


    this.move = function(e) {


        if (e.keyCode == 37 && this.positionX > 0){ //left
            this.positionX -= this.speed;
        } else if(e.keyCode == 39 && this.positionX < MainBoardDiv.width - this.size) { //right
            this.positionX += this.speed;
        }
        playerDiv.style.left = this.positionX + "px";

    }
    


    }