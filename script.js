// Fonction pour générer des coordonnées x et y aléatoires
function randomXY(obj) {
  obj.x = Math.floor(Math.random() * 40);
  obj.y = Math.floor(Math.random() * 18);
  return (obj = {
    x: obj.x,
    y: obj.y
  });
}

// Définition des pièges

// const trap1X = 4;
// const trap1Y = 4;
// const trap1 = {
//   x: trap1X,
//   y: trap1Y
// };

// console.log(`Position du piège 1 : ${JSON.stringify(trap1)}`);

// const trap2X = 9;
// const trap2Y = 9;
// const trap2 = {
//   x: trap2X,
//   y: trap2Y
// };
// console.log(`Position du piège 2 : ${JSON.stringify(trap2)}`);

// const trap3X = 2;
// const trap3Y = 2;
// const trap3 = {
//   x: trap3X,
//   y: trap3Y
// };

// console.log(`Position du piège 3 : ${JSON.stringify(trap3)}`);

// Fonction pour automatiser les pièges
function trapRandom(n) {
  const traps = [];
  for (let i = 0; i < n; i++) {
    const trap = {x: 0, y: 0};
    trap.x = Math.floor(Math.random() * 40);
    trap.y = Math.floor(Math.random() * 18);
    traps.push(trap);
  }
  return traps;
}

// Générer les pièges
const nTraps = Number(prompt('Combien de pièges souhaites-tu positionner ?'));
const traps = trapRandom(nTraps);
console.log(`Nombre de pièges : ${nTraps}, 
  Position des pièges : ${JSON.stringify(traps)}`);

// Générer des obstacles

const nBlockers = Number(prompt("Combien d'obstacles souhaites-tu positionner ?"));
const blockers = trapRandom(nBlockers);
console.log(`Nombre d'obstacles : ${nBlockers}, 
  Position des obstacles : ${JSON.stringify(blockers)}`);

// Fonction de comparaison de position

function comparePosition(obj1, obj2) {
  let result = false;
  if (obj1.x === obj2.x && obj1.y === obj2.y) {
    result = true;
  }
  return result;
}

// Validation de l'emplacement de l'éclair
// let checkLight = false;
let checkLight = false;
let light = {
  x: 0,
  y: 0
};

randomXY(light);
console.log(`Position de l'éclair : ${JSON.stringify(light)}`);

while (!checkLight) {
  // const lightX = Number(prompt("Merci de renseigner la position X de l'éclair de puissance"));
  // const lightY = Number(prompt("Merci de renseigner la position Y de l'éclair de puissance"));
  // const lightX = 1;
  // const lightY = 1;

  // light = {
  //   x: lightX,
  //   y: lightY
  // };
  let result;
  for (let i = 0; i < nTraps; i++) {
    result = comparePosition(light, traps[i]);
    if (result === true) {
      console.warn(`La position de l'éclair est la même que celle d'un piège, merci de redéfinir vos emplacements`);
    } else {
      checkLight = true;
      console.log(`La position de l'éclair à trouver : ${JSON.stringify(light)}`);
    }
  }
  // if (
  //   comparePosition(light, trap1) === false &&
  //   comparePosition(light, trap2) === false &&
  //   comparePosition(light, trap3) === false
  // ) {
  //   checkLight = true;
  //   console.log(`La position de l'éclair à trouver : ${JSON.stringify(light)}`);
  // } else {
  //   console.warn(`La position de l'éclair est la même que celle d'un piège, merci de redéfinir vos emplacements`);
  // }
}

// Validation de l'emplacement de Thor
let checkThor = false;
const thor = {
  x: 0,
  y: 0,
  pv: 3
};

while (!checkThor) {
  // let initialTX = Number(prompt('Merci de renseigner la position X de Thor'));
  // let initialTY = Number(prompt('Merci de renseigner la position Y de Thor'));
  let initialTX = 3;
  let initialTY = 3;

  thor.x = initialTX;
  thor.y = initialTY;

  let result;
  for (let i = 0; i < nTraps; i++) {
    result = comparePosition(thor, traps[i]);
    if (result === true) {
      console.warn(`La position de Thor est la même que celle d'un piège, merci de redéfinir vos emplacements`);
    } else {
      checkThor = true;
      console.log(`Thor en début de tour : ${JSON.stringify(thor)}`);
    }
  }
}

// Variable statut pour définir l'état du jeu : false : en cours, true : terminé
let statut = false;

// Fonction pour définir la nouvelle position selon la direction sélectionnée
function mouvement(direction, perso) {
  if (direction === 'N') {
    perso.y -= 1;
  } else if (direction === 'NE') {
    perso.x += 1;
    perso.y -= 1;
  } else if (direction === 'E') {
    perso.x += 1;
  } else if (direction === 'SE') {
    perso.x += 1;
    perso.y += 1;
  } else if (direction === 'S') {
    perso.y += 1;
  } else if (direction === 'SW') {
    perso.x -= 1;
    perso.y += 1;
  } else if (direction === 'W') {
    perso.x -= 1;
  } else if (direction === 'NW') {
    perso.x -= 1;
    perso.y -= 1;
  }
  let newPerso = {x: perso.x, y: perso.y};
  return newPerso;
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
  // const direction = 'SE';

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
  let newThor = mouvement(direction, thor);
  console.log(newThor);
  for (const blocker of blockers) {
    if (comparePosition(thor, blocker) !== true) {
      thor = newThor;
    } else {
      console.warn(`Obstacle ! Tu ne peux pas faire ce déplacement : ${JSON.stringify(blocker)}`);
    }
  }

  console.log(`Position de l'éclair : ${JSON.stringify(light)}`);

  console.log(`Nombre de pièges : ${n}, 
  Position des pièges : ${JSON.stringify(trapRandom(n))}`);

  console.log(`Direction prise : ${direction}`);

  console.log(`Thor en fin de tour : ${JSON.stringify(thor)}`);

  for (const trap of traps) {
    if (comparePosition(thor, trap) === true) {
      thor.pv -= 1;
      console.warn(
        `Piège ! Tu as perdu 1 point de vie, il t'en reste ${thor.pv}/3 ! Position du piège : ${JSON.stringify(trap)}`
      );
    }
  }

  // if (comparePosition(thor, trap1) === true) {
  //   thor.pv -= 1;
  //   console.warn(
  //     `Piège ! Tu as perdu 1 point de vie, il t'en reste ${thor.pv}/3 ! Position du piège 1 : ${JSON.stringify(trap1)}`
  //   );
  // } else if (comparePosition(thor, trap2) === true) {
  //   thor.pv -= 1;
  //   console.warn(
  //     `Piège ! Tu as perdu 1 point de vie, il t'en reste ${thor.pv}/3 ! Position du piège 2 : ${JSON.stringify(trap2)}`
  //   );
  // } else if (comparePosition(thor, trap3) === true) {
  //   thor.pv -= 1;
  //   console.warn(
  //     `Piège ! Tu as perdu 1 point de vie, il t'en reste ${thor.pv}/3 ! Position du piège 3 : ${JSON.stringify(trap3)}`
  //   );
  // }

  if (comparePosition(thor, light) === true) {
    statut = true;
    console.warn(`Victoire !`);
  } else if (thor.x > 39 || thor.x < 0 || thor.y > 17 || thor.y < 0) {
    statut = true;
    console.warn(`Défaite, tu es sorti de la map`);
  } else if (thor.pv === 0) {
    statut = true;
    console.warn(`Défaite tu n'as plus de points de vie`);
  }
}
