
console.log('Script Starting...')
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var sampleRect = {
  x: 10,
  y: 10,
  z: 10,
  w: 10,
  h: 10,
  d: 10,
  hor: 0,
  vert: 0,
  color: "blue",
}

function drawCube(mol) {
  ctx.fillStyle = mol.color;
  ctx.fillRect (mol.x, mol.y, mol.w, mol.h);
}

drawCube(sampleRect)
