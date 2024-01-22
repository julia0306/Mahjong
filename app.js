console.log("connecté");

let container = document.getElementById("container");
let selectedTiles = [];
let tilesMatched;
console.log(container);

let tiles = [];

// Je crée les tuiles 
for (let i = 0; i < 16; i++) {
    let randomNumber = Math.floor(Math.random() * 42);

    let tile1 = document.createElement("img");
    tile1.setAttribute('src', './Assets/tiles/' + randomNumber + '.jpg');
    tile1.setAttribute('id', 'tile_' + i);  
    container.appendChild(tile1);
    tiles.push(tile1);

    let tile2 = document.createElement("img");
    tile2.setAttribute('src', './Assets/tiles/' + randomNumber + '.jpg');
    tile2.setAttribute('id', 'tile_' + (i + 16)); 
    container.appendChild(tile2);
    tiles.push(tile2);
    tile1.style.order = i;
    tile2.style.order = i + 0.5; 
}

// Je vérifie si les deux tuilent matchent 
function checkMatch() {
    if (selectedTiles.length === 2) {
        const [tile1, tile2] = selectedTiles;
        if (tile1.getAttribute('src') === tile2.getAttribute('src')) {
            tilesMatched += 2;
            for (let selectedTile of selectedTiles){selectedTile.style.visibility='hidden'};
            selectedTiles = [];
            console.log("matched");
            
            if (tilesMatched === tiles.length) {
                console.log("Victoire !");
            }
        } else {
            selectedTiles = [];
            
        }
        tiles.forEach(tile=>{tile.removeAttribute('class', 'selected');})
    }
}

// Je mets en place l'écouteur d'évenements 
    tiles.forEach(tile => {
        tile.addEventListener('click', function() {
            if (selectedTiles.length < 2 && !selectedTiles.includes(tile)) {
                selectedTiles.push(tile);
                tile.getAttribute('src');
                tile.setAttribute('class', 'selected');
                checkMatch();
    
            }
        });
    });