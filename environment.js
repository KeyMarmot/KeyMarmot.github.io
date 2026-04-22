
console.log('Script Starting...')
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var sampleRect = {
  x: 50,
  y: 50,
  z: 50,
  w: 50,
  h: 50,
  d: 50,
  hor: 3*Math.PI/2,
  vert: 0,
  color: "blue",
}

const camera = {
  x: 540,
  y: 300,
  z: 0,
  hor: 0,
  vert:0,
}

function drawCube(mol) {
  ctx.fillStyle = mol.color;
  ctx.fillRect (mol.x, mol.y, mol.w, mol.h);
  ctx.fillRect (mol.x, mol.y, mol.w, mol.d);
}

drawCube(sampleRect)
