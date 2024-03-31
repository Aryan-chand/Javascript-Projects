let cuurentMoleTile;
let cuurentPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {                                                                                                                            
    for (let i=0 ; i < 9 ; i++) {                                                                                           // set up the grid
        let tile = document.createElement("div");                                                                           // create 9 tile 
        tile.id = i.toString();                                                                                             // assign id to each tile from 0 to 8 
        tile.addEventListener("click" , selectTile);                                                                        
        document.getElementById("board").appendChild(tile);                                                                 // append the all the div to the id = " class "    
    }

    setInterval(setMole , 1000);
    setInterval(setPlant , 800);
}

function getRandomTile(){
    let num = Math.floor(Math.random() *9 );
    return num.toString();
}

function setMole(){  

    if(gameOver){
        return;
    }

    if(cuurentMoleTile) {
        cuurentMoleTile.innerHTML = "" ; 
    }

    let mole = document.createElement("img");
    mole.src = "resource/monty-mole.png";

    let num = getRandomTile();
    if (cuurentPlantTile && cuurentPlantTile.id == num ){
        return;
    }
    cuurentMoleTile = document.getElementById(num);
    cuurentMoleTile.appendChild(mole);
}

function setPlant(){  

    if(gameOver){
        return;
    }

    if(cuurentPlantTile) {
        cuurentPlantTile.innerHTML = "" ; 
    }

    let plant = document.createElement("img");
    plant.src = "resource/piranha-plant.png";

    let num = getRandomTile();
    if (cuurentMoleTile && cuurentMoleTile.id == num ){
        return;
    }
    cuurentPlantTile = document.getElementById(num);
    cuurentPlantTile.appendChild(plant);
}

function selectTile(){

    if(gameOver){
        return;
    }

    if(this == cuurentMoleTile){
        score += 20;
        document.getElementById("score").innerText = score.toString();
    }

    else if ( this == cuurentPlantTile){
        document.getElementById("score").innerText = "Game over : " + score.toString();
        gameOver = true;
    }
}