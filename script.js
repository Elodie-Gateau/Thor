// Définition des pièges

const trap1X = 4;
const trap1Y = 4;
const trap1 = {
  x: trap1X,
  y: trap1Y
};

console.log(`Position du piège 1 : ${JSON.stringify(trap1)}`);

const trap2X = 9;
const trap2Y = 9;
const trap2 = {
  x: trap2X,
  y: trap2Y
};
console.log(`Position du piège 2 : ${JSON.stringify(trap2)}`);

const trap3X = 2;
const trap3Y = 2;
const trap3 = {
  x: trap3X,
  y: trap3Y
};

console.log(`Position du piège 3 : ${JSON.stringify(trap3)}`);

// Fonction de comparaison de position

function comparePosition(obj1, obj2) {
  let result = false;
  if (obj1.x === obj2.x && obj1.y === obj2.y) {
    result = true;
  }
  return result;
}

// Validation de l'emplacement de l'éclair
let checkLight = false;
let light = {
  x: 0,
  y: 0
};

while (!checkLight) {
  const lightX = Number(prompt("Merci de renseigner la position X de l'éclair de puissance"));
  const lightY = Number(prompt("Merci de renseigner la position Y de l'éclair de puissance"));
  // const lightX = 3;
  // const lightY = 8;

  light = {
    x: lightX,
    y: lightY
  };
  if (
    comparePosition(light, trap1) === false &&
    comparePosition(light, trap2) === false &&
    comparePosition(light, trap3) === false
  ) {
    checkLight = true;
    console.log(`La position de l'éclair à trouver : ${JSON.stringify(light)}`);
  } else {
    console.error(`La position de l'éclair est la même que celle d'un piège, merci de redéfinir vos emplacements`);
  }
}

// Validation de l'emplacement de Thor
let checkThor = false;
let thor = {
  x: 0,
  y: 0
};

while (!checkThor) {
  let initialTX = Number(prompt('Merci de renseigner la position X de Thor'));
  let initialTY = Number(prompt('Merci de renseigner la position Y de Thor'));
  // let initialTX = 3;
  // let initialTY = 8;

  thor = {
    x: initialTX,
    y: initialTY
  };
  if (
    comparePosition(thor, trap1) === false &&
    comparePosition(thor, trap2) === false &&
    comparePosition(thor, trap3) === false
  ) {
    checkThor = true;
    console.log(`Position en début de tour : ${JSON.stringify(thor)}`);
  } else {
    console.error(`La position de Thor est la même que celle d'un piège, merci de redéfinir vos emplacements`);
  }
}

// Variable statut pour définir l'état du jeu : false : en cours, true : terminé
let statut = false;

// Fonction pour définir la nouvelle position selon la direction sélectionnée
function mouvement(direction) {
  if (direction === 'N') {
    thor.y -= 1;
  } else if (direction === 'NE') {
    thor.x += 1;
    thor.y -= 1;
  } else if (direction === 'E') {
    thor.x += 1;
  } else if (direction === 'SE') {
    thor.x += 1;
    thor.y += 1;
  } else if (direction === 'S') {
    thor.y += 1;
  } else if (direction === 'SW') {
    thor.x -= 1;
    thor.y += 1;
  } else if (direction === 'W') {
    thor.x -= 1;
  } else if (direction === 'NW') {
    thor.x -= 1;
    thor.y -= 1;
  }
}

// Tentatives du jeu
while (!statut) {
  const direction = prompt(`Quelle direction doit prendre Thor ?
    N : Nord
    NE : Nord-Est
    E : Est
    SE : Sud-Est
    S : Sud
    SW : Sud-Ouest
    W : Ouest
    NW : Nord-Ouest`);
  // if (direction === 'N') {
  //   initialTY -= 1;
  // } else if (direction === 'NE') {
  //   initialTX += 1;
  //   initialTY -= 1;
  // } else if (direction === 'E') {
  //   initialTX += 1;
  // } else if (direction === 'SE') {
  //   initialTX += 1;
  //   initialTY += 1;
  // } else if (direction === 'S') {
  //   initialTY += 1;
  // } else if (direction === 'SW') {
  //   initialTX -= 1;
  //   initialTY += 1;
  // } else if (direction === 'W') {
  //   initialTX -= 1;
  // } else if (direction === 'NW') {
  //   initialTX -= 1;
  //   initialTY -= 1;
  // }
  mouvement(direction);
  console.log(`Direction prise : ${direction}`);
  console.log(`Position en fin de tour : ${JSON.stringify(thor)}`);

  if (comparePosition(thor, light) === true) {
    statut = true;
    console.info(`Victoire !`);
  } else if (thor.x > 39 || thor.x < 0 || thor.y > 17 || thor.y < 0) {
    statut = true;
    console.warn(`Défaite`);
  } else if (comparePosition(thor, trap1) === true) {
    statut = true;
    console.warn(`Défaite : tu es tombé dans un piège ! Position du piège 1 : ${JSON.stringify(trap1)}`);
  } else if (comparePosition(thor, trap2) === true) {
    statut = true;
    console.warn(`Défaite : tu es tombé dans un piège ! Position du piège 1 : ${JSON.stringify(trap2)}`);
  } else if (comparePosition(thor, trap3) === true) {
    statut = true;
    console.warn(`Défaite : tu es tombé dans un piège ! Position du piège 1 : ${JSON.stringify(trap3)}`);
  }
}
