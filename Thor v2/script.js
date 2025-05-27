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

// Génerer la position aléatoire de l'éclair
const lightDiv = document.querySelector('.light');
let light = {x: 0, y: 0};
light = randomXY(light);

lightDiv.style.gridRow = light.y + 1;
lightDiv.style.gridColumn = light.x + 1;

console.log(`La position de l'éclair à trouver : ${JSON.stringify(light)}`);

// Variable statut pour définir l'état du jeu : false : en cours, true : terminé
let statut = false;

// Position de Thor
const thor = {
  x: 0,
  y: 0
};

// Tentatives du jeu

// Fonction pour définir la nouvelle position selon la direction sélectionnée
document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'ArrowDown') {
    thor.y += 1;
    console.log(e.key);
  } else if (e.key === 'ArrowRight') {
    thor.x += 1;
    console.log(e.key);
  } else if (e.key === 'ArrowUp') {
    thor.y -= 1;
    console.log(e.key);
  } else if (e.key === 'ArrowLeft') {
    thor.x -= 1;
    console.log(e.key);
  }

  const thorDiv = document.querySelector('.thor');

  thorDiv.style.gridRow = thor.y + 1;
  thorDiv.style.gridColumn = thor.x + 1;

  console.log(`Position de l'éclair : ${JSON.stringify(light)}`);

  console.log(`Thor en fin de tour : ${JSON.stringify(thor)}`);

  if (comparePosition(thor, light) === true) {
    statut = true;
    alert(`Victoire ! ⚡️`);
  } else if (thor.x > 39 || thor.x < 0 || thor.y > 17 || thor.y < 0) {
    statut = true;
    alert(`Défaite, tu es sorti de la map 😩`);
  } else if (thor.pv === 0) {
    statut = true;
    alert(`Défaite tu n'as plus de points de vie ☠️☠️☠️`);
  }
});
