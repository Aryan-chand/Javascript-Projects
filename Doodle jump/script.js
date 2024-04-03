let board ;
let boardWidth = 360;
let boardHeight = 576 ;
let context ; 

let doodlerWidth = 46;
let doodlerHeight = 46;
let doodlerX = boardWidth/2 - doodlerHeight/2 ;
let doodlerY = boardHeight*7/8 - doodlerHeight ;
let doodlerRight ;
let doodlerLeft ;

let doodler = {
    img : null ,
    x : doodlerX ,
    y : doodlerY ,
    width : doodlerWidth,
    height : doodlerHeight 
}

window.onload = function (){
    board = document.getElementById("board");
    board.height = boardHeight ;
    board.width = boardWidth;
    context = board.getContext("2d");

    context.fillStyle = " green ";
    context.fillRect(doodler.x , doodler.y , doodler.width , doodler.height)

}