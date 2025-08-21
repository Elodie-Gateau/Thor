// Fonction de comparaison de position

function comparePosition(obj1, obj2) {
  let result = false;
  if (obj1.x === obj2.x && obj1.y === obj2.y) {
    result = true;
  }
  return result;
}

// Fonction pour générer des coordonnées x et y aléatoires
function randomXY(obj) {
  obj.x = Math.floor(Math.random() * 40);
  obj.y = Math.floor(Math.random() * 18);
  return obj;
}

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
const boardDiv = document.querySelector('.board');
for (let trap of traps) {
  let trapDiv = document.createElement('div');
  boardDiv.append(trapDiv);
  trapDiv.setAttribute('class', 'trap');
  trapDiv.style.gridRow = trap.y + 1;
  trapDiv.style.gridColumn = trap.x + 1;
}

// Génerer la position aléatoire de l'éclair
const lightDiv = document.querySelector('.light');
let checkLight = false;
let light = {x: 0, y: 0};

while (!checkLight) {
  light = randomXY(light);
  let result;
  for (let i = 0; i < nTraps; i++) {
    result = comparePosition(light, traps[i]);
    if (result === false) {
      checkLight = true;
    }
  }
}

lightDiv.style.gridRow = light.y + 1;
lightDiv.style.gridColumn = light.x + 1;

// Générer des obstacles

const nBlockers = Number(prompt("Combien d'obstacles souhaites-tu positionner ?"));
const blockers = trapRandom(nBlockers);

for (let blocker of blockers) {
  let blockerDiv = document.createElement('div');
  boardDiv.append(blockerDiv);
  blockerDiv.setAttribute('class', 'blocker');
  blockerDiv.style.display = 'none';
  blockerDiv.style.gridRow = blocker.y + 1;
  blockerDiv.style.gridColumn = blocker.x + 1;
  blocker.blockerDiv = blockerDiv;
}

// Position de Thanos
let thanos = {x: light.x + 1, y: light.y + 1};

const thanosDiv = document.querySelector('.thanos');
thanosDiv.style.gridRow = thanos.y + 1;
thanosDiv.style.gridColumn = thanos.x + 1;

// Variable statut pour définir l'état du jeu : false : en cours, true : terminé
let statut = false;

// Position de Thor
const thor = {
  x: 0,
  y: 0,
  pv: 3
};

const pannelDiv = document.querySelector('.pannel');

for (let i = 0; i < thor.pv; i++) {
  let pvDiv = document.createElement('div');
  pannelDiv.append(pvDiv);
  pvDiv.setAttribute('class', 'pv');
}

// Tentatives du jeu

// Fonction pour définir la nouvelle position selon la direction sélectionnée
const thorDiv = document.querySelector('#thor');

console.log(blockers);

document.addEventListener('keydown', roundGame);
function roundGame(e) {
  console.log(thor);
  let newThor = {x: 0, y: 0};
  newThor.x = thor.x;
  newThor.y = thor.y;
  console.log(newThor);
  if (e.key === 'ArrowDown') {
    newThor.y += 1;
    if (thorDiv.getAttribute('class') === 'thor-down') {
      thorDiv.setAttribute('class', 'thor-down2');
    } else if (thorDiv.getAttribute('class') === 'thor-down2') {
      thorDiv.setAttribute('class', 'thor-down');
    } else {
      thorDiv.setAttribute('class', 'thor-down');
    }
  } else if (e.key === 'ArrowRight') {
    newThor.x += 1;
    if (thorDiv.getAttribute('class') === 'thor-right') {
      thorDiv.setAttribute('class', 'thor-right2');
    } else if (thorDiv.getAttribute('class') === 'thor-right2') {
      thorDiv.setAttribute('class', 'thor-right');
    } else {
      thorDiv.setAttribute('class', 'thor-right');
    }
  } else if (e.key === 'ArrowUp') {
    newThor.y -= 1;
    if (thorDiv.getAttribute('class') === 'thor-up') {
      thorDiv.setAttribute('class', 'thor-up2');
    } else if (thorDiv.getAttribute('class') === 'thor-up2') {
      thorDiv.setAttribute('class', 'thor-up');
    } else {
      thorDiv.setAttribute('class', 'thor-up');
    }
  } else if (e.key === 'ArrowLeft') {
    newThor.x -= 1;
    if (thorDiv.getAttribute('class') === 'thor-left') {
      thorDiv.setAttribute('class', 'thor-left2');
    } else if (thorDiv.getAttribute('class') === 'thor-left2') {
      thorDiv.setAttribute('class', 'thor-left');
    } else {
      thorDiv.setAttribute('class', 'thor-left');
    }
  }
  let checkBlocker = false;
  // const blockersDiv = document.querySelectorAll('.blocker');

  for (let i = 0; i < blockers.length; i++) {
    if (comparePosition(newThor, blockers[i]) === true) {
      checkBlocker = true;
      blockers[i].blockerDiv.style.display = 'block';
      console.log(blockers[i]);
    }
  }

  if (checkBlocker !== true) {
    thor.x = newThor.x;
    thor.y = newThor.y;
  }
  thorDiv.style.gridRow = thor.y + 1;
  thorDiv.style.gridColumn = thor.x + 1;

  let checkTrap = false;
  for (const trap of traps) {
    if (comparePosition(thor, trap) === true) {
      checkTrap = true;
    }
  }
  if (checkTrap === true) {
    thor.pv -= 1;
    thorDiv.setAttribute('class', 'thor-trap');
    const pvDivAll = document.querySelectorAll('.pv');
    pvDivAll[0].remove();
    alert(`Piège ! Tu as perdu 1 point de vie ☠️, il t'en reste ${thor.pv}/3 !`);
  }

  if (comparePosition(thor, light) === true) {
    statut = true;
    const victory = document.querySelector('.victory');
    victory.style.display = 'block';
  } else if (thor.x > 39 || thor.x < 0 || thor.y > 17 || thor.y < 0) {
    statut = true;
    const errorMap = document.querySelector('.error-map');
    errorMap.style.display = 'block';
  } else if (thor.pv === 0) {
    statut = true;
    const defeatPv = document.querySelector('.defeat-pv');
    defeatPv.style.display = 'block';
  } else if (comparePosition(thor, thanos) === true) {
    statut = true;
    const defeatThanos = document.querySelector('.defeat-thanos');
    defeatThanos.style.display = 'block';
  }

  let randomDirection = Math.ceil(Math.random() * 7);

  let newThanos = {x: 0, y: 0};
  newThanos.x = thanos.x;
  newThanos.y = thanos.y;

  if (randomDirection === 1) {
    newThanos.y -= 1;
  } else if (randomDirection === 2) {
    newThanos.y -= 1;
    newThanos.x += 1;
  } else if (randomDirection === 3) {
    newThanos.x += 1;
  } else if (randomDirection === 4) {
    newThanos.y += 1;
    newThanos.x += 1;
  } else if (randomDirection === 5) {
    newThanos.y += 1;
  } else if (randomDirection === 6) {
    newThanos.y += 1;
    newThanos.x -= 1;
  } else if (randomDirection === 7) {
    newThanos.x -= 1;
  } else if (randomDirection === 8) {
    newThanos.y -= 1;
    newThanos.x -= 1;
  }
  if (newThanos.x > 38 || newThanos.x < 0 || newThanos.y > 16 || newThanos.y < 0) {
    thanosDiv.style.gridRow = thanos.y + 1;
    thanosDiv.style.gridColumn = thanos.x + 1;
  } else {
    thanos.x = newThanos.x;
    thanos.y = newThanos.y;
    thanosDiv.style.gridRow = thanos.y + 1;
    thanosDiv.style.gridColumn = thanos.x + 1;
  }
  if (statut === true) {
    document.removeEventListener('keydown', roundGame(e));
  }
}
