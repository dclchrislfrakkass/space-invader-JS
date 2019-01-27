

function MainBoard(w, h, clr) {
    this.width = w;
    this.height = h;
    this.color = clr;
    
    var mainBoardDiv = document.createElement('div');
    var element = document.getElementById('body');
    mainBoardDiv.setAttribute("id","mainBoard");
    element.insertBefore(mainBoardDiv, null);
    mainBoardDiv.style.width = this.width + "px";
    mainBoardDiv.style.height = this.height + "px";
    mainBoardDiv.style.backgroundColor = this.color;
    
    
    
}