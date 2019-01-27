const MainBoardDiv = new MainBoard(800, 800, "black");
var player = new Player(400, 750, 20, 100, "red", 20);

document.addEventListener("keydown", function(e){

    console.log(e.keyCode); //DEBUG_INFO

    if (e.keyCode == 37 || e.keyCode == 39)
    {
        player.move(e);
    }
    else if (e.keyCode == 38) {
        rocket = new Rocket(4, 15, 20, "orange");
    }

});