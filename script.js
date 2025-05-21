let lightX = 3;
let lightY = 8;
let initialTX = 3;
let initialTY = 6;

let thor = {
    inGameX = initialTX,
    inGameY = initialTY
}

let statut = false;

for(let i = 0; !statut ; i++) {
    const direction = prompt(`Quelle direction doit prendre Thor ?
    N : Nord 
    NE : Nord-Est 
    E : Est 
    SE : Sud-Est 
    S : Sud 
    SW : Sud-Ouest 
    W : Ouest 
    NW : Nord-Ouest`);

}

// Condition de victoire

if (lightX === initialTX)